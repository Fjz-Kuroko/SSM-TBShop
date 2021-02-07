package com.tb.dao;

import com.tb.entity.TbAdmin;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository("tbAdminDao")
@Mapper
public interface TbAdminDao {
    // 后台管理员登录
    TbAdmin login(TbAdmin admin);
}
