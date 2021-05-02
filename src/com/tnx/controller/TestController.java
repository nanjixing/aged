package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.po.User;
import com.tnx.service.UserService;
import com.tnx.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @ClassName TestController
 * @Description 测试uniapp的数据
 * @Author Nanxing Tang
 * @Date 2021--05--01--13:35
 **/
@CrossOrigin(origins = "http://localhost:8082", maxAge = 3600)
@RestController
@RequestMapping(value = "/test")
public class TestController {

    @Autowired
    private UserService userService;

    private String uCode;
    private String uPhone;
    /**
     * 测试json数据
     * @return
     */
    @RequestMapping(value = "/my",method = RequestMethod.GET)
    @ResponseBody
    public String my(){
        String sql = "select * from user where id = 62";
        User user = userService.getBySqlReturnEntity(sql);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("user", user);
        return jsonObject.toString();
    }

    /**
     * 生成手机验证码
     * @param phone
     * @return
     */
    @RequestMapping(value = "/gencode" ,method = RequestMethod.GET)
    @ResponseBody
    public String genCode(String phone){
        System.out.println(phone);
        JSONObject js = new JSONObject();
        //校验电话号码是否存在

        User user = userService.getByEntity(new User(phone));
        if(user == null){
            js.put(Constants.USER_IS_NULL,"用户不存在");
        }
        //生成验证码

        uCode = "OJBK";
        if(user != null)uPhone = user.getPhone();
        //装入json
        js.put(Constants.USER_PHONE_CODE, uCode);
        return js.toString();
    }

    @RequestMapping(value = "/cuLogin" ,method = RequestMethod.GET)
    @ResponseBody
    public String cuLogin(String formdata){
        JSONObject js = new JSONObject();
//        验证是否登录成功
        JSONObject parseObject = JSONObject.parseObject(formdata);
        String phone = (String) parseObject.get("phone");
        String code = (String) parseObject.get("vercode");
        System.out.println( phone + "---" + code);
        if(uPhone.equals(phone) && code.equals(uCode)){
            js.put(Constants.USER_LOGIN_SUCCESS, "success");
        }else{
            js.put(Constants.USER_LOGIN_SUCCESS,"fail");
        }
        return js.toJSONString();
    }
}
