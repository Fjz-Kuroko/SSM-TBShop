package com.tb.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 正则验证工具类
 */
public class RegexUtils {

    static final String PHONE_REGEX = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-3,5-9]))\\d{8}$";
    static final String PWD_REGEX = "[\\da-zA-Z]{6,16}";
    static final String NUMBER_REGEX = "^\\d+$";

    /**
     * 判断字符串是否为电话号码
     * @param phone 电话号码字符串
     * @return 是否是电话号码格式
     */
    public static boolean isPhone(String phone) {
        Pattern pattern = Pattern.compile(PHONE_REGEX);
        Matcher matcher = pattern.matcher(phone);
        return matcher.matches();
    }

    /**
     * 判断是否符合密码格式
     * @param pwd 密码字符串
     * @return 是否符合
     */
    public static boolean isQualifiedPwd(String pwd) {
        Pattern pattern = Pattern.compile(PWD_REGEX);
        Matcher matcher = pattern.matcher(pwd);
        return matcher.matches();
    }

    /**
     * 判断金额字符串是否可以转为金额
     * @param price 字符串
     * @return 是否能转
     */
    public static boolean isNumber(String price) {
        if (price == null || "".equals(price)) {
            return false;
        }
        Pattern pattern = Pattern.compile(NUMBER_REGEX);
        Matcher matcher = pattern.matcher(price);
        return matcher.matches();
    }

}
