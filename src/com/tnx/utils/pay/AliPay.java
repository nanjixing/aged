package com.tnx.utils.pay;

import com.alibaba.fastjson.JSONObject;
import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.*;
import com.alipay.api.response.AlipayTradeCreateResponse;
import com.tnx.po.Pay;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * @ClassName AliPay
 * @Description 组装生成html页面
 * @Author Nanxing Tang
 * @Date 2021--04--22--21:24
 **/
public class AliPay {
    /**
     * 支付宝跳转支付接口返回html
     * @param pay
     * @return
     */
    public static String generatorPCPayHtml(Pay pay)  {
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);

        //设置请求参数
        AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
        alipayRequest.setReturnUrl(AlipayConfig.return_url);
        alipayRequest.setNotifyUrl(AlipayConfig.notify_url);

        Map<String, String> param = new HashMap<>();
        if(pay.getSn() != null) param.put("out_trade_no", pay.getSn());
        else System.out.println("sn为空 ");
        if(pay.getTotalAmount() != null)param.put("total_amount", pay.getTotalAmount());
        else System.out.println("totalAmount为空 ");
        if(pay.getTitle() != null)param.put("subject", pay.getTitle());
        else System.out.println("title为空 ");
        if(pay.getInfo() != null)param.put("body", pay.getInfo());
        else System.out.println("info为空 ");
        param.put("product_code", "FAST_INSTANT_TRADE_PAY");


//        System.out.println(JSONObject.toJSONString(param));
        alipayRequest.setBizContent(JSONObject.toJSONString(param));

        String result = null;
        //请求
        try {
            result = alipayClient.pageExecute(alipayRequest).getBody();
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }

        //输出
      return result;
    }

    /**
     * 创建订单
     * @param sn
     * @param totalAmount
     * @param subject
     * @return
     */
    public static String create(String sn, String totalAmount, String subject){
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
        AlipayTradeCreateRequest request = new AlipayTradeCreateRequest();
        Map<String, String> param = new HashMap<>();
        param.put("out_trade_no", sn);
        //param.put("trade_no", paySn);
        param.put("total_amount", totalAmount);
        param.put("subject", subject);
        request.setBizContent(JSONObject.toJSONString(param));
        AlipayTradeCreateResponse response = null;
        try {
            response = alipayClient.execute(request);
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        if(response.isSuccess()){
            System.out.println("调用成功");
            return "success";
        }
        System.out.println("调用失败");
        return "fail";
    }

    /**
     * 验证支付宝异步通知签名,防止黑客模拟请求的第一步（第二步验证金额）
     * @param request
     * @return
     */
    public static boolean notifyIsValid(HttpServletRequest request){
        /* *
         * 功能：支付宝服务器异步通知页面
         * 日期：2017-03-30
         * 说明：
         * 以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
         * 该代码仅供学习和研究支付宝接口使用，只是提供一个参考。


         *************************页面功能说明*************************
         * 创建该页面文件时，请留心该页面文件中无任何HTML代码及空格。
         * 该页面不能在本机电脑测试，请到服务器上做测试。请确保外部可以访问该页面。
         * 如果没有收到该页面返回的 success
         * 建议该页面只做支付成功的业务逻辑处理，退款的处理请以调用退款查询接口的结果为准。
         */

        //获取支付宝POST过来反馈信息
        Map<String,String> params = new HashMap<String,String>();
        Map<String,String[]> requestParams = request.getParameterMap();
        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
            String name = (String) iter.next();
            String[] values = (String[]) requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i]
                        : valueStr + values[i] + ",";
            }
            //乱码解决，这段代码在出现乱码时使用
            //valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
            params.put(name, valueStr);
        }

        try {
            boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.alipay_public_key, AlipayConfig.charset, AlipayConfig.sign_type); //调用SDK验证签名
            return signVerified;
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }

        return false;
    }

    /**
     * 查看订单详情
     * @param sn
     * @return
     */
    public static String viewDetail(String sn){
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);

        //设置请求参数
        AlipayTradeQueryRequest alipayRequest = new AlipayTradeQueryRequest();
        Map<String, String> param = new HashMap<>();
        param.put("out_trade_no", sn);
        alipayRequest.setBizContent(JSONObject.toJSONString(param));
        //请求
        try {
            String result = alipayClient.execute(alipayRequest).getBody();
            return result;
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 关闭支付接口
     * @param sn
     * @return
     */
    public static String closePay(String sn){
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);

        //设置请求参数
        AlipayTradeCloseRequest alipayRequest = new AlipayTradeCloseRequest();
        //商户订单号，商户网站订单系统中唯一订单号
        Map<String, String> param = new HashMap<>();
        param.put("out_trade_no", sn);
        alipayRequest.setBizContent(JSONObject.toJSONString(param));

        //请求
        try {
            String result = alipayClient.execute(alipayRequest).getBody();
            return result;
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String refund(String sn, String totalAmount ,String reason, String refundSn){
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);

        //设置请求参数
        AlipayTradeRefundRequest alipayRequest = new AlipayTradeRefundRequest();
        Map<String, String> param = new HashMap<>();
        param.put("out_trade_no", sn);
        param.put("refund_amount", totalAmount);
        param.put("refund_reason", reason);
        param.put("out_request_no", refundSn);

        alipayRequest.setBizContent(JSONObject.toJSONString(param));

        //请求
        try {

            return alipayClient.execute(alipayRequest).getBody();
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        return null;
    }
}
