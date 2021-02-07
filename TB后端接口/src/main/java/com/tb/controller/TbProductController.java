package com.tb.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.tb.dto.ResponseMessage;
import com.tb.dto.Validate;
import com.tb.dto.ValidateMessage;
import com.tb.entity.TbProduct;
import com.tb.service.TbProductService;
import com.tb.utils.RegexUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController("tbProductController")
@RequestMapping("/product")
public class TbProductController {

    @Autowired
    private TbProductService productService;

    @RequestMapping(value = "/prodlist", method = RequestMethod.GET)
    public ResponseMessage prodlist(String pname, String minPrice, String maxPrice, String sortord, int pageNum, int pageSize) {
        //1.通过调用 PageHelper 的静态方法开始获取分页数据
        //指定当前第几页以及每页显示的条数
        PageHelper.startPage(pageNum, pageSize);

        // 为搜索条件设置默认值
        double min = 0;
        double max = Double.MAX_VALUE;
        if (RegexUtils.isNumber(minPrice)) {
            min = Double.parseDouble(minPrice);
        }
        if (RegexUtils.isNumber(maxPrice)) {
            max = Double.parseDouble(maxPrice);
        }

        // 创建map，用于存放查询条件
        Map<String, Object> map = new HashMap<>();
        map.put("pname", pname);
        map.put("minPrice", min);
        map.put("maxPrice", max);
        if ("desc".equals(sortord) || "asc".equals(sortord)) {
            map.put("sortord", sortord);
        }

        // 2.根据条件查询符合的商品信息
        List<TbProduct> prodlist = productService.prodlist(map);

        // 3.获得当前的分页对象
        PageInfo<TbProduct> pageInfo = new PageInfo<>(prodlist);
        return ResponseMessage.newOkInstance(pageInfo);
    }

    @RequestMapping("/list")
    public ResponseMessage list(/*int pageNum, int pageSize*/) {
        // 1.通过调用 PageHelper 的静态方法开始获取分页数据
        // 指定当前第几页以及每页显示的条数
//        PageHelper.startPage(pageNum, pageSize);
        // 2.获得商品数据
        List<TbProduct> products = productService.selectAllProducts();
        // 3.获得当前的分页对象
//        PageInfo<TbProduct> pageInfo = new PageInfo<>(products);
        return ResponseMessage.newOkInstance(products);
    }

    @RequestMapping("/detail")
    public ResponseMessage detail(String pid) {
        if (pid == null || "".equals(pid)) {
            return ResponseMessage.newErrorInstance("商品id不能为空");
        }
        TbProduct product = productService.selectProductByPid(pid);
        return ResponseMessage.newOkInstance(product);
    }

    @RequestMapping("/addProduct")
    public ResponseMessage addProduct(TbProduct product) {
        ValidateMessage validate = Validate.validate(product);
        if (!validate.getCode().equals("200")) {
            return ResponseMessage.newErrorInstance(validate.getMsg());
        }
        int i = productService.addProduct(product);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("商品id已经存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "添加成功！");
        }
        return ResponseMessage.newErrorInstance("添加失败");
    }

    @RequestMapping("/deleteProduct")
    public ResponseMessage deleteProduct(String pid) {
        if (pid == null || "".equals(pid)) {
            return ResponseMessage.newErrorInstance("商品id不能为空！");
        }
        int i = productService.deleteProduct(pid);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("该商品不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "删除成功");
        }
        return ResponseMessage.newErrorInstance("删除失败");
    }

    @RequestMapping("/updateProduct")
    public ResponseMessage updateProduct(TbProduct product) {
        if (product.getPid() == null || "".equals(product.getPid())) {
            return ResponseMessage.newErrorInstance("商品id不能为空！");
        }
        int i = productService.updateProduct(product);
        if (i == -1) {
            return ResponseMessage.newErrorInstance("商品不存在！");
        }
        if (i > 0) {
            return ResponseMessage.newOkInstance(null, "更新成功");
        }
        return ResponseMessage.newErrorInstance("更新失败");
    }

}
