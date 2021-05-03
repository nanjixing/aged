package com.tnx.utils;

/**
 * @ClassName Constants
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--15--16:36
 **/
public class Constants {
    public static final String MANAGE = "manage";

    //前端用户名
    public static final String USERNAME = "userName";
    //前端登录id
    public static final String USERID = "userId";
    //购物车结算验证码
    public static final String RES = "res";// 0 表示用户没有， 1 表示成功 2 表示地址为空
    //生成邮箱验证码常量
    public static final String GENCODE = "gencodemsg";//0 请检查邮箱 1 验证码生成错误 2 请检查邮箱是否可用 3 success
    //验证注册信息失败
    public static final String TORES_EC_FAIL = "tores_ec_fail"; //0 "验证的邮箱不是同一个邮箱" 1 验证码超时,请重新获取 2 验证码错误
    //注册成功
    public static final String  TORES_INSERT_SUCCESS = "tores_insert_success";//1表示成功

    //user中的一些向外提供的常量以及
    public static final String USER_IS_NULL = "user_is_null";
    public static final String USER_PHONE_CODE = "user_phone_code";
    public static final String USER_LOGIN_SUCCESS = "user_login_success";

    //itemOrder订单
    public static final String ITEM_ORDERS = "itemOrders";

}
