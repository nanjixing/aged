package com.tnx.controller;

import com.tnx.base.BaseController;
import com.tnx.po.ItemCategory;
import com.tnx.service.ItemCategoryService;
import com.tnx.utils.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName ItemCategoryController,类目controller
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--16--16:39
 **/

@Controller
@RequestMapping("/itemCategory")
public class ItemCategoryController extends BaseController {

    @Autowired
    private ItemCategoryService itemCategoryService;

    /**
     * 实现分页并返回model
     * @param model
     * @param itemCategory
     * @return
     */
    @RequestMapping("/findBySql")
    public String findBySql(Model model, ItemCategory itemCategory){
        String sql = "select * from item_category where isDelete = 0 and pid is null order by id";
        Pager<ItemCategory> pagers = itemCategoryService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers",pagers);
        model.addAttribute("obj",itemCategory);
        return "itemCategory/itemCategory";
    }

    /**
     * 新增类目
     * @return
     */
    @RequestMapping("/add")
    public String add(){
        return "itemCategory/add";
    }

    /**
     * 添加类目然后重定向到之前的页面
     * @param itemCategory
     * @return
     */
    @RequestMapping("/exAdd")
    public String exAdd(ItemCategory itemCategory){
        itemCategory.setIsDelete(0);
        System.out.println(itemCategory.getName() + " " +itemCategory.getPid());
        itemCategoryService.insert(itemCategory);
        return "redirect:/itemCategory/findBySql.action";
    }

    /**
     * 点击更新操作,根据id拿到itemContegory对象，然后放到model中返回
     * @param model
     * @param id
     * @return
     */
    @RequestMapping("/update")
    public String update(Model model, Integer id){
        ItemCategory item = itemCategoryService.load(id);
        model.addAttribute("obj", item);
        return "itemCategory/update";
    }

    /**
     * 执行完更新操作，需要重新提交到页面
     * @param itemCategory
     * @return
     */
    @RequestMapping("/exUpdate")
    public String exUpdate(ItemCategory itemCategory){
        itemCategoryService.updateById(itemCategory);
        return "redirect:/itemCategory/findBySql.action";
    }

    /**
     *删除一个条目
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    public String delete(Integer id){
        ItemCategory load = itemCategoryService.load(id);
        load.setIsDelete(1);
        itemCategoryService.updateById(load);
        String sql = "update item_category set isDelete = 1 where pid = " + id;
        itemCategoryService.updateBysql(sql);
        return "redirect:/itemCategory/findBySql.action";
    }

    /**
     * 二级类目页面
     * @param itemCategory
     * @param model
     * @return
     */
    @RequestMapping("/findBySql2")
    public String findBySql2(ItemCategory itemCategory, Model model){
        String sql ;
        if(itemCategory.getPid() != null){
            sql = "select * from item_category where isDelete = 0 and pid = " + itemCategory.getPid() + " order by id";
        }else{
            return "itemCategory/itemCategory";
        }
        Pager<ItemCategory> pagers = itemCategoryService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers", pagers);
        model.addAttribute("obj", itemCategory);
        return "itemCategory/itemCategory2";
    }

    /**
     * 向新增二级类目页面跳转同时传入pid
     * @param pid
     * @param model
     * @return
     */
    @RequestMapping("/add2")
    public String add2(int pid, Model model){
        model.addAttribute("pid",pid);
        return "itemCategory/add2";
    }

    /**
     * 添加二级类目操作,注意要传回pid
     * @param itemCategory
     * @return
     */
    @RequestMapping("/exAdd2")
    public String exAdd2(ItemCategory itemCategory){
        itemCategory.setIsDelete(0);
        //System.out.println(itemCategory.getName() + " " +itemCategory.getPid());
        itemCategoryService.insert(itemCategory);
        return "redirect:/itemCategory/findBySql2.action?pid=" + itemCategory.getPid();
    }

    /**
     * 更新二级类目下内容
     * @param model
     * @param id
     * @return
     */
    @RequestMapping("/update2")
    public String update2(Model model, Integer id){
        ItemCategory item = itemCategoryService.load(id);
        model.addAttribute("obj", item);
        return "itemCategory/update2";
    }

    /**
     * 执行二级类目的更新，注意传回pid
     * @param itemCategory
     * @return
     */
    @RequestMapping("/exUpdate2")
    public String exUpdate2(ItemCategory itemCategory){
        itemCategoryService.updateById(itemCategory);
        return "redirect:/itemCategory/findBySql2.action?pid=" + itemCategory.getPid();
    }

    /**
     * 删除二级类目，返回时也要返回pid
     * @param id
     * @param pid
     * @return
     */
    @RequestMapping("/delete2")
    public String delete2(Integer id, Integer pid){
        ItemCategory load = itemCategoryService.load(id);
        load.setIsDelete(1);
        itemCategoryService.updateById(load);
        return "redirect:/itemCategory/findBySql2.action?pid=" +pid;
    }
}
