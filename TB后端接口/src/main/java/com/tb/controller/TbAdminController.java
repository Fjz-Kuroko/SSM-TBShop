package com.tb.controller;

import com.tb.dto.ResponseMessage;
import com.tb.dto.Validate;
import com.tb.dto.ValidateMessage;
import com.tb.entity.TbAdmin;
import com.tb.service.TbAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController("/tbAdminController")
@RequestMapping("/admin")
public class TbAdminController {

    @Autowired
    private TbAdminService adminService;

    @PostMapping("/login")
    public ResponseMessage login(TbAdmin admin, HttpSession session) {
        ValidateMessage validate = Validate.validate(admin);
        if (!(validate.getCode().equals("200"))) {
            return ResponseMessage.newErrorInstance(validate.getMsg());
        }
        TbAdmin login = adminService.login(admin);
        if (login != null) {
            session.setAttribute("admin", login);
            return ResponseMessage.newOkInstance(null, "登录成功");
        }
        return ResponseMessage.newErrorInstance("登录失败，用户名或密码错误！");
    }

    @RequestMapping("/logout")
    public ResponseMessage logout(HttpSession session) {
        if (session.getAttribute("admin") == null) {
            return ResponseMessage.newErrorInstance("当前没有用户登录！");
        } else {
            session.setAttribute("admin", null);
            return ResponseMessage.newOkInstance(null, "退出登录成功！");
        }
    }

}
