package com.tb.dao;

import com.tb.entity.TbOrder;
import com.tb.vo.ViewAdminOrder;
import com.tb.vo.ViewOrder;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository("tbOrderDao")
@Mapper
public interface TbOrderDao {
    int addOrder(TbOrder order);
    TbOrder selectOrderByOid(int oid);
    int payOrder(TbOrder order);
    List<ViewOrder> selectAllOrderByUid(String uid);
    int deleteOrderByOid(int oid);
    List<ViewAdminOrder> selectAllOrder();
    int deliverOrder(Map<String, Object> map);
    int receivingOrder(Map<String, Object> map);
}
