package com.tnx.po;

import java.util.List;

/**
 * @ClassName CategoryDto
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--19--20:13
 **/
public class CategoryDto {
    private ItemCategory father;

    private List<ItemCategory> childrens;

    public CategoryDto(){

    }

    public CategoryDto(ItemCategory father, List<ItemCategory> childrens) {
        this.father = father;
        this.childrens = childrens;
    }

    public ItemCategory getFather() {
        return father;
    }

    public void setFather(ItemCategory father) {
        this.father = father;
    }

    public List<ItemCategory> getChildrens() {
        return childrens;
    }

    public void setChildrens(List<ItemCategory> childrens) {
        this.childrens = childrens;
    }
}
