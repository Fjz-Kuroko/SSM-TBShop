package com.tb.utils;

import sun.misc.BASE64Encoder;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Util {

    /**
     * MD5加密工具函数
     * @param pwd 需要加密的字符串
     * @param bit 加密的类型 （16,32,64）
     * @return 加密后的字符串
     */
    public static String getMD5(String pwd, Integer bit) {
        String md5 = "";
        try {
            MessageDigest md = MessageDigest.getInstance("md5");
            if (bit == 64) {
                BASE64Encoder bw = new BASE64Encoder();
                md5 = bw.encode(md.digest(pwd.getBytes(StandardCharsets.UTF_8)));
            } else {
                // 计算MD5函数
                md.update(pwd.getBytes());
                byte[] b = md.digest();
                int i;
                StringBuilder sb = new StringBuilder("");
                for (byte value : b) {
                    i = value;
                    if (i < 0) {
                        i += 256;
                    }
                    if (i < 16) {
                        sb.append("0");
                    }
                    sb.append(Integer.toHexString(i));
                }
                md5 = sb.toString();
                if (bit == 16) {
                    // 截取32位md5为16位
                    md5 = md5.substring(8, 24).toString();
                    return md5;
                }
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            System.out.println("md5加密抛出异常");
        }
        return md5;
    }

}
