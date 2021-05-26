package com.tnx.controller;

import com.tnx.base.BaseController;
import com.tnx.po.Item;
import com.tnx.po.ItemCategory;
import com.tnx.service.ItemCategoryService;
import com.tnx.service.ItemService;
import com.tnx.utils.Pager;
import com.tnx.utils.SystemContext;
import com.tnx.utils.UUIDUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * @ClassName ItemController
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--18--16:30
 **/
@Controller
@RequestMapping("/item")
public class ItemController extends BaseController {
    @Autowired
    private ItemService itemService;
    @Autowired
    private ItemCategoryService itemCategoryService;

    /**
     * 查询商品以及搜索商品
     *
     * @param model
     * @param item
     * @return
     */
    @RequestMapping("/findBySql")
    public String findBySql(Model model, Item item) {
        String sql = "select * from item where isDelete = 0 ";
        if (!isEmpty(item.getName())) {
            sql += " and name like '%" + item.getName() + "%' ";
        }
        sql += " order by id desc";
        Pager<Item> pagers = itemService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers", pagers);
        model.addAttribute("obj", item);
        return "item/item";
    }

    /**
     * 跳转添加页面，传一个model放类目列表
     *
     * @param model
     * @return
     */
    @RequestMapping("/add")
    public String add(Model model) {
        String sql = "select * from item_category where isDelete = 0 and pid is not null order by id";
        List<ItemCategory> listBySqlReturnEntity = itemCategoryService.listBySqlReturnEntity(sql);
        model.addAttribute("types", listBySqlReturnEntity);
        return "item/add";
    }

    /**
     * 执行添加
     *
     * @param item
     * @param files
     * @param request
     * @return
     * @throws IOException
     */
    @RequestMapping("/exAdd")
    public String exAdd(Item item, @RequestParam("file") CommonsMultipartFile[] files, HttpServletRequest request) throws IOException {
        itemCommon(item, files, request);
        item.setGmNum(0);
        item.setIsDelete(0);
        item.setScNum(0);

        itemService.insert(item);
        return "redirect:/item/findBySql.action";
    }

    /**
     * 添加和更新公共方法，主要是富文本的图片的存储,前端传多个file类型，在后台可以用一个files数组来接受
     *
     * @param item
     * @param files
     * @param request
     * @throws IOException
     */
    private void itemCommon(Item item, @RequestParam("file") CommonsMultipartFile[] files, HttpServletRequest request) throws IOException {
        if (files.length > 0) {
            for (int s = 0; s < files.length; s++) {
                //判断图片名字是否为空防止更新的时候图片没有修改，会导致图片失效
                if (!"".equals(files[s].getOriginalFilename())) {
                    String n = UUIDUtils.create();

                    //修改SystemContext.getRealPath()为
                    String path = SystemContext.getRealPath() + "\\resource\\ueditor\\upload\\" + n + files[s].getOriginalFilename();
                    File newFile = new File(path);
                    //通过CommonsMultipartFile的方法直接写文件
                    files[s].transferTo(newFile);
                    if (s == 0) {
                        item.setUrl1(request.getContextPath() + "/resource/ueditor/upload/" + n + files[s].getOriginalFilename());
                    }
                    if (s == 1) {
                        item.setUrl2(request.getContextPath() + "/resource/ueditor/upload/" + n + files[s].getOriginalFilename());
                    }
                    if (s == 2) {
                        item.setUrl3(request.getContextPath() + "/resource/ueditor/upload/" + n + files[s].getOriginalFilename());
                    }
                    if (s == 3) {
                        item.setUrl4(request.getContextPath() + "/resource/ueditor/upload/" + n + files[s].getOriginalFilename());
                    }
                    if (s == 4) {
                        item.setUrl5(request.getContextPath() + "/resource/ueditor/upload/" + n + files[s].getOriginalFilename());
                    }
                }

            }
        }
        ItemCategory byId = itemCategoryService.getById(item.getCategoryIdTwo());
        item.setCategoryIdOne(byId.getPid());
    }

    /**
     * 更新item,传回类目列表
     *
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("/update")
    public String update(Integer id, Model model) {
        Item obj = itemService.load(id);
        String sql = "select * from item_category where isDelete = 0 and pid is not null order by id";
        List<ItemCategory> listBySqlReturnEntity = itemCategoryService.listBySqlReturnEntity(sql);
        model.addAttribute("types", listBySqlReturnEntity);
        model.addAttribute("obj", obj);
        return "item/update";
    }

    /**
     * 执行更新
     *
     * @param item
     * @param files
     * @param request
     * @return
     * @throws IOException
     */
    @RequestMapping("/exUpdate")
    public String exUpdate(Item item, @RequestParam("file") CommonsMultipartFile[] files, HttpServletRequest request) throws IOException {
        itemCommon(item, files, request);
        Item load = itemService.load(item.getId());
        if ("".equals(item.getUrl1())) item.setUrl1(load.getUrl1());
        if ("".equals(item.getUrl2())) item.setUrl2(load.getUrl2());
        if ("".equals(item.getUrl3())) item.setUrl3(load.getUrl3());
        if ("".equals(item.getUrl4())) item.setUrl4(load.getUrl4());
        if ("".equals(item.getUrl5())) item.setUrl5(load.getUrl5());
        itemService.updateById(item);
        return "redirect:/item/findBySql.action";
    }

    /**
     * 下架商品
     *
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    public String update(Integer id) {
        Item obj = itemService.load(id);
        obj.setIsDelete(1);
        itemService.updateById(obj);
        return "redirect:/item/findBySql.action";
    }

    /**
     * 可以通过搜索或者点击二级类目查询商品并且能够根据商品进行价格或销量排序(默认按照id）
     *
     * @param item
     * @param model
     * @param condition
     * @return
     */
    @RequestMapping("/shoplist")
    public String shoplist(Item item, Model model, String condition) {
        String sql = "select * from item where isDelete = 0 ";
        logger.info("categoryIdTwo", item.getCategoryIdTwo());
        if (!isEmpty(item.getCategoryIdTwo())) {
            sql += " and category_id_two = " + item.getCategoryIdTwo();
        }
        if (!isEmpty(condition)) {
            model.addAttribute("condition", condition);
            sql += " and name like '%" + condition + "%'";
        }
        if (!isEmpty(item.getPrice())) {
            sql += " order by (price + 0) desc";
        }
        if (!isEmpty(item.getGmNum())) {
            sql += " order by gmNum desc";
        }
        if (!isEmpty(item.getPrice()) && !isEmpty(item.getGmNum())) {
            sql += " order by id";
        }
        Pager<Item> pagers = itemService.findBySqlRerturnEntity(sql);
        model.addAttribute("obj", item);
        model.addAttribute("pagers", pagers);
        return "item/shoplist";
    }

    @RequestMapping("/view")
    public String view(Integer id, Model model) {
        Item obj = itemService.load(id);
        model.addAttribute("obj", obj);
        return "item/view";
    }

}
