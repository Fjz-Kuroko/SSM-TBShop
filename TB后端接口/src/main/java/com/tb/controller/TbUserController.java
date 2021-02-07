package com.tb.controller;

import com.tb.dto.ResponseMessage;
import com.tb.dto.Validate;
import com.tb.dto.ValidateMessage;
import com.tb.entity.TbUser;
import com.tb.service.TbUserService;
import com.tb.utils.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController("tbUserController")
@RequestMapping("/user")
public class TbUserController {

    @Autowired
    private TbUserService userService;

    @PostMapping("/login")
    public ResponseMessage login(TbUser user, HttpSession session) {
        // 验证表单信息
        ValidateMessage validate = Validate.validate(user);
        if ((validate.getCode().equals("401")) || (validate.getCode().equals("402"))) {
            return ResponseMessage.newErrorInstance(validate.getMsg());
        }
        // 把密码进行MD5加密
        user.setUpwd(MD5Util.getMD5(user.getUpwd(), 16));
        TbUser login = userService.login(user);
        if (login != null) {
            session.setAttribute("user", login);
            return ResponseMessage.newOkInstance(null, "登录成功");
        }
        return ResponseMessage.newErrorInstance("登录失败，用户名或密码错误！");
    }

    @RequestMapping("/logout")
    public ResponseMessage logout(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return ResponseMessage.newErrorInstance("当前没有用户登录！");
        } else {
            session.setAttribute("user", null);
            return ResponseMessage.newOkInstance(null, "退出登录成功！");
        }
    }

    @PostMapping("/register")
    public ResponseMessage register(TbUser user) {
        // 验证表单信息
        ValidateMessage validate = Validate.validate(user);
        if (!(validate.getCode().equals("200"))) {
            return ResponseMessage.newErrorInstance(validate.getMsg());
        }
        // 密码进行MD5加密
        user.setUpwd(MD5Util.getMD5(user.getUpwd(), 16));
        // 调用Service层
        int i = userService.register(user);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("用户id已经存在");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "注册成功");
        }
        return ResponseMessage.newErrorInstance("注册失败");
    }

    @RequestMapping("/getCurUser")
    public ResponseMessage getCurUser(HttpSession session) {
        System.out.println("getCurUser -- session = " + session.getId());
        if (session.getAttribute("user") == null) {
            return ResponseMessage.newErrorInstance("暂时没有用户登录！");
        }
        TbUser user = (TbUser) session.getAttribute("user");
        return ResponseMessage.newOkInstance(user, "获取成功");
    }

    @RequestMapping("/getUser")
    public ResponseMessage getUser(String uid) {
        TbUser user = userService.selectUserByUid(uid);
        if (user != null) {
            return ResponseMessage.newOkInstance(user, "查询成功");
        }
        return ResponseMessage.newErrorInstance("用户不存在");
    }

}
