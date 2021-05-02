package com.tnx.controller;

import com.tnx.po.OrderDetail;
import com.tnx.service.OrderDetailService;
import com.tnx.utils.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName OrderDetailController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--19--14:14
 **/
@Controller
@RequestMapping("/orderDetail")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @RequestMapping("/ulist")
    public String ulist(OrderDetail orderDetail, Model model){
        //分页查询
        String sql = "select * from order_detail  where order_id="+orderDetail.getOrderId();
        Pager<OrderDetail> pagers = orderDetailService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers",pagers);
        model.addAttribute("obj",orderDetail);
        return "orderDetail/ulist";
    }
}
