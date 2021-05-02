package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.po.ItemOrder;
import com.tnx.po.Pay;
import com.tnx.service.ItemOrderService;
import com.tnx.service.PayService;
import com.tnx.utils.Pager;
import com.tnx.utils.UUIDUtils;
import com.tnx.utils.pay.AliPay;
import com.tnx.utils.pay.AlipayConfig;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

import java.util.Date;
import java.util.Map;

import static org.apache.commons.lang.StringUtils.isEmpty;

/**
 * @ClassName PayComtroller
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--23--01:02
 **/

@Controller
@RequestMapping("/pay")
public class PayController {
    @Autowired
    private PayService payService;

    @Autowired
    private ItemOrderService itemOrderService;

    //用log记录异步签名验证是否成功
   private Logger log =LoggerFactory.getLogger(PayController.class);

    /**
     * 在支付成功之后会以get请求传回到pay
     * @return
     */
    @RequestMapping("/pay")
    public String pay(Pay pay){
        System.out.println("pay的sn " +pay.getSn());
        return "pay/test";
    }

    /**
     * 查询支付列表
     * @param pay
     * @param model
     * @return
     */
    @RequestMapping("/findBySql")
    public String findBySql(Pay pay, Model model){
        String sql = "select * from pay where 1=1 ";
        if(!isEmpty(pay.getPaySn())){
            sql += " and pay_sn like '%"+pay.getPaySn()+"%'";
        }
        sql += " order by id desc";
        Pager<Pay> pagers = payService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers",pagers);
        model.addAttribute("obj",pay);
        return "pay/pay";
    }

    /**
     * 添加待付款订单
     * @param model
     * @return
     */
    @RequestMapping("/exAdd")
    public String exAdd(Model model, Pay pay, Integer orderItemId){
        //设置支付订单信息,添加支付订单
        if(pay.getStatus() == 0){
            ItemOrder itemOrder = itemOrderService.load(orderItemId);
            pay.setSn(UUIDUtils.random().toUpperCase());
            pay.setTotalAmount(itemOrder.getTotal());
            pay.setInfo("椅子");
            pay.setTitle("test");
            pay.setItemOrderId(itemOrder.getId());
            payService.insert(pay);
            model.addAttribute("obj", pay);
        }

        if(pay.getStatus() == 1){
            log.info("已支付订单 " + pay.getSn());
        }
        return "pay/test";
    }

    /**
     * 调用支付宝接口执行支付，是支付宝的服务器进行的通知，而不是浏览器
     * @param pay
     * @param model
     * @return
     */
    @RequestMapping("toPay")
    public String toPay(Pay pay, Model model){
        System.out.println(pay.getId());
        Pay byId = payService.getByEntity(pay);
//        判断支付订单是否存在
        System.out.println("toPay的Sn: " + byId.getSn());
        if(byId == null){
            model.addAttribute("flag", 0);
            model.addAttribute("msg", "支付订单号不存在");
            return "pay/test";
        }
//        支付订单存在调用支付宝接口进行支付
        //        支付订单不为空创建支付订单
        String s = AliPay.create(byId.getSn() ,byId.getTotalAmount(), byId.getTitle());
        if("success".equals(s)){
            System.out.println("notify: 创建订单成功");
        }
        String html = AliPay.generatorPCPayHtml(byId);
        model.addAttribute("html",html);
        model.addAttribute("flag", 1);
        return "pay/testAliPay";
    }

    /**
     * AliPay异步通知接口
     * 使用权限拦截要加入白名单
     * @param request
     * @return
     */
    @RequestMapping("/payNotify")
    @ResponseBody
    public String payNotify(HttpServletRequest request, Model model){
//        检查异步通知的签名是否合法
        log.info("进入支付宝异步通知接口！");
        if(!AliPay.notifyIsValid(request)){
            log.error("支付宝签名验证失败");
            return "fail";
        }
//        签名验证成功
        String sn = request.getParameter("out_trade_no");
        String paySn = request.getParameter("trade_no");
        String totalAmount = request.getParameter("total_amount");
        String status = request.getParameter("trade_status");
        if(StringUtils.isEmpty(sn)){
            log.error("支付订单号为空");
            return "fail";
        }
        if(StringUtils.isEmpty(paySn)){
            log.error("商品支付订单号为空");
            return "fail";
        }

        if(StringUtils.isEmpty(totalAmount)){
            log.error("订单总金额为空");
            return "fail";
        }
        if(StringUtils.isEmpty(status)){
            log.error("订单状态为空");
            return "fail";
        }
//        这里所有必须参数都不为空

//        根据sn号判断是否是已经添加基本信息的订单
        Pay pay = new Pay();
        pay.setSn(sn);
        Pay p = payService.getByEntity(pay);
        if(p == null){
            log.error("支付订单编号不存在 "+ sn);
            return "fail";
        }

//        支付金额不相同，返回false，第二次验证支付金额
        if(p.getTotalAmount().compareTo(totalAmount) != 0){
            log.error("支付金额不同 支付金额：" + totalAmount + " 数据库中为 " + p.getTotalAmount());
            return "false";
        }
//        一切都合法，开始修改数据库，将支付状态和支付时间修改
        p.setAddTime(new Date());
        p.setStatus(Pay.pay_status_paid);
        p.setPaysn(paySn);
        payService.updatePay(p);
//        设置item_order的状态为0
        //此时已经支付成功，应该再次修改订单表中的状态
        ItemOrder itemOrder = itemOrderService.load(p.getItemOrderId());
        if(itemOrder.getStatus() == -1)itemOrder.setStatus(0);
        itemOrderService.updateById(itemOrder);

        return "success";
    }

