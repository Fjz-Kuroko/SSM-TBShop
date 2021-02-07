package com.tb.entity;

public class TbAddress {

    private int aid;    // 地址id
    private String uid; // 用户id
    private String address; // 地址
    private String isdefault;   // 是否为默认地址 1 是 0 不是
    private String recipient;   // 收件人
    private String recipientPhone;  // 收件人电话号码

    public TbAddress() {}

    public TbAddress(int aid, String uid, String address, String isdefault, String recipient, String recipientPhone) {
        this.aid = aid;
        this.uid = uid;
        this.address = address;
        this.isdefault = isdefault;
        this.recipient = recipient;
        this.recipientPhone = recipientPhone;
    }

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIsdefault() {
        return isdefault;
    }

    public void setIsdefault(String isdefault) {
        this.isdefault = isdefault;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getRecipientPhone() {
        return recipientPhone;
    }

    public void setRecipientPhone(String recipientPhone) {
        this.recipientPhone = recipientPhone;
    }
}
