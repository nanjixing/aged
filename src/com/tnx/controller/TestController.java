package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.po.ItemOrder;
import com.tnx.po.User;
import com.tnx.service.ItemOrderService;
import com.tnx.service.OrderDetailService;
import com.tnx.service.UserService;
import com.tnx.utils.Constants;
import com.tnx.utils.SystemContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @ClassName TestController
 * @Description 测试uniapp的数据
 * @Author Nanxing Tang
 * @Date 2021--05--01--13:35
 **/
@CrossOrigin(origins = "http://localhost:8082", maxAge = 3600)
@RestController
@RequestMapping(value = "/test")
public class TestController {

    @Autowired
    private UserService userService;

    @Autowired
    private ItemOrderService itemOrderService;

    @Autowired
    private OrderDetailService orderDetailService;

    private String uCode;
    private String uPhone;
    /**
     * 测试json数据
     * @return
     */
    @RequestMapping(value = "/my",method = RequestMethod.GET)
    @ResponseBody
    public String my(){
        String sql = "select * from user where id = 62";
        User user = userService.getBySqlReturnEntity(sql);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("user", user);
        return jsonObject.toString();
    }

    /**
     * 生成手机验证码
     * @param phone
     * @return
     */
    @RequestMapping(value = "/gencode" ,method = RequestMethod.GET)
    @ResponseBody
    public String genCode(String phone){
        System.out.println(phone);
        JSONObject js = new JSONObject();
        //校验电话号码是否存在

        User user = userService.getByEntity(new User(phone));
        if(user == null){
            js.put(Constants.USER_IS_NULL,"用户不存在");
        }
        //生成验证码

        uCode = "OJBK";
        if(user != null)uPhone = user.getPhone();
        //装入json
        js.put(Constants.USER_PHONE_CODE, uCode);
        return js.toString();
    }

    /**
     * 登录验证
     * @param formdata
     * @return
     */
    @RequestMapping(value = "/cuLogin" ,method = RequestMethod.GET)
    @ResponseBody
    public String cuLogin(String formdata){
        JSONObject js = new JSONObject();
//        验证是否登录成功
        JSONObject parseObject = JSONObject.parseObject(formdata);
        String phone = (String) parseObject.get("phone");
        String code = (String) parseObject.get("vercode");
        System.out.println( phone + "---" + code);
        if(uPhone.equals(phone) && code.equals(uCode)){
            js.put(Constants.USER_LOGIN_SUCCESS, "success");
        }else{
            js.put(Constants.USER_LOGIN_SUCCESS,"fail");
        }
        return js.toJSONString();
    }

    /**
     * 获取订单信息
     * @param phone
     * @return
     */
    @RequestMapping(value = "/uItemOrder",method = RequestMethod.GET)
    @ResponseBody
    public String uItemOrder(String phone){
        User user = new User(phone);
        JSONObject js = new JSONObject();
        User byEntity = userService.getByEntity(user);
        ItemOrder itemOrder = new ItemOrder();
        itemOrder.setUserId(user.getId());
        List<ItemOrder> itemOrders = itemOrderService.listAllByEntity(itemOrder);
        //在item_order中插入没发货的时候还要判断item_id不为1，因为这里将item_id作为判断线上线下的标志
        if(itemOrders.size() > 0){
            String sql = "select * from item_order where user_id = " + byEntity.getId() +
                    " and item_id = 1 and status = 0 and isDelete = 0";
            List<Map<String, Object>> bySql = itemOrderService.listBySqlReturnMap(sql);
            if(bySql.size() > 0)js.put(Constants.ITEM_ORDERS,bySql);
        }else{
            js.put(Constants.ITEM_ORDERS, "暂无订单");
        }
        System.out.println(js.toJSONString());
        System.out.println(SystemContext.getRealPath());
        return js.toJSONString();
    }


    @RequestMapping(value = "/uOrderDetail",method = RequestMethod.GET)
    @ResponseBody
    public String uOrderDetail(String orderId){
        System.out.println(orderId);
        JSONObject js = new JSONObject();
        //1. 根据订单号拿到订单详情

        //2. 根据订单信息生成二维码

        //3. 将二维码存到服务器并得到服务器对应的url

        //4. 解析服务器的url,然后存入到json对象汇总

        //5. 返回json字符串
        return "";
    }
}
