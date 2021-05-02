package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.PayMapper;
import com.tnx.po.Pay;
import com.tnx.service.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName PayServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--22--16:01
 **/
@Service
public class PayServiceImpl extends BaseServiceImpl<Pay> implements PayService {
   @Autowired
   private PayMapper payMapper;

    @Override
    public BaseDao<Pay> getBaseDao() {
        return payMapper;
    }

}
