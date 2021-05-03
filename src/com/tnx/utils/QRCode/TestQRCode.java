package com.tnx.utils.QRCode;

import com.google.zxing.WriterException;
import com.tnx.po.Pay;
import com.tnx.service.PayService;
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

        QRCode qrCode = new QRCode();
        try {
            Pay pay = new Pay();
            pay.setPaysn("0000");
            pay.setTotalAmount("404");
            qrCode.geneQRCode(pay);
            System.out.println("生成二维码成功");
        } catch (WriterException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
