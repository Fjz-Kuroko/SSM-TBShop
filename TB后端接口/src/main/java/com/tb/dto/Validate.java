package com.tb.dto;

import com.tb.entity.*;
import com.tb.utils.RegexUtils;

public class Validate {

    /**
     * TbUser类参数验证方法
     * @param user TbUser对象
     * @return 返回参数验证信息
     */
    public static ValidateMessage validate(TbUser user) {
        if (user == null) {
            return ValidateMessage.newInstance("500", "传入对象为null");
        }
        if (user.getUid() == null || user.getUid().length() <= 0) {
            return ValidateMessage.newInstance("401", "用户id不能为空！");
        }
        if (user.getUpwd() == null || user.getUpwd().length() <= 0) {
            return ValidateMessage.newInstance("402", "用户密码不能为空！");
        } else {
            if (!RegexUtils.isQualifiedPwd(user.getUpwd())) {
                return ValidateMessage.newInstance("301", "密码格式不对！");
            }
        }
        if (user.getUname() == null || user.getUname().length() <= 0) {
            return ValidateMessage.newInstance("403", "用户名不能为空！");
        }
        if (user.getPhone() == null || user.getPhone().length() <= 0) {
            return ValidateMessage.newInstance("404", "电话号码不能为空！");
        } else {
            if (!RegexUtils.isPhone(user.getPhone())) {
                return ValidateMessage.newInstance("302", "手机号码格式不对！");
            }
        }
        if (user.getGender() == null || user.getGender().length() <= 0) {
            return ValidateMessage.newInstance("405", "性别不能为空！");
        } else {
            if (!("男".equals(user.getGender())) && !("女".equals(user.getGender()))) {
                return ValidateMessage.newInstance("303", "性别只能为'男'或'女'！");
            }
        }
        return ValidateMessage.newInstance("200", "success");
    }

    /**
     * TbAdmin类参数验证方法
     * @param admin TbAdmin对象
     * @return 返回参数验证信息
     */
    public static ValidateMessage validate(TbAdmin admin) {
        if (admin == null) {
            return ValidateMessage.newInstance("500", "传入对象为null");
        }
        if (admin.getAdminName() == null || "".equals(admin.getAdminName())) {
            return ValidateMessage.newInstance("401", "用户名不能为空！");
        }
        if (admin.getAdminPwd() == null || "".equals(admin.getAdminPwd())) {
            return ValidateMessage.newInstance("402", "密码不能为空！");
        }
        return ValidateMessage.newInstance("200", "success");
    }

    /**
     * TbAddress类参数验证方法
     * @param address TbAddress对象
     * @return 返回参数验证信息
     */
    public static ValidateMessage validate(TbAddress address) {
        if (address == null) {
            return ValidateMessage.newInstance("500", "传入对象为null");
        }
        if (address.getUid() == null || "".equals(address.getUid())) {
            return ValidateMessage.newInstance("401", "用户id不能为空！");
        }
        if (address.getAddress() == null || "".equals(address.getAddress())) {
            return ValidateMessage.newInstance("402", "地址不能为空！");
        }
        if (address.getRecipient() == null || "".equals(address.getRecipient())) {
            return ValidateMessage.newInstance("403", "收件人不能为空！");
        }
        if (address.getRecipientPhone() == null || "".equals(address.getRecipientPhone())) {
            return ValidateMessage.newInstance("404", "收件人电话号码不能为空！");
        }
        return ValidateMessage.newInstance("200", "success");
    }

    /**
     * TbProduct类参数验证方法
     * @param product TbProduct对象
     * @return 返回参数验证信息
     */
    public static ValidateMessage validate(TbProduct product) {
        if (product == null) {
            return ValidateMessage.newInstance("500", "传入对象为null");
        }
        if (product.getPid() == null || "".equals(product.getPid())) {
            return ValidateMessage.newInstance("401", "商品id不能为空！");
        }
        if (product.getPname() == null || "".equals(product.getPname())) {
            return ValidateMessage.newInstance("402", "商品名不能为空！");
        }
        if (product.getPclass() == null || "".equals(product.getPclass())) {
            return ValidateMessage.newInstance("403", "商品分类不能为空！");
        }
        if (product.getDescription() == null || "".equals(product.getDescription())) {
            product.setDescription("该商品暂时没有描述信息.");
        }
        if (product.getImgB() == null || "".equals(product.getImgB())) {
            return ValidateMessage.newInstance("404", "商品大图url不能为空！");
        }
        if (product.getImgM() == null || "".equals(product.getImgM())) {
            return ValidateMessage.newInstance("404", "商品中图url不能为空！");
        }
        if (product.getImgS() == null || "".equals(product.getImgS())) {
            return ValidateMessage.newInstance("404", "商品小图url不能为空！");
        }
        return ValidateMessage.newInstance("200", "success");
    }

    public static ValidateMessage validate(TbCart cart) {
        if (cart == null) {
            return ValidateMessage.newInstance("500", "传入对象为null");
        }
        if (cart.getUid() == null || "".equals(cart.getUid())) {
            return ValidateMessage.newInstance("401", "用户id不能为空！");
        }
        if (cart.getPid() == null || "".equals(cart.getPid())) {
            return ValidateMessage.newInstance("402", "商品id不能为空！");
        }
        return ValidateMessage.newInstance("200", "success");
    }

}
