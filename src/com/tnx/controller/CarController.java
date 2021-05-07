package com.tnx.controller;

import com.alibaba.fastjson.JSONObject;
import com.tnx.base.BaseController;
import com.tnx.po.Item;
import com.tnx.po.Car;
import com.tnx.service.ItemService;
import com.tnx.service.CarService;
import com.tnx.utils.Constants;
import com.tnx.utils.login.loginConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

/**
 * @ClassName CarController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--20--15:35
 **/
@Controller
@RequestMapping("/car")
public class CarController extends BaseController {
    @Autowired
    private CarService carService;

    @Autowired
    private ItemService itemService;

    /**
     * 购物车添加功能，同时计算折扣，在购物车中显示的即是折扣价格
     *
     * @param car
     * @param request
     * @return
     */
    @RequestMapping("/exAdd")
    @ResponseBody
    public String exAdd(Car car, HttpServletRequest request) {
        JSONObject js = new JSONObject();
        //判断登录状态
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if (attribute == null) {
            js.put(Constants.RES, 0);
            return js.toJSONString();
        }

        //保存到购物车
        Integer userId = Integer.valueOf(attribute.toString());
        car.setUserId(userId);
        Item item = itemService.load(car.getItemId());
        String price = item.getPrice();
        Double valueOf = Double.valueOf(price);
        car.setPrice(valueOf);
        //如果有折扣获得折扣价格
        if (item.getZk() != null) {
            valueOf = valueOf * item.getZk() / 10;
            BigDecimal bg = new BigDecimal(valueOf).setScale(2, RoundingMode.UP);
            car.setPrice(bg.doubleValue());
            valueOf = bg.doubleValue();
        }
        //计算总价格
        Integer num = car.getNum();
        Double t = valueOf * num;
        BigDecimal bg = new BigDecimal(t).setScale(2, RoundingMode.UP);
        double doubleValue = bg.doubleValue();
        car.setTotal(doubleValue + "");
        carService.insert(car);
        js.put(Constants.RES, 1);
        return js.toJSONString();
    }

    /**
     * 判断登录就返回购物车列表
     * @param model
     * @param request
     * @return
     */
    @RequestMapping("/findBySql")
    public String findBySql(Model model, HttpServletRequest request){
        Object attribute = request.getSession().getAttribute(Constants.USERID);
        if(attribute == null){
            return "redirect:/login/uLogin";
        }
        Integer userId = Integer.valueOf(attribute.toString());
        String sql = "select * from car where user_id = " + userId + " order by id desc";
        List<Car> list = carService.listBySqlReturnEntity(sql);
        model.addAttribute("list",list);

        return "car/car";
    }

    @RequestMapping("/delete")
    @ResponseBody
    public String delete(int id){
        carService.deleteById(id);
        return "success";
    }

}