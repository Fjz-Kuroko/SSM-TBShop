package com.tb.dto;

/**
 * 表单验证信息类
 */
public class ValidateMessage {

    private String code;    // 错误码200 301 302...
    private String msg;     // 错误信息

    private ValidateMessage(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public static ValidateMessage newInstance(String code, String msg) {
        return new ValidateMessage(code, msg);
    }

    public String getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    @Override
    public String toString() {
        return "ValidateMessage{" +
                "code='" + code + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
