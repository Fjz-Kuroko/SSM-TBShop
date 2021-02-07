package com.tb.controller;

import com.tb.dto.ResponseMessage;
import com.tb.dto.Validate;
import com.tb.dto.ValidateMessage;
import com.tb.entity.TbAddress;
import com.tb.service.TbAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("tbAddressController")
@RequestMapping("/address")
public class TbAddressController {

    @Autowired
    private TbAddressService addressService;

    @RequestMapping("/getAllAddressByUid")
    public ResponseMessage selectAllAddressByUid(String uid) {
        if (uid == null || "".equals(uid)) {
            return ResponseMessage.newErrorInstance("用户id不能为空");
        }
        List<TbAddress> addresses = addressService.selectAllAddressByUid(uid);
        return ResponseMessage.newOkInstance(addresses);
    }

    @RequestMapping("/addAddress")
    public ResponseMessage addAddress(TbAddress address) {
        ValidateMessage validate = Validate.validate(address);
        if (!(validate.getCode().equals("200"))) {
            return ResponseMessage.newErrorInstance(validate.getMsg());
        }
        int i = addressService.addAddress(address);
        if (i > 0) {
            return ResponseMessage.newOkInstance(address, "添加成功！");
        }
        return ResponseMessage.newErrorInstance("添加失败");
    }

    @RequestMapping("/deleteAddressByAid")
    public ResponseMessage deleteAddressByAid(int aid) {
        int i = addressService.deleteAddressByAid(aid);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("该地址id不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "删除成功！");
        }
        return ResponseMessage.newErrorInstance("删除失败！");
    }

    @PostMapping("/updateAddress")
    public ResponseMessage updateAddress(TbAddress address) {
        if (address.getAddress() == null || "".equals(address.getAddress())) {
            return ResponseMessage.newErrorInstance("地址不能为空！");
        }
        int i = addressService.updateAddress(address);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("该地址不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "更新成功！");
        }
        return ResponseMessage.newErrorInstance("更新失败！");
    }

}
