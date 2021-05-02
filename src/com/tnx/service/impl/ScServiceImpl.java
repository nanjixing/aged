package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.ScMapper;
import com.tnx.po.Sc;
import com.tnx.service.ScService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName ScServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--20--14:17
 **/
@Service
public class ScServiceImpl extends BaseServiceImpl<Sc> implements ScService {
    @Autowired
    private ScMapper scMapper;

    @Override
    public BaseDao<Sc> getBaseDao() {
        return scMapper;
    }
}
