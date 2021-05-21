package com.tnx.utils.mail;

import com.sun.mail.util.MailSSLSocketFactory;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.security.GeneralSecurityException;
import java.util.Properties;

/**
 * @ClassName MailUtils
 * @Description 邮件验证工具类
 * @Author Nanxing Tang
 * @Date 2021--04--25--17:24
 **/
public class MailUtils {

    private Long geneCodeTime = -1L;
    private String email = "";
    private String emailCode = "";
    public static  Long codeLifeTime = 1000 * 300L;


    /**
     * 生成一个验证码并返回
     * @return
     */
    public String generatorEmailCode(){
        //  获取6为随机验证码
        String[] letters = new String[] {
                "q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",
                "A","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",
                "0","1","2","3","4","5","6","7","8","9"};
        String stringBuilder ="";
        for (int i = 0; i < 6; i++) {
            stringBuilder = stringBuilder + letters[(int)Math.floor(Math.random()*letters.length)];
        }
        return stringBuilder;
    }

    /**
     * 根据邮箱发邮件
     * @param code
     * @param recipientEmail
     * @throws MessagingException
     */
    public  void sendEmail(String code, String recipientEmail) throws MessagingException, GeneralSecurityException {
        Properties props = new Properties();
        // 开启debug调试
        props.setProperty("mail.debug", "true");
        // 发送服务器需要身份验证
        props.setProperty("mail.smtp.auth", "true");
        // 设置邮件服务器主机名
        props.setProperty("mail.host", "smtp.qq.com");
        // 发送邮件协议名称
        props.setProperty("mail.transport.protocol", "smtp");

        // 开启SSL加密，否则会失败
        MailSSLSocketFactory sf = new MailSSLSocketFactory();
        sf.setTrustAllHosts(true);
        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.smtp.ssl.socketFactory", sf);

        // 设置环境信息
        Session session = Session.getInstance(props);

        Transport transport = session.getTransport();
        // 连接邮件服务器(账号，授权码)
        transport.connect("smtp.qq.com","1916095467@qq.com", "vwaejgphudngeahf");

        // 创建邮件对象
        Message msg = new MimeMessage(session);
        msg.setSubject("您的验证码为：");
        // 设置邮件内容
        msg.setText("这是一封由JavaMail发送的邮件！" + code);
        // 设置发件人（账号）
        msg.setFrom(new InternetAddress("1916095467@qq.com"));

        // 发送邮件
        transport.sendMessage(msg, new Address[] {new InternetAddress(recipientEmail)});
        // 关闭连接
        transport.close();
    }

    public Long getGeneCodeTime() {
        return geneCodeTime;
    }

    public void setGeneCodeTime(Long geneCodeTime) {
        this.geneCodeTime = geneCodeTime;
    }



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailCode() {
        return emailCode;
    }

    public void setEmailCode(String emailCode) {
        this.emailCode = emailCode;
    }
}
