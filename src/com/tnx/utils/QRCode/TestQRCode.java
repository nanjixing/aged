package com.tnx.utils.QRCode;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.zxing.WriterException;
import com.tnx.po.Pay;
import com.tnx.service.PayService;
import com.tnx.utils.Constants;
import com.tnx.utils.SystemContext;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

/**
 * @ClassName TestQRCode
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--05--03--22:57
 **/
public class TestQRCode {
    public static void main(String[] args) {
//
//        QRCode qrCode = new QRCode();
//        try {
//            Pay pay = new Pay();
//            pay.setPaysn("0001");
//            pay.setTotalAmount("404");
//            qrCode.geneQRCode(pay, Constants.URL_HEADER_QRCODE);
//            System.out.println("生成二维码成功");
//        } catch (WriterException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

//        String s = "{\"pay_price\":\"100.00\",\"pay_info\":\"垫子1,\",\"pay_title\":\"垫子1,\",\"pay_orderid\":50,\"pay_sn\":\"2021050322001438720501686146\"}";
//        Object parse = JSONObject.parse(s);
//        System.out.println(parse);
//        JSONObject js = (JSONObject) parse;
//        System.out.println(Integer.valueOf(js.get("pay_orderid").toString()));
        int chushi = 100000;
        for(int i = 0; i < 10; i ++){
            chushi += chushi * 0.05;
        }
        System.out.println(chushi);
    }
}
