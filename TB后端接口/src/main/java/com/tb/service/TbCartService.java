package com.tb.service;

import com.tb.entity.TbCart;
import com.tb.vo.ViewCart;

import java.util.List;

public interface TbCartService {
    // 增加购物车商品信息
    int addCart(TbCart cart);
    // 更新购物车商品数量
    int updateCart(TbCart cart);
    // 根据购物车id删除记录
    int deleteCart(int cid);
    // 根据用户id查询所有的购物车记录
    List<ViewCart> selectCartsByUid(String uid);
    // 根据用户id清空购物车
    int clearCart(String uid);
}
