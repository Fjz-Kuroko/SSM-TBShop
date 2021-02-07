package com.tb.dao;

import com.tb.entity.TbProduct;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository("tpProductDao")
@Mapper
public interface TbProductDao {
    // 查询所有商品数据
    List<TbProduct> selectAllProducts();
    // 根据商品id查询单个商品
    TbProduct selectProductByPid(String pid);
    // 根据价格区间、商品名字查找商品
    List<TbProduct> prodlist(Map<String, Object> map);
    // 增加商品
    int addProduct(TbProduct product);
    // 根据商品id删除商品
    int deleteProduct(String pid);
    // 修改商品信息
    int updateProduct(TbProduct product);
}
