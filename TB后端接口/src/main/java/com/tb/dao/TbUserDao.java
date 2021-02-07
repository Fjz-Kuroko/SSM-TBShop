package com.tb.dao;

import com.tb.entity.TbUser;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository("tbUserDao")
@Mapper
public interface TbUserDao {
    // 用户登录
    TbUser login(TbUser user);
    // 用户注册
    int register(TbUser user);
    // 根据用户id查询用户信息
    TbUser selectUserByUid(String uid);
}
