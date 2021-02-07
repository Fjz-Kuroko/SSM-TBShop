package com.tb.service;

import com.tb.dao.TbAddressDao;
import com.tb.entity.TbAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("tbAddressService")
public class TbAddressServiceImpl implements TbAddressService {

    @Autowired
    private TbAddressDao addressDao;

    @Override
    public List<TbAddress> selectAllAddressByUid(String uid) {
        return addressDao.selectAllAddressByUid(uid);
    }

    @Override
    public int addAddress(TbAddress address) {
        return addressDao.addAddress(address);
    }

    @Override
    public int deleteAddressByAid(int aid) {
        TbAddress address = addressDao.selectAddressByAid(aid);
        if (address == null) {
            return -1;
        }
        return addressDao.deleteAddressByAid(aid);
    }

    @Override
    public int updateAddress(TbAddress address) {
        TbAddress addressByAid = addressDao.selectAddressByAid(address.getAid());
        if (addressByAid == null) {
            return -1;
        }
        return addressDao.updateAddressByAid(address);
    }

}
