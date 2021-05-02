package com.tnx.controller;

import com.tnx.base.BaseController;
import com.tnx.po.User;
import com.tnx.service.UserService;
import com.tnx.utils.Constants;
import com.tnx.utils.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @ClassName UserController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--18--11:21
 **/
@Controller
@RequestMapping("/user")
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    /**
     * 根据搜索显示用户，如果userName为空就查询所有
     * @param model
     * @param user
     * @return
     */
    @RequestMapping("/findBySql")
    public String findBySql(Model model, User user){
        String sql = "select * from user ";
        if(!isEmpty(user.getUserName())){
            sql += " where userName like '%" + user.getUserName()+ "%' ";
        }
        sql += " order by id ";
        Pager<User> pagers = userService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers", pagers);
        model.addAttribute("obj", user);
        return "user/user";
    }

    @RequestMapping("/update")
    public String update(Model model, Integer id){
        User user = userService.load(id);
        model.addAttribute("obj", user);
        return "user/update";
    }

    /**
     * 后台更新
     * @param user
     * @return
     */
    @RequestMapping("/exUpdate")
    public String exUpdate(User user){
        userService.updateById(user);
        return "redirect:/user/findBySql.action";
    }

    @RequestMapping("/delete")
    public String delete(Integer id){
        userService.deleteById(id);
        return "redirect:/user/findBySql.action";
    }

    /**
     *
     * @param model
     * @param request
     * @return
     */
    @RequestMapping("/view")
    public String view(Model model, HttpServletRequest request){
        Object obj = request.getSession().getAttribute(Constants.USERID);
        if(obj == null){
            return "redirect:/login/uLogin";
        }
        Integer id = Integer.valueOf(obj.toString());
        User user = userService.load(id);
        model.addAttribute("obj", user);
        request.getSession().setAttribute("role",2);
        request.getSession().setAttribute(Constants.USERNAME,user.getUserName());
        request.getSession().setAttribute(Constants.USERID,user.getId());
        return "user/view";
    }

    @RequestMapping("/exUpdate2")
    public String exUpdate2(User user,HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute == null){
            return "redirect:/login/uLogin";
        }
        user.setId(Integer.valueOf(attribute.toString()));
        userService.updateById(user);

        return "redirect:/user/view.action";
    }
}