    /**
     * 查看订单信息, 根据sn号查询订单的状态
     * @param pay
     * @param model
     * @return
     */
    @RequestMapping("/view")
    public String view(Pay pay, Model model){
        Pay p = payService.getByEntity(pay);
        if(p == null){
            return "";
        }
        String viewDetail = AliPay.viewDetail(p.getSn());//viewDetail是json格式的支付信息
//        解析viewDetail字符串获得status
        JSONObject parseObject = JSONObject.parseObject(viewDetail);
        String status = parseObject.getJSONObject("alipay_trade_query_response").getString("trade_status");

        model.addAttribute("viewDetail",viewDetail);
        model.addAttribute("status", status);
//        return "/pay/test";


        return "/itemOrder/myOrder";
    }

    /**
     * 关闭订单，model返回ckosePay的json格式的信息
     * @param pay
     * @param model
     * @return
     */
    @RequestMapping("/closePay")
    public String closePay(Pay pay, Model model){
        Pay p = payService.getByEntity(pay);
        if(p == null){
            model.addAttribute("closePayError","订单不存在");
            return "pay/error";
        }
        //订单不能被取消
        if(p.getStatus() != Pay.pay_status_waiting) {
            model.addAttribute("closePayError","订单不可取消");
            return "/pay/error";
        }
        String closePay = AliPay.closePay(p.getSn());//closePay是json格式的支付信息
        System.out.println(closePay);
//        解析viewDetail字符串获得status
        JSONObject parseObject = JSONObject.parseObject(closePay);
//        String status = parseObject.getJSONObject("alipay_trade_query_response").getString("trade_status");
//        获取交易关闭时的code
        int code = parseObject.getJSONObject("alipay_trade_close_response").getIntValue("code");
       if(code != 10000){
           model.addAttribute("closePayErrorCode", code);
           System.out.println(code);
           return "pay/error";
       }
       model.addAttribute("closePaySuccess", 1);
       p.setStatus(3);
        payService.updatePay(p);
//        model.addAttribute("status", status);
        return "redirect:/itemOrder/my";
    }

    /**
     * 退款前要传入的订单号
     * @param pay
     * @return
     */
    @RequestMapping("/select")
    public String select(Pay pay, Model model){
        String sql = "select * from pay where 1=1 ";
        if(!isEmpty(pay.getSn())){
            sql += " and sn = "+pay.getSn();
        }

        Pay p = payService.getBySqlReturnEntity(sql);
        model.addAttribute("obj_sn", p.getSn());
        return "pay/test";
    }

    /**
     * 退款
     * @param model
     * @return
     */
    @RequestMapping("/refund")
    public String refund(Pay pay, Model model){
//        1. 查看订单状态是否可以退款
        Pay p = payService.getByEntity(pay);
        if(p == null){
            model.addAttribute("closePayError",0);
            return "pay/error";
        }
        if(p.getStatus() == Pay.pay_status_waiting || p.getStatus() == Pay.pay_status_closed || p.getStatus() == Pay.pay_status_refunded){
            model.addAttribute("refund_status" , "订单不能退款或已退款");
            return "pay/error";
        }
//        2. 校验支付订单号是否存在和退款金额
//        if(p.getTotalAmount() != pay.getTotalAmount()){
//            model.addAttribute("refund_totalAmount", "金额不对");
//            return "pay/error";
//        }

//        3. 调用相关接口进行退款(直接全部退款)
        if(StringUtils.isEmpty(p.getRefundSn())) p.setRefundSn("TUI" + UUIDUtils.random().toUpperCase());
        String refund = AliPay.refund(p.getSn(),p.getTotalAmount(),p.getRefundInfo(),p.getRefundSn());//closePay是json格式的支付信息
        System.out.println(refund);
//        4. 解析获得返回的code，查看是否退款成功
        JSONObject parseObject = JSONObject.parseObject(refund);
        int code = parseObject.getJSONObject("alipay_trade_refund_response").getIntValue("code");
        String refundAmount = parseObject.getJSONObject("alipay_trade_refund_response").getString("refund_fee");
        String buyer_logon_id = parseObject.getJSONObject("alipay_trade_refund_response").getString("buyer_logon_id");
        if(code != 10000){
            model.addAttribute("refundErrorCode", code);
            System.out.println(code);
            return "pay/error";
        }
//        5. 退款成功,修改支付订单状态
        p.setStatus(Pay.pay_status_refunded);
        p.setRefundAmount(refundAmount);
        p.setRefundInfo(buyer_logon_id);
        payService.updatePay(p);
        model.addAttribute("refund_msg", "success");
//        退款完成修改订单状态status为1;
        ItemOrder load = itemOrderService.load(p.getItemOrderId());
        load.setStatus(1);
        itemOrderService.updateById(load);
        return "redirect:/itemOrder/my";
    }


    @RequestMapping("/test")
    public void test(){
        String sql = "select * from pay where id = 1";
        Pay byId = payService.getBySqlReturnEntity(sql);
        System.out.println(UUIDUtils.random());
        System.out.println(byId.getPaySn());
    }
}
