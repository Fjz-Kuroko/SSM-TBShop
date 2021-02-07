package com.tb.service;

import com.tb.dao.TbAdminDao;
import com.tb.entity.TbAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("tbAdminService")
public class TbAdminServiceImpl implements TbAdminService {

    @Autowired
    private TbAdminDao adminDao;

    @Override
    public TbAdmin login(TbAdmin admin) {
        return adminDao.login(admin);
    }
}
