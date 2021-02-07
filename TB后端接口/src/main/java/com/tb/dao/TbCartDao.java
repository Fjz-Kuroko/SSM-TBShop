package com.tb.dao;

import com.tb.entity.TbCart;
import com.tb.vo.ViewCart;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository("tbCartDao")
@Mapper
public interface TbCartDao {
    // 根据购物车id查询
    TbCart selectCartByCid(Integer cid);
    // 根据用户id和商品id查询
    TbCart selectCartByUidAndPid(TbCart cart);
    // 增加数据到购物车表
    int addCart(TbCart cart);
    // 更新购物车，更新数量
    int updateCart(TbCart cart);
    // 根据购物车id删除购物车记录
    int deleteCart(int cid);
    // 根据用户id查询所有购物车信息
    List<ViewCart> selectCartsByUid(String uid);
    // 根据用户id清空购物车
    int clearCart(String uid);
    // 批量删除
    int batchDelete(Map<String, String> map);
}
