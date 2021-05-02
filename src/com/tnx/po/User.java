package com.tnx.po;

import java.io.Serializable;

/**
 * @ClassName User
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--18--10:50
 **/
public class User implements Serializable {
    /**
     * 用户表的id, 用户名，密码，电话，真实姓名，性别，地址，email
     */
    private Integer id;
    private String userName;
    private String realName;
    private String passWord;
    private String phone;
    private String sex;
    private String address;
    private String email;


    public User() {
    }
    public User(String phone) {
        this.phone = phone;
    }
    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public User(Integer id, String userName, String realName, String passWord, String phone, String sex, String address, String email) {
        this.id = id;
        this.userName = userName;
        this.realName = realName;
        this.passWord = passWord;
        this.phone = phone;
        this.sex = sex;
        this.address = address;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
