package com.tb.service;

import com.tb.entity.TbUser;

public interface TbUserService {

    TbUser login(TbUser user);
    int register(TbUser user);
    TbUser selectUserByUid(String uid);

}
