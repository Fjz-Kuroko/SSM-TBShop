package com.tb.vo;

import java.sql.Timestamp;
import java.util.List;

public class ViewOrder {

    private int oid;    // 订单id
    private String uid; // 用户id
    private int aid;    // 地址id
    private Timestamp orderTime;    // 下单时间
    private double orderAmount; // 订单金额
    private String status;  // 订单状态
    private Timestamp deliveryTime; // 发货时间
    private Timestamp receivingTime;    // 收货时间
    private List<ViewShoplist> shoplists; // 订单涉及的商品

    public ViewOrder() {}

    public ViewOrder(int oid, String uid, int aid, Timestamp orderTime, double orderAmount,
                     String status, Timestamp deliveryTime, Timestamp receivingTime, List<ViewShoplist> shoplists) {
        this.oid = oid;
        this.uid = uid;
        this.aid = aid;
        this.orderTime = orderTime;
        this.orderAmount = orderAmount;
        this.status = status;
        this.deliveryTime = deliveryTime;
        this.receivingTime = receivingTime;
        this.shoplists = shoplists;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public Timestamp getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Timestamp orderTime) {
        this.orderTime = orderTime;
    }

    public double getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(double orderAmount) {
        this.orderAmount = orderAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Timestamp deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Timestamp getReceivingTime() {
        return receivingTime;
    }

    public void setReceivingTime(Timestamp receivingTime) {
        this.receivingTime = receivingTime;
    }

    public List<ViewShoplist> getShoplists() {
        return shoplists;
    }

    public void setShoplists(List<ViewShoplist> shoplists) {
        this.shoplists = shoplists;
    }
}
