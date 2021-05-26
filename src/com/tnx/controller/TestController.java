package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.google.zxing.WriterException;
import com.tnx.base.BaseController;
import com.tnx.po.*;
import com.tnx.service.*;
import com.tnx.utils.Constants;

import com.tnx.utils.QRCode.QRCode;

import com.tnx.utils.UUIDUtils;
import com.tnx.utils.pay.payConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

/**
 * @ClassName TestController
 * @Description 测试uniapp的数据
 * @Author Nanxing Tang
 * @Date 2021--05--01--13:35
 **/

@CrossOrigin(origins = "http://localhost:8082", maxAge = 3600)
@RestController
@RequestMapping(value = "/test")
public class TestController extends BaseController {

    @Autowired
    private UserService userService;

    @Autowired
    private ItemOrderService itemOrderService;

    @Autowired
    private OrderDetailService orderDetailService;

    @Autowired
    private PayService payService;

    @Autowired
    private ItemService itemService;
    @Autowired
    private ScService scService;

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
     * 登录验证，账户密码
     * @param formdata
     * @return
     */
    @RequestMapping(value = "/uLogin" ,method = RequestMethod.GET)
    @ResponseBody
    public String uLogin(String formdata){
        JSONObject js = new JSONObject();
//        验证是否登录成功
        JSONObject parseObject = JSONObject.parseObject(formdata);
        String phone = (String) parseObject.get("phone");
        String phonepass = (String) parseObject.get("phonepass");
        System.out.println( phone + "---" + phonepass);
        User user = new User(phone);
        User byEntity = userService.getByEntity(user);
        if(byEntity.getPassWord().equals(phonepass)){
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
        System.out.println(phone);
        User user = new User(phone);
        JSONObject js = new JSONObject();
        //查找用户和订单
        User byEntity = userService.getByEntity(user);
        js.put("user",byEntity);
        ItemOrder itemOrder = new ItemOrder();
        itemOrder.setUserId(user.getId());
        List<ItemOrder> itemOrders = itemOrderService.listAllByEntity(itemOrder);
        //在item_order中插入没发货的时候还要判断item_id不为1，因为这里将item_id作为判断线上线下的标志
        if(itemOrders.size() > 0){
            String sql = "select * from item_order where user_id = " + byEntity.getId() +
                    " and item_id = 1 and status = 0 and isDelete = 0";
            List<Map<String, Object>> bySql = itemOrderService.listBySqlReturnMap(sql);
            List<ItemOrder> orderList = itemOrderService.listBySqlReturnEntity(sql);
//            for(ItemOrder itemOrder1:orderList){
//                System.out.println(itemOrder1.getPay().getInfo() + "===========" + itemOrder1.getUser().getRealName());
//            }
//            js.put("orderlist", orderList);
//            将时间改为string
            for (Map map: bySql
                 ) {
                for(ItemOrder itemOrder1:orderList){
                    if(itemOrder1.getPay().getSn().equals(map.get("code"))){
                        map.put("info",itemOrder1.getPay().getInfo());
                        map.put("realName",itemOrder1.getUser().getRealName());
                    }
                }
                map.replace("addTime",map.get("addTime").toString());
            }
//            for (ItemOrder item: orderList
//                 ) {
//                item.setAddTime(item.getAddTime().toString());
//            }
            if(bySql.size() > 0){
                js.put(Constants.ITEM_ORDERS,bySql);
//                js.put("orderList",orderList);
            }
//            //根据订单查询到商品图片并返回
//            for (ItemOrder order:itemOrders
//                 ) {
//                //1. 从订单中查找出订单号
//                Integer orderId = order.getId();
//                //2. 从查找订单详情获取商品id
//                if(orderId != null){
//                    String odSql = "select * from order_detail where order_id ="+orderId;
//                    OrderDetail od = orderDetailService.getBySqlReturnEntity(odSql);
//                    //3. 将商品信息加入到json
//                    if(od != null){
//                        Item item = itemService.load(od.getItemId());
//                        js.put("item",item);
//                    }
//                }
//
//            }
        }else{
            js.put(Constants.ITEM_ORDERS, "暂无订单");
        }
        return js.toJSONString();
    }


    /**
     * 查看订单的二维码
     * @param orderId
     * @return
     */
    @RequestMapping(value = "/uOrderDetail",method = RequestMethod.GET)
    @ResponseBody
    public String uOrderDetail(String orderId){
        JSONObject js = new JSONObject();
        //1. 根据订单号拿到订单详情
        Pay pay = new Pay();
        pay.setItemOrderId(Integer.parseInt(orderId));
        Pay byEntity = payService.getByEntity(pay);
        //2. 根据订单信息生成二维码
        if(byEntity != null){
            try {
                //3. 将二维码存到服务器并得到服务器对应的url
                String qrUrl = QRCode.geneQRCode(byEntity,Constants.URL_HEADER_QRCODE);
                //4. 解析服务器的url,然后存入到json对象汇总
                js.put(Constants.ORDER_QRCODE,qrUrl);
                js.put("title",byEntity.getTitle());
                //5. 返回json字符串
            } catch (WriterException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{
            js.put(Constants.ORDER_QRCODE, "error");
        }
        return js.toJSONString();
    }

    /**
     * 扫码完成支付
     * @param scanString
     * @return
     */
    @RequestMapping(value = "/scanQRCode",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String scanQRCode(String scanString){
        JSONObject js = (JSONObject) JSONObject.parse(scanString);
        System.out.println(js.get("pay_orderid"));
        Integer id = Integer.valueOf(js.get("pay_orderid").toString());
        ItemOrder load = itemOrderService.load(id);
        if(load.getStatus() == 3 || load.getStatus()==4){
            return "yqh";
        }
        if(load.getStatus() == 1){
            return "yqx";
        }

        if(load != null && load.getStatus() == 0){
            ItemOrder itemOrder = new ItemOrder();
            itemOrder.setId(id);
            itemOrder.setStatus(3);
            itemOrderService.updateById(itemOrder);
            return "success";
        }
        return "fail";
    }


    /*------------------------商品展示页面-----------------------*/

    /**
     * 语音搜索(未使用)
     * @param jsonString
     * @return
     */
    @RequestMapping(value = "/shoplist",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String shopList(String jsonString) {
        JSONObject jsonObject = (JSONObject) JSONObject.parse(jsonString);
        JSONObject jsReturn = new JSONObject();
        String condition = jsonObject.get("condition").toString();
        String sql = "select * from item where isDelete = 0 ";

//        if (!isEmpty(item.getCategoryIdTwo())) {
//            sql += " and category_id_two = " + item.getCategoryIdTwo();
//        }
        if (!isEmpty(condition)) {

            sql += " and name like '%" + condition + "%'";
        }else{
            jsReturn.put("condition", "fail");
        }
//        if (!isEmpty(item.getPrice())) {
//            sql += " order by (price + 0) desc";
//        }
//        if (!isEmpty(item.getGmNum())) {
//            sql += " order by gmNum desc";
//        }
//        if (!isEmpty(item.getPrice()) && !isEmpty(item.getGmNum())) {
//            sql += " order by id";
//        }
        List<Map<String, Object>> shoplist = itemService.listBySqlReturnMap(sql);
        if(shoplist.size() > 0){
            jsReturn.put("shoplist",shoplist);
        }else{
            jsReturn.put("shoplist","fail");
        }
        System.out.println("===============shoplist:" + jsReturn.toJSONString());
        return jsReturn.toJSONString();
    }

    /**
     * 查看热销商品
     * @return
     */
    @RequestMapping(value = "/gethotgoods",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
     public String getHotGoods(){
        JSONObject jsonObject = new JSONObject();
        List<Item> rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0  order by gmNum desc limit 0,10");
//        List<Item> rxs = itemService.listBySqlReturnEntity("select * from item where isDelete=0 and id = 51 order by gmNum ");
        List<Item> rxs = addUrlHeader(rxs1);
        jsonObject.put("hotgoods", rxs);
        System.out.println("===============hotgoods:" + jsonObject.toJSONString());
        return jsonObject.toJSONString();
    }
    /**
     * 查看热销商品
     * @return
     */
    @RequestMapping(value = "/fenlei",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String fenlei(String condition){
        System.out.println("fenlei ================" + condition);
        List<Item> rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0  order by gmNum desc limit 0,10");
        if("热销商品".equals(condition)){
            rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0  order by gmNum desc limit 0,10");
        }
        if("家居生活".equals(condition)){
            rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0 and (name like '%床%' or name like '%衣%') limit 0,10");

        }
        if("健康医疗".equals(condition)){
            rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0  and name like '%仪%' limit 0,10");

        }
        if("辅助行走".equals(condition)){
            rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0  and name like '%助步器%' limit 0,10");
        }
        JSONObject jsonObject = new JSONObject();
//        List<Item> rxs1 = itemService.listBySqlReturnEntity("select * from item where isDelete=0  order by gmNum desc limit 0,10");
//        List<Item> rxs = itemService.listBySqlReturnEntity("select * from item where isDelete=0 and id = 51 order by gmNum ");
        List<Item> rxs = addUrlHeader(rxs1);
        jsonObject.put("hotgoods", rxs);
        System.out.println("===============hotgoods:" + jsonObject.toJSONString());
        return jsonObject.toJSONString();
    }

    /**
     * 语音搜索和普通搜索
     * @param condition
     * @return
     */
    @RequestMapping(value = "/search",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String search(String condition){
        System.out.println("condition" + condition);
        JSONObject jsonObject = new JSONObject();
        char[] chars = condition.toCharArray();
        int len = chars.length;
        String sql = "";
        for(int i= 0; i < len ; i ++){
            sql +="or name like '%"+chars[i]+"%' ";
        }
        List<Item> rxs1= itemService.listBySqlReturnEntity("select * from item where isDelete=0 and (name like '%"+ condition+"%' " +
                sql+" )order by gmNum desc ");
        List<Item> rxs = addUrlHeader(rxs1);
        jsonObject.put("hotgoods", rxs);
        System.out.println("===============search:" + jsonObject.toJSONString());
//        List<Item> rxs = itemService.listBySqlReturnEntity("select * from item where isDelete=0 and id = 51 order by gmNum ");
        if(rxs.size() > 0){
            jsonObject.put("hotgoods", rxs);
        }else{
            jsonObject.put("hotgoods", "false");
        }

        return jsonObject.toJSONString();
    }

    /**
     * 查询商品轮播图
     * @param id
     * @return
     */
    @RequestMapping(value = "/goodpicture",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String goodPicture(Integer id){
        JSONObject jsonObject = new JSONObject();;
        if(id != null){
            String sql = "select url1, url2 from item where id ="+ id;
            Item item = itemService.getBySqlReturnEntity(sql);
            if(item != null){
                List<Map<String,String>> urlList = new ArrayList<>();
                Map<String,String> map1 = new HashMap<>();
                Map<String,String> map2 = new HashMap<>();
                map1.put("src", payConstants.urlHeader + item.getUrl1());
                map2.put("src",payConstants.urlHeader +item.getUrl2());
                urlList.add(map1);
                urlList.add(map2);
                jsonObject.put("goodpicture", urlList);
            }else{
                jsonObject.put("goodpicture",null);
            }
        }
        return jsonObject.toJSONString();
    }

    /**
     * 查询商品详情
     * @param id
     * @return
     */
    @RequestMapping(value = "/gooddetail",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String goodDetail(Integer id){
        JSONObject jsonObject = new JSONObject();;
        if(id != null){
            Item item = itemService.load(id);

            if(item != null){
                item.setUrl1(payConstants.urlHeader + item.getUrl1());
                item.setUrl2(payConstants.urlHeader + item.getUrl2());
                jsonObject.put("gooddetail",item);
            }
        }
        return jsonObject.toJSONString();
    }

    /**
     * 购买商品
     * @param phone
     * @param itemId
     * @return
     */
    @RequestMapping(value = "/buy",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String buy(String phone, String itemId){
//        System.out.println("==========" + phone + " " + itemId);
        User user = new User();
        Item item = itemService.load(Integer.valueOf(itemId));
        user.setPhone(phone);
        //获取电话号码对应的用户
        User u1 = userService.getByEntity(user);
        ItemOrder order = new ItemOrder();
        String orderAndPayCode = getOrderNo();
        order.setStatus(0);
        order.setItemId(1);//0表示线上，1表示线下
        order.setCode(orderAndPayCode);
        order.setIsDelete(0);
        order.setTotal(item.getPrice());//用bigdecimal设置精确度保留两位小数。
        order.setUserId(u1.getId());
        order.setAddTime(new Date());
        Pay pay = new Pay();
        pay.setSn(orderAndPayCode);
        pay.setTotalAmount(item.getPrice());
        pay.setInfo(item.getName() + ',');
        pay.setStatus(1);
        pay.setTitle(item.getName() + ',');

        pay.setAddTime(new Date());
        if(u1 != null){
            itemOrderService.insert(order);
            String sql = "select * from item_order where code = '"+orderAndPayCode+"'";
            ItemOrder byEntity = itemOrderService.getBySqlReturnEntity(sql);
            pay.setItemOrderId(byEntity.getId());
            payService.insert(pay);
            //插入订单详情
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setItemId(item.getId());
            orderDetail.setOrderId(byEntity.getId());
            orderDetail.setStatus(0);
            orderDetail.setNum(1);
            orderDetail.setTotal(item.getPrice());
            orderDetail.setUserId(u1.getId());
            int insert = orderDetailService.insert(orderDetail);
            if(insert == 1) return "success";
            else return "fail";
        }
        return "fail";
    }

    /**
     * 用户信息
     * @param phone
     * @return
     */
    @RequestMapping(value = "/userinfo",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String userInfo(String phone){
        System.out.println("===============" + phone);
        //判断用户是否存在查找用户
        User user = new User();
        if("".equals(phone)){
            return "fail";
        }
        user.setPhone(phone);
        User ruser = userService.getByEntity(user);
        if(ruser == null){
            return "fail";
        }
        ruser.setPassWord("密码请在网页端查看");
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("userinfo",ruser);
        return jsonObject.toJSONString();
    }

    /**
     * 移动端收藏商品
     * @param phone
     * @param itemId
     * @return
     */
    @RequestMapping(value = "/sc",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String sc(String phone, String itemId){
        User user = new User();
        Item item = itemService.load(Integer.valueOf(itemId));
        user.setPhone(phone);
        //获取电话号码对应的用户
        User u1 = userService.getByEntity(user);
        Sc sc = new Sc();
        if(u1 != null){
            sc.setUserId(u1.getId());
            if(item!= null){
                sc.setItemId(item.getId());
            }
            Sc scByEntity = scService.getByEntity(sc);
            if(scByEntity != null){
                return "ysc";
            }
            int insert = scService.insert(sc);
            if(insert == 0){
                return "fail";
            }
            item.setScNum(item.getScNum()+1);
            itemService.updateById(item);
            return "success";
        }
        return "fail";
    }

    /**
     * 获得收藏商品
     * @param phone
     * @return
     */
    @RequestMapping(value = "/getscgoods",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String getscgoods(String phone){
        User user = new User();
        JSONObject jsonObject = new JSONObject();
        user.setPhone(phone);
        //获取电话号码对应的用户
        User u1 = userService.getByEntity(user);
        String sql = "select * from sc where user_id="+u1.getId();
        List<Sc> scs = scService.listBySqlReturnEntity(sql);

        if(scs.size() > 0){
            List<Item> list = new ArrayList<>();

            for(Sc sc: scs){
                Item load = itemService.load(sc.getItemId());
                load.setUrl1(payConstants.urlHeader + load.getUrl1());
                load.setUrl2(payConstants.urlHeader + load.getUrl2());
                list.add(load);
            }
            jsonObject.put("scgoods",list);
            return jsonObject.toJSONString();
        }
        jsonObject.put("scgoods","fail");
        return "fail";
    }

    @RequestMapping(value = "/qxsc",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String qxsc(String itemId,String phone){
        User user = new User();
        Item item = itemService.load(Integer.valueOf(itemId));
        user.setPhone(phone);
        //获取电话号码对应的用户
        User u1 = userService.getByEntity(user);
        if(u1 != null){
            Sc sc = new Sc();
            if(item != null){
                String sql = "delete from sc where user_id="+u1.getId()+" and item_id="+item.getId();
                scService.deleteBySql(sql);
                return "success";
            }

        }
        return "fail";
    }

    /**
     * 添加图片地址头
     * @param list
     * @return
     */
    private List<Item> addUrlHeader(List<Item> list){
        for (Item item:list
             ) {
            item.setUrl1(payConstants.urlHeader + item.getUrl1());
            item.setUrl2(payConstants.urlHeader + item.getUrl2());
        }
        return list;
    }

    //生成订单唯一UUID
    public static synchronized String getOrderNo() {
        return UUIDUtils.random().toUpperCase();
    }
}
