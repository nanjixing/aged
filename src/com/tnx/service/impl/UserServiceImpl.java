package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;

import com.tnx.mapper.UserMapper;
import com.tnx.po.User;
import com.tnx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--18--11:17
 **/

@Service
public class UserServiceImpl extends BaseServiceImpl<User> implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public BaseDao<User> getBaseDao() {
        return userMapper;
    }
}
