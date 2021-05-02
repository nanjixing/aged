package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.ItemMapper;
import com.tnx.po.Item;
import com.tnx.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName ItemServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--18--16:26
 **/
@Service
public class ItemServiceImpl extends BaseServiceImpl<Item> implements ItemService {

    @Autowired
    private ItemMapper itemMapper;

    @Override
    public BaseDao<Item> getBaseDao() {
        return itemMapper;
    }
}
