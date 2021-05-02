package com.tnx.utils.mail;

import org.apache.log4j.Logger;

import javax.mail.MessagingException;
import java.security.GeneralSecurityException;

/**
 * @ClassName TestMailUtils
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--25--17:42
 **/
public class TestMailUtils {
    public static void main(String[] args) {
        MailUtils mailUtils = new MailUtils();
        String code = mailUtils.generatorEmailCode();
        try {
            mailUtils.sendEmail(code,"nanxingtang@163.com");
        } catch (MessagingException | GeneralSecurityException e) {
            System.out.println("异常");
            e.printStackTrace();
        }
    }
}
