package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.base.BaseController;
import com.tnx.po.*;
import com.tnx.service.ItemCategoryService;
import com.tnx.service.ItemService;
import com.tnx.service.ManageService;
import com.tnx.service.UserService;
import com.tnx.utils.Constants;
import com.tnx.utils.login.loginConfig;
import com.tnx.utils.mail.MailUtils;
import org.codehaus.jackson.node.ContainerNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName mLoginController
 * @Description 登录相关的Controller
 * @Author Nanxing Tang
 * @Date 2021--04--15--13:55
 **/
@Controller
@RequestMapping("/login")
public class LoginController extends BaseController {

    @Autowired
    private ManageService manageService;

    @Autowired
    private ItemCategoryService itemCategoryService;

    @Autowired
    private ItemService itemService;

    @Autowired
    private UserService userService;

//    用来记录时间信息验证邮件的验证码有效时间
    private MailUtils mailUtils = new MailUtils();

    /**
     * 管理员登录,前后缀在springmvc中配置过
     * @return
     */
    @RequestMapping("/login")
    public String login(){
        return "/login/mLogin";
    }

    /**
     * 登录验证,根据输入信息判断是否存在该用户
     * @param manage
     * @param request
     * @return
     */
    @RequestMapping("/toLogin")
    public String toLogin(Manage manage, HttpServletRequest request){
        //System.out.println(manage.getUserName() + request.getParameter("userName"));
        Manage entity = manageService.getByEntity(manage);
        if(entity.getUserName() == null || entity.getPassWord() == null){
            return "redirect:/login/toLogOut";
        }
        return "/login/mIndex";
    }

    /**
     * 管理员退出将session中的信息设置为空，
     * @param request
     * @return
     */
    @RequestMapping("/toLogOut")
    public String toLoginOut(HttpServletRequest request){
        request.getSession().setAttribute(Constants.MANAGE, null);
        return "/login/mLogin";
    }

    /**
     * 对首页分类进行查询，同时加载二级分类。查询折扣商品和热销商品
     * @param item
     * @param model
     * @param request
     * @return
     */
    @RequestMapping("/uIndex")
    public String uIndex(Item item, Model model, HttpServletRequest request){
        //1.查询一级分类
        String sql1 = "select * from item_category where isDelete=0 and pid is null order by name";
        List<ItemCategory> fatherList = itemCategoryService.listBySqlReturnEntity(sql1);
        List<CategoryDto> list = new ArrayList<>();
        //2.一级分类不为空查询二级分类
        if(!CollectionUtils.isEmpty(fatherList)){
            for(ItemCategory ic:fatherList){
                CategoryDto dto = new CategoryDto();
                dto.setFather(ic);
                //查询二级类目
                String sql2 = "select * from item_category where isDelete=0 and pid="+ic.getId();
                List<ItemCategory> childrens = itemCategoryService.listBySqlReturnEntity(sql2);
                dto.setChildrens(childrens);
                list.add(dto);
                model.addAttribute("lbs",list);
            }
        }
        //折扣商品,只查询折扣优惠最大的10个商品
        List<Item> zks = itemService.listBySqlReturnEntity("select * from item where isDelete=0 and zk is not null order by zk desc limit 0,10");
        model.addAttribute("zks",zks);

        //热销商品，根据购买数量进行查询返回。
        List<Item> rxs = itemService.listBySqlReturnEntity("select * from item where isDelete=0 order by gmNum desc limit 0,10");
        model.addAttribute("rxs",rxs);
        return "login/uIndex";
    }

    /**
     * 用户注册
     * @return
     */
    @RequestMapping("/res")
    public String res(){
        return "/login/res";
    }

    /**
     * 生成邮箱验证码
     * @param emailCheck
     * @param model
     * @return
     * @throws GeneralSecurityException
     * @throws MessagingException
     */
    @RequestMapping("/genCode")
    @ResponseBody
    public String genCode(String emailCheck, Model model) throws GeneralSecurityException{
        JSONObject js = new JSONObject();
        if("".equals(emailCheck)){
           js.put(Constants.GENCODE,0);
            return js.toString();
        }
//        生成邮箱验证码记录生成时间
        String code = mailUtils.generatorEmailCode();
        mailUtils.setGeneCodeTime(System.currentTimeMillis());
        mailUtils.setEmail(emailCheck);
        if (code != "")mailUtils.setEmailCode(code);
        else {
            js.put(Constants.GENCODE,1);
            return js.toString();
        }
//        发送邮件
        try {
            mailUtils.sendEmail(code,emailCheck);
        } catch (MessagingException e) {
            js.put(Constants.GENCODE,2);
            e.printStackTrace();

        }
        js.put(Constants.GENCODE, 3);
        return js.toString();
    }

