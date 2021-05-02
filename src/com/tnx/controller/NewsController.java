package com.tnx.controller;

import com.tnx.base.BaseController;
import com.tnx.po.News;
import com.tnx.service.NewsService;
import com.tnx.utils.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;

/**
 * @ClassName NewsController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--19--16:25
 **/
@Controller
@RequestMapping("/news")
public class NewsController extends BaseController {

    @Autowired
    private NewsService newsService;

    /**
     * 查询所有新闻
     * @param news
     * @param model
     * @return
     */
    @RequestMapping("/findBySql")
    public String findBySql(News news, Model model){
        String sql = "select * from news where 1=1 ";
        if(!isEmpty(news.getName())){
            sql += " and name like '%"+news.getName()+"%'";
        }
        sql += " order by id desc";
        Pager<News> pagers = newsService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers",pagers);
        model.addAttribute("obj",news);
        return "news/new";
    }

    /**
     * 跳转到新闻添加界面
     * @return
     */
    @RequestMapping("/add")
    public String add(){
        return "news/add";
    }

    /**
     * 添加新闻
     * @param news
     * @return
     */
    @RequestMapping("/exAdd")
    public String exAdd(News news){
        news.setAddTime(new Date());
        newsService.insert(news);
        return "redirect:/news/findBySql";
    }

    /**
     * 更新
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("/update")
    public String update(Integer id,Model model){
        News obj = newsService.load(id);
        model.addAttribute("obj",obj);
        return "news/update";
    }

    /**
     * 执行更新
     * @param news
     * @return
     */
    @RequestMapping("/exUpdate")
    public String exUpdate(News news){
        newsService.updateById(news);
        return "redirect:/news/findBySql";
    }

    @RequestMapping("/delete")
    public String delete(Integer id){
        newsService.deleteById(id);
        return "redirect:/news/findBySql";
    }

    /**
     * 前端公告列表
     */
    @RequestMapping("/list")
    public String list(Model model){
        Pager<News> pagers = newsService.findByEntity(new News());
        model.addAttribute("pagers",pagers);
        return "news/list";
    }

    /**
     * 公告详情页面
     */
    @RequestMapping("/view")
    public String view(Integer id,Model model){
        News obj = newsService.load(id);
        model.addAttribute("obj",obj);
        return "news/view";
    }
}
