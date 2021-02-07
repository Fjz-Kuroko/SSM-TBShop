package com.tb.entity;

public class TbAdmin {

    private String adminName;   // 后台用户名
    private String adminPwd;    // 后台用户密码
    private int role;   // 权限

    public TbAdmin() {}

    public TbAdmin(String adminName, String adminPwd, int role) {
        this.adminName = adminName;
        this.adminPwd = adminPwd;
        this.role = role;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminPwd() {
        return adminPwd;
    }

    public void setAdminPwd(String adminPwd) {
        this.adminPwd = adminPwd;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }
}
