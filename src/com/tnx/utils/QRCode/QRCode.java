package com.tnx.utils.QRCode;

import com.alibaba.fastjson.JSONObject;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.tnx.po.Pay;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.HashMap;

/**
 * @ClassName QRCode
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--05--03--22:36
 **/
public class QRCode {
    public void geneQRCode(Pay pay) throws WriterException, IOException {
//         获取二维码信息

//        定义一个json字符串
//        1. 定义一个json字符串
        JSONObject jsonObject = new JSONObject();
//        2. 给json字符串存值
        jsonObject.put("pay_sn", pay.getPaySn());
        jsonObject.put("pay_info", pay.getInfo());
        jsonObject.put("pay_title", pay.getTitle());
        jsonObject.put("pay_price", pay.getTotalAmount());

//        3. json对象转换为json字符串
        String s = jsonObject.toString();
//        创建一个矩阵对象
        int width = 200;
        int height = 200;
        HashMap<EncodeHintType, Object> hit = new HashMap<>();
//        指定字符集
        hit.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        BitMatrix bitMatrix = new MultiFormatWriter().encode(s, BarcodeFormat.QR_CODE,width,height,hit);

//        生成二维码图片
        String filePath = "E:\\360MoveData\\Users\\xing\\Desktop\\bishe\\shop_fruit\\testMaven\\WebRoot\\" + "\\resource\\qrcode\\";
        String fileName = pay.getPaySn() + ".jpg";
        Path path = FileSystems.getDefault().getPath(filePath,fileName);
       MatrixToImageWriter.writeToPath(bitMatrix, "jpg", path);

    }
}
