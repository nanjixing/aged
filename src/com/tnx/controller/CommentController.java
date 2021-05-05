package com.tnx.controller;

import com.alipay.api.domain.ItemOrderDetail;
import com.tnx.base.BaseController;
import com.tnx.po.Comment;
import com.tnx.po.ItemOrder;
import com.tnx.po.OrderDetail;
import com.tnx.service.CommentService;
import com.tnx.service.ItemOrderService;
import com.tnx.service.OrderDetailService;
import com.tnx.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * @ClassName CommentController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--21--20:51
 **/
@Controller
@RequestMapping("/comment")
public class CommentController extends BaseController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private ItemOrderService itemOrderService;

    @Autowired
    private OrderDetailService orderDetailService;

    /**
     * 添加执行
     */
    @RequestMapping("/exAdd")
    public String exAdd(Comment comment, Integer orderId, HttpServletRequest request){
        System.out.println(orderId);
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute==null){
            return "redirect:/login/uLogin";
        }
        Integer userId = Integer.valueOf(attribute.toString());
        comment.setAddTime(new Date());
        comment.setUserId(userId);
        commentService.insert(comment);
//        修改订单
        String updateItemOrder = "update item_order set status = " + 4 + " where id = " + orderId;
        itemOrderService.updateBysql(updateItemOrder);
        return "redirect:/itemOrder/my.action";
    }

}