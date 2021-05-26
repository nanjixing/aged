package com.tnx.utils.pay;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {
	
//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2016101500693897";
	
	// 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfRb7M7Y4H4Tg8uEC0kLaenWB7ya+rk7zqeXa/9qL70Sk5y6V1EnVTqUPpR/ISNcrLgC2SHUhmrrigBtw8Mm4a4t6JVrHSFJDRRuwltDS5HscvIa7f4TxwYFgBO4z3Of0onhFgB63UeRJukdRoFJSk3bVAMeVKcjFD4SXCXLX4T+1GSIn0f4oZxJwiQDLaMYxdKjLO0985baxDRixMRCoEbtxG6YiQ9qBIIidoaGCMh/ihIOUGO3LQo9PtDJZX79mjPW8sX2IccAXovHgeJmKO4KraeZ7zNa2tuSiwNO1xM6h5PHhYhPQq6Gm75KlFu1k9k/NxnUDIL0Tqkvo9qQuNAgMBAAECggEARiM0jpHeBeJMHZEWDW3cvaSYJGsAjRIWEztB6+70fufwu57OUeu69wiG+2fPVe2STGM5ripvA6jVbMMYoPmkOvrE/L3MuLKNw1r0CvZ8cTj4hezTUYuiTepfVsuenBBRR120URGQnwxh7YcSfnLxslhfxNE0I8B9qWKwehLRn3MBBtZsjkKva+o2fQonz8BRL6QEbqPdC2XYq2s0J8vRp8Pz7xyoyFr++s3UFEv811r8Gdr5TKB+8uQ3FlWjDAnM8XVhNZ9FyeZspVxoyLx935Df7XoE0K4RPKCKGMDo4B3s268OEm7WThq261M85EKMv6byPeVyvbYJSY+HAgdlgQKBgQDTWPKxw9Sj9oGW7AuHHJSEDA6rUQ2nbljBemlBO49mlQkoAcfPNt6eD8q2cOQ10MrsX11MzQhO5J1IEY/uqZvXh6ctoNxv6n/zZG3pIJip8tim8BAzeUwLaNLoHGERiWpABnwKZ5ZUR19R9Z3iFOzSxNudVpf32/vxCMxWoGzgRQKBgQDA7D2CbMe7CjuVWEMs4H2feA5CLA61sE2Lk3/stM8T8liB9yNJQaYeV09TbWK7roFfYgZp/pF0SxaaGS7d8/iZTTSEFPaM64pS6vs6iLOFet35W1UjtVqyY66FnP2bP692V8A8iZn+i6NyV05nm4pbKhhwdf+REHSxl67cg0/mqQKBgQCRNKSSE+zttfh1G7oT20QCsVIGzEpoRX0/eP4F7ojovu6qiQahzJ4I1Oq+jDOO8ePpoN+2W4wgwBt7n21XWTqUS0RGKiYp0mCUdeS57kZVRV8q2vcWlnjzwdJd3NmoNdRFJu9kKqVzRBIuemU+JohLiyskH5GLnp2rjhLuVYxYTQKBgQCZI213+E1bJTZCyDsahmBxk2UOFdbfVkFXyA/Fn4i49qhXEgwKfHgWoYuwV6YGAPFk+3TH8nEXdPtN+yt+t8jgN662IcXL+rRkOW6O+jA2hl9pLpyYqb6C2CmSmhmdgKIROHq6EygQLFvjyXXNPGRJFVMtAh2J0xwuVI9TL1DfcQKBgFdpVlxscXv3cNj+pJGVUhbQJuB2jj9WG+wNofNHD9LJdGN+JbKDNitHyTmUelk6GTnRNRSxsJmp1H/8gCzKnG7V4/dGu3cZyN5qZjylCWiyzvhCxkvYrQuLT/HqIq9kXKU+VFfLY/tf2LgTzho8KsI/V8KykbGXJb7fpvZKrE7t";
	
	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2VEW6p2sOVs29GEHQ5hiqZfD6RHrJ0VviT7XBAEjmmvSbmB4qB7zDvsa9YU3skk1yiyLe9gCfedxl9UmX36JcluIgVmgurcbCpUuthmsRKjKA3omGE8pKKNcSRokm+o6NyHSFgsgzRcGgq//0DIadv+ZIw0mlIWypMjLFDCJJ3Af1LmZ1YgZN9nCdx2E1J6DaA32NwIxfaIg5nTtPgHPQqxe8tllEnW77zMmhONvkn1hWq8P9BMIIGg7sISPN0F/qIgiVU/iJL4Q6XWx/lQtiSa/wD5LBezMDHxMBxCQGf0phwmgScBArf+UGb0QngwvNuAVPh82COo8Vw68pirj9QIDAQAB";

	// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String notify_url = payConstants.urlHeader + "/test1_war_exploded/pay/payNotify";

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String return_url = payConstants.urlHeader + "/test1_war_exploded/itemOrder/my";//以get请求传回参数

	// 签名方式
	public static String sign_type = "RSA2";
	
	// 字符编码格式
	public static String charset = "utf-8";
	
	// 支付宝网关
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";
	
	// 支付宝网关
//	public static String log_path = "C:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /** 
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
//    public static void logResult(String sWord) {
//        FileWriter writer = null;
//        try {
//            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
//            writer.write(sWord);
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            if (writer != null) {
//                try {
//                    writer.close();
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//            }
//        }
//    }
}

