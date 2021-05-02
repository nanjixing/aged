package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.CarMapper;
import com.tnx.po.Car;
import com.tnx.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName CarServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--20--15:31
 **/
@Service
public class CarServiceImpl extends BaseServiceImpl<Car> implements CarService {

    @Autowired
    private CarMapper carMapper;
    @Override
    public BaseDao<Car> getBaseDao() {
        return carMapper;
    }
}
