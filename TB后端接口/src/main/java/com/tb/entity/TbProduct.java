package com.tb.entity;

public class TbProduct {

    private String pid; // 商品id
    private String pname;   // 商品名称
    private String pclass;  // 商品分类
    private double price;   // 商品价格
    private String description; // 商品描述
    private int saleNum;    // 销量
    private String imgB;    // 商品 大 图片url
    private String imgM;    // 商品 中 图片url
    private String imgS;    // 商品 小 图片url

    public TbProduct() {}

    public TbProduct(String pid, String pname, String pclass, double price,
                     String description, int saleNum, String imgB, String imgM, String imgS) {
        this.pid = pid;
        this.pname = pname;
        this.pclass = pclass;
        this.price = price;
        this.description = description;
        this.saleNum = saleNum;
        this.imgB = imgB;
        this.imgM = imgM;
        this.imgS = imgS;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getPclass() {
        return pclass;
    }

    public void setPclass(String pclass) {
        this.pclass = pclass;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getSaleNum() {
        return saleNum;
    }

    public void setSaleNum(int saleNum) {
        this.saleNum = saleNum;
    }

    public String getImgB() {
        return imgB;
    }

    public void setImgB(String imgB) {
        this.imgB = imgB;
    }

    public String getImgM() {
        return imgM;
    }

    public void setImgM(String imgM) {
        this.imgM = imgM;
    }

    public String getImgS() {
        return imgS;
    }

    public void setImgS(String imgS) {
        this.imgS = imgS;
    }
}
