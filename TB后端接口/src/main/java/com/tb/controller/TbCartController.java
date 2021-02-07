package com.tb.controller;

import com.tb.dto.ResponseMessage;
import com.tb.dto.Validate;
import com.tb.dto.ValidateMessage;
import com.tb.entity.TbCart;
import com.tb.service.TbCartService;
import com.tb.vo.ViewCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("tbCartController")
@RequestMapping("/cart")
public class TbCartController {

    @Autowired
    private TbCartService cartService;

    @PostMapping("/addCart")
    public ResponseMessage addCart(TbCart cart) {
        ValidateMessage validate = Validate.validate(cart);
        if (!(validate.getCode().equals("200"))) {
            return ResponseMessage.newErrorInstance(validate.getMsg());
        }
        int i = cartService.addCart(cart);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("查询不到用户!");
        }
        if (i == -2) {
            return ResponseMessage.newErrorInstance("查询不到该商品！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "添加成功！");
        }
        return ResponseMessage.newErrorInstance("添加失败！");
    }

    @RequestMapping("/updateCart")
    public ResponseMessage updateCart(TbCart cart) {
        int i = cartService.updateCart(cart);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("找不到购物车记录！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "更新成功");
        }
        return ResponseMessage.newErrorInstance("更新失败");
    }

    @RequestMapping("/deleteCart")
    public ResponseMessage deleteCart(int cid) {
        int i = cartService.deleteCart(cid);
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "删除成功！");
        }
        return ResponseMessage.newErrorInstance("删除失败！");
    }

    @RequestMapping("/getCarts")
    public ResponseMessage getCarts(String uid) {
        if (uid == null || "".equals(uid)) {
            return ResponseMessage.newErrorInstance("用户名不能为空！");
        }
        List<ViewCart> viewCarts = cartService.selectCartsByUid(uid);
        if (viewCarts == null || viewCarts.size() == 0) {
            return ResponseMessage.newErrorInstance("没有对应数据！");
        }
        return ResponseMessage.newOkInstance(viewCarts, "查询成功！");
    }

    @RequestMapping("/clearCart")
    public ResponseMessage clearCart(String uid) {
        if (uid == null || "".equals(uid)) {
            return ResponseMessage.newErrorInstance("用户名不能为空！");
        }
        List<ViewCart> viewCarts = cartService.selectCartsByUid(uid);
        int oldCount = viewCarts.size();
        int delCount = cartService.clearCart(uid);
        if (oldCount == delCount) {
            return ResponseMessage.newOkInstance(null, "清空购物车成功！");
        }
        return ResponseMessage.newErrorInstance("清空购物车失败！");
    }

}
