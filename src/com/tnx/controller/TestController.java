package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.po.User;
import com.tnx.service.UserService;
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
    /**
     * 测试json数据
     * @return
     */
    @RequestMapping(value = "/my",method = RequestMethod.GET)
    public String my(){
        String sql = "select * from user where id = 62";
        User user = userService.getBySqlReturnEntity(sql);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("user", user);
        return jsonObject.toString();
    }
}
