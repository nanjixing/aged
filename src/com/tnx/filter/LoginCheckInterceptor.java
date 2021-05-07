package com.tnx.filter;

import com.tnx.po.User;
import com.tnx.utils.Constants;
import com.tnx.utils.login.loginConfig;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * @ClassName LoginCheckInterceptor
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--05--06--17:03
 **/
public  class LoginCheckInterceptor extends HandlerInterceptorAdapter {


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Integer id = (Integer) request.getSession().getAttribute(Constants.USERID);
        if(id == null){
            response.sendRedirect(request.getContextPath() + "/login/uLogin");
//            request.getRequestDispatcher(request.getContextPath() + "/login/uLogin").forward(request, response);
            return false;
        }else{
            if(!String.valueOf(request.getSession().hashCode()).equals(loginConfig.webLogin.get(id))){
//                request.getRequestDispatcher(request.getContextPath() + "/login/uLogin").forward(request, response);
                response.sendRedirect(request.getContextPath() + "/login/uLogin");
                return false;
            }
        }
//        request.getRequestDispatcher(request.getContextPath() + "/login/ulogin").forward(request, response);

        return true;
    }


}
