package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.MessageMapper;
import com.tnx.po.Message;
import com.tnx.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName MessageServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--19--16:13
 **/
@Service
public class MessageServiceImpl extends BaseServiceImpl<Message> implements MessageService {
    @Autowired
    private MessageMapper messageMapper;

    @Override
    public BaseDao<Message> getBaseDao() {
        return messageMapper;
    }
}
