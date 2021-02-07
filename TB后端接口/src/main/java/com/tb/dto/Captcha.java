package com.tb.dto;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * Captcha
 * 图形验证码
 */
public class Captcha {

    private static final char[] MAP_TABLE = {
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    };
    private static final int CHAR_NUM = 4; // 显示的字符数目
    private static final int DISTURB_LINES_NUM = 120; // 干扰线数目

    /**
     * 生成图片验证码相关信息
     * @param width 宽度
     * @param height 高度
     * @return 返回带有验证码信息的map（包括图片以及验证码）
     */
    public static Map<String, Object> getImageCode(int width, int height) {
        if (width <= 0) {
            width = 60;
        }
        if (height <= 0) {
            height = 20;
        }
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        // 获取图形上下文
        Graphics g = image.getGraphics();
        Random random = new Random();
        g.setColor(getRandomColor(200, 250));
        g.fillRect(0, 0, width, height);
        // 设字体
        g.setFont(new Font("Times New Roman", Font.PLAIN, 18));
        // 随机生成干扰线
        g.setColor(getRandomColor(160, 200));
        for (int i = 0; i < DISTURB_LINES_NUM; i++) {
            int x = random.nextInt(width);
            int y = random.nextInt(height);
            int xl = random.nextInt(12);
            int yl = random.nextInt(12);
            g.drawLine(x, y, x + xl, yl);
        }
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < CHAR_NUM; i++) {
            // 随机获取一个字母或者数字，拼接
            builder.append(MAP_TABLE[(int) (MAP_TABLE.length * Math.random())]);
            // 将验证码显示到图像中
            // 设置颜色
            g.setColor(new Color(20 + random.nextInt(110), 20 + random.nextInt(110), 20 + random.nextInt(110)));
            String s = builder.substring(i, i + 1);
            g.drawString(s, 13 * i + 20, 25);
        }
        g.dispose();
        Map<String, Object> map = new HashMap<>();
        map.put("image", image);
        map.put("code", builder.toString());
        return map;
    }

    /**
     * 给定范围获取随机颜色
     * @param fc
     * @param bc
     * @return 返回随机颜色
     */
    private static Color getRandomColor(int fc, int bc) {
        Random random = new Random();
        if (fc > 255) {
            fc = 255;
        }
        if (bc > 255) {
            bc = 255;
        }
        int r = fc + random.nextInt(bc - fc);
        int g = fc + random.nextInt(bc - fc);
        int b = fc + random.nextInt(bc - fc);
        return new Color(r, g, b);
    }

}
