package com.tb.entity;

public class TbUser {

    private String uid;     // 用户id
    private String uname;   // 用户名
    private String upwd;    // 用户密码
    private String phone;   // 电话号码
    private String gender;  // 性别

    public TbUser() {}

    public TbUser(String uid, String uname, String upwd, String phone, String gender) {
        this.uid = uid;
        this.uname = uname;
        this.upwd = upwd;
        this.phone = phone;
        this.gender = gender;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getUpwd() {
        return upwd;
    }

    public void setUpwd(String upwd) {
        this.upwd = upwd;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "TbUser{" +
                "uid='" + uid + '\'' +
                ", uname='" + uname + '\'' +
                ", upwd='" + upwd + '\'' +
                ", phone='" + phone + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}
