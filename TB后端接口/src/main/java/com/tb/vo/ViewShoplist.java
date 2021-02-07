package com.tb.vo;

import java.sql.Timestamp;

public class ViewShoplist {

    private int slid;
    private int oid;
    private String pid;
    private int pnum;
    private String pname;
    private double price;
    private String imgS;
    private double summary;

    public ViewShoplist() {}

    public ViewShoplist(int slid, int oid, String pid, int pnum, String pname, double price, String imgS, double summary) {
        this.slid = slid;
        this.oid = oid;
        this.pid = pid;
        this.pnum = pnum;
        this.pname = pname;
        this.price = price;
        this.imgS = imgS;
        this.summary = summary;
    }

    public int getSlid() {
        return slid;
    }

    public void setSlid(int slid) {
        this.slid = slid;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public int getPnum() {
        return pnum;
    }

    public void setPnum(int pnum) {
        this.pnum = pnum;
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

    public double getSummary() {
        return summary;
    }

    public void setSummary(double summary) {
        this.summary = summary;
    }
}
