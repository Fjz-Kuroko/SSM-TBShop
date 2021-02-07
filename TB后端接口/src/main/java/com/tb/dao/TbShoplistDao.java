package com.tb.dao;

import com.tb.entity.TbShoplist;
import com.tb.vo.ViewShoplist;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("tbShoplistDao")
@Mapper
public interface TbShoplistDao {
    int addShoplist(List<TbShoplist> shoplists);
    List<ViewShoplist> getShoplistByOid(int oid);
    int deleteShoplistByOid(int oid);
}
