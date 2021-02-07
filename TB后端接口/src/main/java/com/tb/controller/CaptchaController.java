package com.tb.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.tb.dto.Captcha;
import com.tb.dto.ResponseMessage;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/captcha")
public class CaptchaController {

    /**
     * 获取验证码和图片信息接口
     * @param session 会话
     * @param response response
     * @return 验证码信息
     */
    @RequestMapping("/image")
    public String imageCode(HttpSession session, HttpServletResponse response) {
        System.out.println("imageCode -- session = " + session.getId());
        Map<String, Object> map = Captcha.getImageCode(90, 37);
        // session 存入验证码和时间
        session.setAttribute("captchaKey", map.get("code").toString().toLowerCase());
        session.setAttribute("captchaTimeKey", new Date().getTime());
        System.out.println("code = " + map.get("code").toString().toLowerCase());
        // response
        // 禁用缓存
        response.setDateHeader("Expires", 0);
        response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        response.addHeader("Cache-Control", "post-check=0, pre-check=0");
        response.setHeader("Pragma", "no-cache");
        // 这里要指定响应的类型
        response.setContentType("image/jpeg");
        OutputStream outputStream = null;
        try {
            outputStream = response.getOutputStream();
            ImageIO.write((BufferedImage) map.get("image"), "jpg", outputStream);
        } catch (IOException e) {
            System.out.println("CaptchaController.imageCode:图片验证码输出流出现异常：" + e.getMessage());
            return "";
        } finally {
            if (outputStream != null) {
                try {
                    outputStream.flush();
                    outputStream.close();
                } catch (IOException e) {
                    System.out.println("CaptchaController.imageCode:图片验证码输出流关闭异常：" + e.getMessage());
                }
            }
        }
        return null;
    }

    /**
     * 验证验证码是否正确
     * @param checkCode 前端传过来的验证码
     * @param session 会话
     * @return 验证码是否正确
     */
    @PostMapping("/image/check")
    public ResponseMessage checkCode(@RequestParam("checkCode") String checkCode, HttpSession session) {
        // 获取验证码信息
        Object captchaCode = session.getAttribute("captchaKey");
        // 获取验证码时间
        Object captchaTime = session.getAttribute("captchaTimeKey");
        System.out.println("checkCode -- session = " + session.getId());
        if (captchaCode == null || captchaTime == null) {
            return ResponseMessage.newErrorInstance("验证码已经失效，请重新获取！");
        }
        String captcha = captchaCode.toString();
        long createTime = Long.parseLong(captchaTime.toString());
        if (!captcha.equals(checkCode.toLowerCase())) {
            return ResponseMessage.newErrorInstance("验证码错误！");
        }
        Date now = new Date();
        if ((now.getTime() - createTime) > 5 * 60 * 1000) {
            return ResponseMessage.newErrorInstance("验证码已过期！");
        }
        return ResponseMessage.newOkInstance(null, "验证码正确");
    }

}
