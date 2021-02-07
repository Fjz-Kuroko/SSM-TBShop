package com.tb.service;

import com.tb.entity.TbAddress;

import java.util.List;

public interface TbAddressService {
    List<TbAddress> selectAllAddressByUid(String uid);
    int addAddress(TbAddress address);
    int deleteAddressByAid(int aid);
    int updateAddress(TbAddress address);
}
