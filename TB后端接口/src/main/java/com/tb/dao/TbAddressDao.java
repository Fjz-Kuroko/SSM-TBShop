package com.tb.dao;

import com.tb.entity.TbAddress;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("tbAddressDao")
@Mapper
public interface TbAddressDao {
    // 根据用户id查询所有的地址
    List<TbAddress> selectAllAddressByUid(String uid);
    // 根据地址id查询地址
    TbAddress selectAddressByAid(int aid);
    // 增加地址
    int addAddress(TbAddress tbAddress);
    // 根据地址id删除地址
    int deleteAddressByAid(int aid);
    // 更新地址
    int updateAddressByAid(TbAddress address);
}
