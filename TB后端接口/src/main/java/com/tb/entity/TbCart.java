package com.tb.entity;

public class TbCart {

    private int cid;    // 购物车id
    private String uid; // 用户id
    private String pid; // 商品id
    private int num;    // 商品数量

    public TbCart() {}

    public TbCart(int cid, String uid, String pid, int num) {
        this.cid = cid;
        this.uid = uid;
        this.pid = pid;
        this.num = num;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return "TbCart{" +
                "cid=" + cid +
                ", uid='" + uid + '\'' +
                ", pid='" + pid + '\'' +
                ", num=" + num +
                '}';
    }
}
