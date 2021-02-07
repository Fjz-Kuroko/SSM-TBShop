package com.tb.service;

import com.tb.entity.TbOrder;
import com.tb.vo.ViewAdminOrder;
import com.tb.vo.ViewCart;
import com.tb.vo.ViewOrder;
import com.tb.vo.ViewShoplist;

import java.util.List;
import java.util.Map;

public interface TbOrderService {

    int submitOrder(TbOrder order, List<ViewCart> viewCarts);
    TbOrder getOrderByOid(int oid);
    List<ViewShoplist> getShoplistByOid(int oid);
    int payOrder(TbOrder order);
    List<ViewOrder> getOrdersByUid(String uid);
    int deleteOrderByOid(int oid);
    List<ViewAdminOrder> getAllOrders();
    int deliverOrder(int oid);
    int receivingOrder(int oid);

}
