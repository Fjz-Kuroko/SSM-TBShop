package com.tb.service;

import com.tb.dao.TbUserDao;
import com.tb.entity.TbUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("tbUserService")
public class TbUserServiceImpl implements TbUserService {

    @Autowired
    private TbUserDao userDao;

    @Override
    public TbUser login(TbUser user) {
        return userDao.login(user);
    }

    @Override
    public int register(TbUser user) {
        if (userDao.selectUserByUid(user.getUid()) != null) {
            return -1;
        }
        return userDao.register(user);
    }

    @Override
    public TbUser selectUserByUid(String uid) {
        return userDao.selectUserByUid(uid);
    }

}
