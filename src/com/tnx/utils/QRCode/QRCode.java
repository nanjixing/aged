package com.tnx.utils.QRCode;

import com.alibaba.fastjson.JSONObject;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.tnx.po.Pay;

import java.io.File;
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
    public static String geneQRCode(Pay pay, String filePathHeader) throws WriterException, IOException {
//         获取二维码信息

//        定义一个json字符串
//        1. 定义一个json字符串
        JSONObject jsonObject = new JSONObject();
//        2. 给json字符串存值
        jsonObject.put("pay_sn", pay.getPaySn());
        jsonObject.put("pay_info", pay.getInfo());
        jsonObject.put("pay_title", pay.getTitle());
        jsonObject.put("pay_price", pay.getTotalAmount());
        jsonObject.put("pay_orderid",pay.getItemOrderId());
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
//        String filePath = "E:\\360MoveData\\Users\\xing\\Desktop\\bishe\\shop_fruit\\testMaven\\WebRoot\\" + "\\resource\\qrcode\\";
        String filePath = filePathHeader + "resource\\qrcode\\";
        String fileName = pay.getPaySn() + ".jpg";
        String returnFile = "";
//        Path path = FileSystems.getDefault().getPath(filePath,fileName);
        File file = new File(filePath + fileName);
        if (!file.exists()) {
            MatrixToImageWriter.writeToFile(bitMatrix, "jpg", file);
            System.out.println("文件已创建");
        } else {
            if(file.delete()){
                System.out.println(file.getName() + " 文件已被删除！");
                MatrixToImageWriter.writeToFile(bitMatrix, "jpg", file);
            }else{
                System.out.println("文件删除失败！");
            }
        }
        returnFile +="http://391661q0s0.wicp.vip/test1_war_exploded/resource/qrcode/" + fileName;

        return returnFile;
    }



}
