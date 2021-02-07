package com.tb.entity;

public class TbShoplist {

    private int slid;   // shoplist的id
    private int oid;    // 订单id
    private String pid; // 商品id
    private String uid; // 用户id
    private int pnum;   // 商品数量

    public TbShoplist() {}

    public TbShoplist(int slid, int oid, String pid, String uid, int pnum) {
        this.slid = slid;
        this.oid = oid;
        this.pid = pid;
        this.uid = uid;
        this.pnum = pnum;
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

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public int getPnum() {
        return pnum;
    }

    public void setPnum(int pnum) {
        this.pnum = pnum;
    }
}
