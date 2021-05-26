package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.base.BaseController;
import com.tnx.po.*;
import com.tnx.service.*;
import com.tnx.utils.Constants;
import com.tnx.utils.Pager;

import com.tnx.utils.UUIDUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

/**
 * @ClassName ItemOrderController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--19--14:33
 **/
@Controller
@RequestMapping("/itemOrder")
public class ItemOrderController extends BaseController {

    @Autowired
    private ItemOrderService itemOrderService;

    @Autowired
    private UserService userService;

    @Autowired
    private CarService CarService;

    @Autowired
    private ItemService itemService;

    @Autowired
    private OrderDetailService orderDetailService;

    @Autowired
    private PayService payService;

    private Integer flag = 0;

    @RequestMapping("/findBySql")
    public String findBySql(ItemOrder itemOrder, Model model) {
        //分页查询
        String sql = "select * from item_order where 1=1 ";
        //检查订单号
        if (!(isEmpty(itemOrder.getCode()))) {
            sql += " and code like '%" + itemOrder.getCode() + "%' ";
        }
        sql += " order by id desc";
        Pager<ItemOrder> pagers = itemOrderService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers", pagers);
        //存储查询条件
        model.addAttribute("obj", itemOrder);
        return "itemOrder/itemOrder";
    }

    /**
     * 查看订单
     *
     * @param model
     * @param request
     * @return
     */
    @RequestMapping("/my")
    public String my(Model model, HttpServletRequest request ,String refund_msg) {
        //判断是否登录，这里在支付成功后判断session中没有用户id
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if (attribute == null) {
            return "redirect:/login/uLogin";
        }
        Integer userId = Integer.valueOf(attribute.toString());
        //全部订单
        String sql = "select * from item_order where user_id=" + userId + " order by id desc";
        List<ItemOrder> all = itemOrderService.listBySqlReturnEntity(sql);
        //待支付
        String sql21 = "select * from item_order where user_id=" + userId + " and status=-1 order by id desc";
        List<ItemOrder> dzf = itemOrderService.listBySqlReturnEntity(sql21);
        //待发货
        String sql2 = "select * from item_order where user_id=" + userId + " and status=0 and item_id !=1 order by id desc";
        List<ItemOrder> dfh = itemOrderService.listBySqlReturnEntity(sql2);

        //已取消
        String sql3 = "select * from item_order where user_id=" + userId + " and status=1 order by id desc";
        List<ItemOrder> yqx = itemOrderService.listBySqlReturnEntity(sql3);
        //已发货
        String sql4 = "select * from item_order where user_id=" + userId + " and status=2 order by id desc";
        List<ItemOrder> dsh = itemOrderService.listBySqlReturnEntity(sql4);
        //已收货
        String sql5 = "select * from item_order where user_id=" + userId + " and status=3 order by id desc";
        List<ItemOrder> ysh = itemOrderService.listBySqlReturnEntity(sql5);

        model.addAttribute("all", all);
        model.addAttribute("dzf", dzf);
        model.addAttribute("dfh", dfh);
        model.addAttribute("yqx", yqx);
        model.addAttribute("dsh", dsh);
        model.addAttribute("ysh", ysh);
        model.addAttribute("refund_msg", refund_msg);
//        if (payId != null)
//            model.addAttribute("payId", payId);
//        else{
//
//        }
        return "itemOrder/myOrder";
    }

    @RequestMapping("/isOffLine")
    @ResponseBody
    public String isOffLine(Integer offLineFlag){
        System.out.println("offLineFlag" + offLineFlag);
        JSONObject jsonObject = new JSONObject();
        if(offLineFlag == 1){
            flag = offLineFlag;
            jsonObject.put("offLine", 1);
        }else{
            jsonObject.put("offLine", 0);
        }
        return jsonObject.toJSONString();
    }


