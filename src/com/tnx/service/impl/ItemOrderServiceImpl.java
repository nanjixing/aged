package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.ItemOrderMapper;
import com.tnx.po.ItemOrder;
import com.tnx.service.ItemOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName ItemOrderServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--19--14:31
 **/
@Service
public class ItemOrderServiceImpl extends BaseServiceImpl<ItemOrder> implements ItemOrderService {
    @Autowired
    private ItemOrderMapper itemOrderMapper;

    @Override
    public BaseDao getBaseDao() {
        return itemOrderMapper;
    }
}
