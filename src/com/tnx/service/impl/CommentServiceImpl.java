package com.tnx.service.impl;

import com.tnx.base.BaseDao;
import com.tnx.base.BaseServiceImpl;
import com.tnx.mapper.CommentMapper;
import com.tnx.po.Comment;
import com.tnx.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName CommentServiceImpl
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--20--15:31
 **/
@Service
public class CommentServiceImpl extends BaseServiceImpl<Comment> implements CommentService {

    @Autowired
    private CommentMapper commentMapper;
    @Override
    public BaseDao<Comment> getBaseDao() {
        return commentMapper;
    }
}
