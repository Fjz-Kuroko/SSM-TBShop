package com.tb.vo;

public class ViewCart {

    private int cid;
    private String pid;
    private String uid;
    private int num;
    private String pname;
    private double price;
    private String imgS;
    private double summary;

    public ViewCart() {}

    public ViewCart(int cid, String pid, String uid, int num, String pname, double price, String imgS, double summary) {
        this.cid = cid;
        this.pid = pid;
        this.uid = uid;
        this.num = num;
        this.pname = pname;
        this.price = price;
        this.imgS = imgS;
        this.summary = summary;
    }

    public double getSummary() {
        return summary;
    }

    public void setSummary(double summary) {
        this.summary = summary;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImgS() {
        return imgS;
    }

    public void setImgS(String imgS) {
        this.imgS = imgS;
    }

    @Override
    public String toString() {
        return "ViewCart{" +
                "cid=" + cid +
                ", pid='" + pid + '\'' +
                ", uid='" + uid + '\'' +
                ", num=" + num +
                ", pname='" + pname + '\'' +
                ", price=" + price +
                ", imgS='" + imgS + '\'' +
                ", summary=" + summary +
                '}';
    }
}