    /**
     * 执行注册
     * @param user
     * @return
     */
    @RequestMapping("toRes")
    public String toRes(User user, String emailCode,Model model){
//        后台再次检验user中的数据
//        1. 校验邮箱基本信息
        if(!mailUtils.getEmail().equals(user.getEmail())){

            model.addAttribute(Constants.TORES_EC_FAIL, 0);
            return "/login/res";
        }
//        2. 验证验证码有效时间校验邮箱验证码，
        long codeDuration = System.currentTimeMillis() - mailUtils.getGeneCodeTime();
        if(codeDuration > MailUtils.codeLifeTime){
            model.addAttribute(Constants.TORES_EC_FAIL, 1);
            return "/login/res";
        }
        if(!emailCode.equals(mailUtils.getEmailCode())){
            model.addAttribute(Constants.TORES_EC_FAIL, 2);
            System.out.println(mailUtils.getEmailCode());
            return "/login/res";
        }
//        3.验证手机号是否已注册
        User user1 = new User();
        user1.setPhone(user.getPhone());
        User byEntity = userService.getByEntity(user1);
        if(byEntity != null){
//        4.手机号已被注册
            model.addAttribute(Constants.TORES_EC_FAIL, 3);
            return "login/res";
        }
//        4.验证成功
        userService.insert(user);
        model.addAttribute(Constants.TORES_EC_FAIL, 4);
        return "login/uLogin";
    }

    @RequestMapping("/uLogin")
    public String uLogin(){
        return "login/uLogin";
    }
    /**
     * 登录验证,判断是否存在,两次判断，先用名字查，查不到再用phone查，二者都查不到才判定 不存在该用户
     * 如果不存在重定向到注册，否则到主页并且将信息写入session,role设置2表示普通用户
     * @param user
     * @return
     */
    @RequestMapping("/utoLogin")
    public String utoLogin(User user, HttpServletRequest request){

        User u = userService.getByEntity(user);
        if(u == null){
            User up = new User();
            up.setPhone(user.getUserName());
            up.setPassWord(user.getPassWord());
            User u1 = userService.getByEntity(up);
            if(u1 == null){
                return "redirect:/login/res.action";
            }

            request.getSession().setAttribute("role",2);
            request.getSession().setAttribute("userName",u1.getUserName());
            request.getSession().setAttribute("userId",u1.getId());
            if(!loginConfig.webLogin.containsKey(u1.getId())){
                loginConfig.webLogin.put(u1.getId(),String.valueOf(request.getSession().hashCode()));

            }else{

                    if(!loginConfig.webLogin.get(u1.getId()).equals(String.valueOf(request.getSession().hashCode()))){
                        loginConfig.webLogin.remove(u1.getId());
                        loginConfig.webLogin.put(u1.getId(),String.valueOf(request.getSession().hashCode()));

                    }
            }
            return "redirect:/login/uIndex.action";

        }else{
//            添加唯一登陆
            request.getSession().setAttribute("role",2);
            request.getSession().setAttribute(Constants.USERNAME,u.getUserName());
            request.getSession().setAttribute(Constants.USERID,u.getId());
            if(!loginConfig.webLogin.containsKey(u.getId())){
                loginConfig.webLogin.put(u.getId(),String.valueOf(request.getSession().hashCode()));

            }else{
                if(!loginConfig.webLogin.get(u.getId()).equals(String.valueOf(request.getSession().hashCode()))){
                    loginConfig.webLogin.remove(u.getId());
                    loginConfig.webLogin.put(u.getId(),String.valueOf(request.getSession().hashCode()));
                }
            }
            return "redirect:/login/uIndex.action";
        }
    }

    /**
     * 退出
     * @param request
     * @return
     */
    @RequestMapping("/uTui")
    public String uTui(HttpServletRequest request){
//        1. 获取session
        HttpSession session = request.getSession();
//        2. 清空session
        session.invalidate();
        return "redirect:/login/uIndex.action";
    }

    /**
     * 确认密码
     * @param request
     * @return
     */
    @RequestMapping("/pass")
    public String pass(HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute==null){
            return "redirect:/login/uLogin";
        }
        Integer userId = Integer.valueOf(attribute.toString());
        User load = userService.load(userId);
        request.setAttribute("obj", load);
        return "login/pass";
    }

    /**
     * 修改密码
     * @param password
     * @param request
     * @return
     */
    @RequestMapping("/upass")
    @ResponseBody
    public String upass(String password,HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        JSONObject js = new JSONObject();
        if(attribute==null){
            js.put(Constants.RES,0);
            return js.toString();
        }
        Integer userId = Integer.valueOf(attribute.toString());
        User load = userService.load(userId);
        load.setPassWord(password);
        userService.updateById(load);
        js.put(Constants.RES,1);
        return js.toString();
    }



    /**
     * 测试json数据
     * @return
     */
    @RequestMapping("/my")
    @ResponseBody
    public User my(){
        String sql = "select * from user where id = 1";
        User user = userService.getBySqlReturnEntity(sql);
        return user;
    }
}
