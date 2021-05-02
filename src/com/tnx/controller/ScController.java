package com.tnx.controller;

import com.tnx.base.BaseController;
import com.tnx.po.Item;
import com.tnx.po.Sc;
import com.tnx.service.ItemService;
import com.tnx.service.ScService;
import com.tnx.utils.Constants;
import com.tnx.utils.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @ClassName ScController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--20--15:01
 **/
@Controller
@RequestMapping("/sc")
public class ScController extends BaseController {
    @Autowired
    private ScService scService;

    @Autowired
    private ItemService itemService;

    /**
     * 添加收藏，如果可以从session中得到对象，根据sc对象的商品id属性查找商品进行添加收藏
     * @param sc
     * @param request
     * @return
     */
    @RequestMapping("/exAdd")
    public String exAdd(Sc sc, HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute==null){
            return "redirect:/login/uLogin";
        }
        //保存到收藏表
        Integer userId = Integer.valueOf(attribute.toString());
        sc.setUserId(userId);
        scService.insert(sc);
        //商品表收藏数+1
        Item item = itemService.load(sc.getItemId());
        item.setScNum(item.getScNum()+1);
        itemService.updateById(item);
        return "redirect:/sc/findBySql.action";
    }

    /**
     * 收藏列表
     */
    @RequestMapping("/findBySql")
    public String findBySql(Model model, HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute==null){
            return "redirect:/login/uLogin";
        }
        Integer userId = Integer.valueOf(attribute.toString());
        String sql = "select * from sc where user_id="+userId+" order by id desc";
        Pager<Sc> pagers = scService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers",pagers);
        return "sc/my";
    }

    /**
     * 取消收藏
     */
    @RequestMapping("/delete")
    public String delete(Integer id,HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute==null){
            return "redirect:/login/uLogin";
        }
        scService.deleteById(id);
        return "redirect:/sc/findBySql.action";
    }
}
