package com.tb.service;

import com.tb.dao.TbCartDao;
import com.tb.dao.TbOrderDao;
import com.tb.dao.TbShoplistDao;
import com.tb.entity.TbOrder;
import com.tb.entity.TbShoplist;
import com.tb.vo.ViewAdminOrder;
import com.tb.vo.ViewCart;
import com.tb.vo.ViewOrder;
import com.tb.vo.ViewShoplist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service("tbOrderService")
public class TbOrderServiceImpl implements TbOrderService {

    @Autowired
    private TbOrderDao orderDao;
    @Autowired
    private TbShoplistDao shoplistDao;
    @Autowired
    private TbCartDao cartDao;

    /**
     * 提交订单，同时应该删除购物车相应的记录
     * @param order TbOrder对象，存放着订单相应信息
     * @return i
     */
    @Override
    public int submitOrder(TbOrder order, List<ViewCart> viewCarts) {
        order.setOrderTime(new Timestamp(new Date().getTime()));
        order.setStatus("未付款");
        int addOrder = orderDao.addOrder(order);

        List<TbShoplist> shoplists = new ArrayList<>();
        StringBuilder cartIdStr = new StringBuilder();
        for (ViewCart viewCart : viewCarts) {
            TbShoplist shoplist = new TbShoplist();
            shoplist.setOid(order.getOid());
            shoplist.setUid(order.getUid());
            shoplist.setPid(viewCart.getPid());
            shoplist.setPnum(viewCart.getNum());

            shoplists.add(shoplist);
            cartIdStr.append(viewCart.getCid()).append(",");
        }
        int addShoplist = shoplistDao.addShoplist(shoplists);

        Map<String, String> map = new HashMap<>();
        map.put("cartIds", cartIdStr.substring(0, cartIdStr.length() - 1));
        if (addOrder > 0 || addShoplist > 0) {
            cartDao.batchDelete(map);
            return order.getOid();
        }
        return 0;
    }

    @Override
    public TbOrder getOrderByOid(int oid) {
        return orderDao.selectOrderByOid(oid);
    }

    @Override
    public List<ViewShoplist> getShoplistByOid(int oid) {
        TbOrder order = orderDao.selectOrderByOid(oid);
        if (order == null) {
            return null;
        }
        return shoplistDao.getShoplistByOid(oid);
    }

    @Override
    public int payOrder(TbOrder order) {
        order.setOrderTime(new Timestamp(new Date().getTime()));
        order.setStatus("已付款");
        return orderDao.payOrder(order);
    }

    @Override
    public List<ViewOrder> getOrdersByUid(String uid) {
        return orderDao.selectAllOrderByUid(uid);
    }

    @Override
    public int deleteOrderByOid(int oid) {
        TbOrder order = orderDao.selectOrderByOid(oid);
        if (order == null) {
            return -1;
        }
        shoplistDao.deleteShoplistByOid(oid);
        return orderDao.deleteOrderByOid(oid);
    }

    @Override
    public List<ViewAdminOrder> getAllOrders() {
        return orderDao.selectAllOrder();
    }

    @Override
    public int deliverOrder(int oid) {
        TbOrder order = orderDao.selectOrderByOid(oid);
        if (order == null) {
            return -1;
        }
        Map<String, Object> map = new HashMap<>();
        map.put("oid", oid);
        map.put("status", "已发货");
        map.put("deliveryTime", new Timestamp(new Date().getTime()));
        return orderDao.deliverOrder(map);
    }

    @Override
    public int receivingOrder(int oid) {
        TbOrder order = orderDao.selectOrderByOid(oid);
        if (order == null) {
            return -1;
        }
        Map<String, Object> map = new HashMap<>();
        map.put("oid", oid);
        map.put("status", "已收货");
        map.put("receivingTime", new Timestamp(new Date().getTime()));
        return orderDao.receivingOrder(map);
    }
}
