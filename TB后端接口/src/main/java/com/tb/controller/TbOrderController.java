package com.tb.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tb.dto.ResponseMessage;
import com.tb.entity.TbOrder;
import com.tb.entity.TbUser;
import com.tb.service.TbOrderService;
import com.tb.service.TbUserService;
import com.tb.vo.ViewAdminOrder;
import com.tb.vo.ViewCart;
import com.tb.vo.ViewOrder;
import com.tb.vo.ViewShoplist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController("tbOrderController")
@RequestMapping("/order")
public class TbOrderController {

    @Autowired
    private TbOrderService orderService;
    @Autowired
    private TbUserService userService;

    @RequestMapping(value = "/submitOrder", method = RequestMethod.POST)
    public ResponseMessage submitOrder(String viewCartsStr, String uid, double orderAmount) {
        // 处理前端传递的数据
        ObjectMapper objectMapper = new ObjectMapper();
        List<ViewCart> viewCarts;
        try {
            viewCarts = Arrays.asList(objectMapper.readValue(viewCartsStr, ViewCart[].class));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseMessage.newErrorInstance(e, "出现异常");
        }

        TbOrder order = new TbOrder();
        order.setUid(uid);
        order.setOrderAmount(orderAmount);
        int oid = orderService.submitOrder(order, viewCarts);
        if (oid != 0) {
            return ResponseMessage.newOkInstance(oid, "提交订单成功！");
        }
        return ResponseMessage.newErrorInstance("提交订单失败！");
    }

    @RequestMapping(value = "/payOrder", method = RequestMethod.POST)
    public ResponseMessage payOrder(TbOrder order) {
        int i = orderService.payOrder(order);
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "付款成功！");
        }
        return ResponseMessage.newErrorInstance("付款失败！");
    }

    @RequestMapping("/getOrderByOid")
    public ResponseMessage getOrderByOid(int oid) {
        TbOrder order = orderService.getOrderByOid(oid);
        if (order == null) {
            return ResponseMessage.newErrorInstance("获取失败");
        }
        return ResponseMessage.newOkInstance(order, "获取成功");
    }

    @RequestMapping("/getShoplistByOid")
    public ResponseMessage getShoplistByOid(int oid) {
        List<ViewShoplist> shoplist = orderService.getShoplistByOid(oid);
        if (shoplist == null) {
            return ResponseMessage.newErrorInstance("获取失败");
        }
        return ResponseMessage.newOkInstance(shoplist, "获取成功");
    }

    @RequestMapping("/getOrdersByUid")
    public ResponseMessage getOrdersByUid(String uid) {
        if (uid == null || "".equals(uid)) {
            return ResponseMessage.newErrorInstance("用户id为空！");
        }
        TbUser user = userService.selectUserByUid(uid);
        if (user == null) {
            return ResponseMessage.newErrorInstance("用户不存在！");
        }
        return ResponseMessage.newOkInstance(orderService.getOrdersByUid(uid), "成功！");
    }

    @RequestMapping(value = "/cancelOrderByOid", method = RequestMethod.POST)
    public ResponseMessage cancelOrderByOid(int oid) {
        int i = orderService.deleteOrderByOid(oid);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("订单不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "取消订单成功！");
        }
        return ResponseMessage.newErrorInstance("取消订单失败！");
    }

    @RequestMapping("/getAllOrders")
    public ResponseMessage getAllOrders() {
        List<ViewAdminOrder> allOrders = orderService.getAllOrders();
        return ResponseMessage.newOkInstance(allOrders);
    }

    @PostMapping("/deliverOrder")
    public ResponseMessage deliverOrder(int oid) {
        int i = orderService.deliverOrder(oid);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("订单不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "发货成功");
        }
        return ResponseMessage.newErrorInstance("发货失败");
    }

    @PostMapping("/receivingOrder")
    public ResponseMessage receivingOrder(int oid) {
        int i = orderService.receivingOrder(oid);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("订单不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "收货成功");
        }
        return ResponseMessage.newErrorInstance("收货失败");
    }

}