    /**
     * 结算添加订单，前台根据res的值
     *
     * @param list
     * @param request
     * @return
     */
    @RequestMapping("/exAdd")
    @ResponseBody
    public String exAdd(@RequestBody List<CarDto> list, HttpServletRequest request) {
        //验证登录状态
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        JSONObject js = new JSONObject();
        if (attribute == null) {
            js.put(Constants.RES, 0);
            return js.toJSONString();
        }

        //根据userid获取用户的信息判断地址是否为空
        Integer userId = Integer.valueOf(attribute.toString());
        User byId = userService.getById(userId);
        if (StringUtils.isEmpty(byId.getAddress())) {
            js.put(Constants.RES, 2);
            return js.toJSONString();
        }

        //拿信息存数据库
        List<Integer> ids = new ArrayList<>();
        BigDecimal to = new BigDecimal(0);
        //计算购物车所有商品的总价
        for (CarDto c : list
        ) {
            ids.add(c.getId());
            //获取购物车中的每条信息
            Car load = CarService.load(c.getId());
            to = to.add(new BigDecimal(load.getPrice()).multiply(new BigDecimal(c.getNum())));

        }
        //设置订单和支付订单信息，
        String payInfo = "";
        ItemOrder order = new ItemOrder();
        String orderAndPayCode = getOrderNo();
        order.setStatus(-1);
        order.setItemId(0);//0表示线上，1表示线下
        order.setCode(orderAndPayCode);
        order.setIsDelete(0);
        order.setTotal(to.setScale(2, BigDecimal.ROUND_HALF_UP).toString());//用bigdecimal设置精确度保留两位小数。
        order.setUserId(userId);
        order.setAddTime(new Date());
        if(flag == 1){
            order.setItemId(flag);
            flag = 0;
        }
        itemOrderService.insert(order);
        int orderId = order.getId();
        //将订单详情放入orderDetail中，删除购物车，这里是一对多的关系,ids是订单中商品综述，ids为空，list一定为空
        if (!CollectionUtils.isEmpty(ids)) {
            //对每一件商品信息进行更新
            for (CarDto c : list) {
                Car load = CarService.load(c.getId());
                OrderDetail de = new OrderDetail();
                de.setItemId(load.getItemId());
                de.setOrderId(order.getId());
                de.setStatus(0);
                de.setNum(c.getNum());
                de.setUserId(userId);
                de.setTotal(String.valueOf(c.getNum() * load.getPrice()));
                orderDetailService.insert(de);
                //修改成交数,由购物车中的商品id查找商品进行更新操作
                Item load2 = itemService.load(load.getItemId());
                load2.setGmNum(load2.getGmNum() + c.getNum());
                payInfo += load2.getName() + ",";//设置支付info信息
                itemService.updateById(load2);
                //删除购物车
                CarService.deleteById(c.getId());
            }
        }
        //支付前pay表需要添加的信息
        Pay pay = new Pay();
        pay.setSn(orderAndPayCode);
        pay.setTotalAmount(to.setScale(2, BigDecimal.ROUND_HALF_UP).toString());
        pay.setInfo(payInfo);
        pay.setTitle(payInfo);
        pay.setItemOrderId(orderId);
        pay.setStatus(0);
        payService.insert(pay);
        int payId = pay.getId();
        //request.setAttribute("payId",payId);
        js.put(Constants.RES, 1);
        js.put("payId", payId);
        return js.toJSONString();
    }

    /**
     * 订单号的生成，对方法加同步锁保证获取订单的唯一，
     * 然后根据日期生成订单号
     */
    public static synchronized String getOrderNo() {
        return UUIDUtils.random().toUpperCase();
    }

    /**
     * 取消订单
     *
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("/qx")
    public String qx(Integer id, Model model) {
        ItemOrder obj = itemOrderService.load(id);
        obj.setStatus(1);
        itemOrderService.updateById(obj);
        model.addAttribute("obj", obj);
        return "redirect:/itemOrder/my";//再次获取订单页面信息
    }

    /**
     * 后台发货，修改状态为2
     *
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("/fh")
    public String fh(Integer id, Model model) {
        ItemOrder obj = itemOrderService.load(id);
        obj.setStatus(2);
        itemOrderService.updateById(obj);
        model.addAttribute("obj", obj);
        return "redirect:/itemOrder/findBySql";
    }

    /**
     * 收货
     *
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("/sh")
    public String sh(Integer id, Model model) {
        ItemOrder obj = itemOrderService.load(id);
        obj.setStatus(3);//3表示已收货
        itemOrderService.updateById(obj);
        model.addAttribute("obj", obj);
        return "redirect:/itemOrder/my";//重定向到my方法刷新页面即可
    }

    /**
     * 评价商品
     * @param orderId
     * @param itemId
     * @param model
     * @return
     */
    @RequestMapping("/pj")
    public String pj(Integer orderId, Integer itemId,Model model) {
        System.out.println(orderId + "-----" + itemId);
        model.addAttribute("orderId", orderId);
        model.addAttribute("itemId", itemId);
        return "itemOrder/pj";
    }

    @RequestMapping("/update")
    public String update(Integer id,Model model){
        ItemOrder itemOrder = itemOrderService.load(id);
        model.addAttribute("obj", itemOrder);
        return "itemOrder/update";
    }

    /**
     * 后台更新
     * @param itemOrder
     * @return
     */
    @RequestMapping("/exUpdate")
    public String exUpdate(ItemOrder itemOrder){
        itemOrderService.update(itemOrder);
        return "redirect:/itemOrder/findBySql.action";
    }
}
