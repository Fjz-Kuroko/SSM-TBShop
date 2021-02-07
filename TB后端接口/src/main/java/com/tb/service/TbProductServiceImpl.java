package com.tb.service;

import com.tb.dao.TbProductDao;
import com.tb.entity.TbProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("tbProductService")
public class TbProductServiceImpl implements TbProductService{

    @Autowired
    private TbProductDao productDao;

    @Override
    public List<TbProduct> selectAllProducts() {
        return productDao.selectAllProducts();
    }

    @Override
    public TbProduct selectProductByPid(String pid) {
        return productDao.selectProductByPid(pid);
    }

    @Override
    public List<TbProduct> prodlist(Map<String, Object> map) {
        return productDao.prodlist(map);
    }

    @Override
    public int addProduct(TbProduct product) {
        TbProduct selectProductByPid = productDao.selectProductByPid(product.getPid());
        if (selectProductByPid != null) {
            return -1;
        }
        return productDao.addProduct(product);
    }

    @Override
    public int deleteProduct(String pid) {
        TbProduct selectProductByPid = productDao.selectProductByPid(pid);
        if (selectProductByPid == null) {
            return -1;
        }
        return productDao.deleteProduct(pid);
    }

    @Override
    public int updateProduct(TbProduct product) {
        TbProduct selectProductByPid = productDao.selectProductByPid(product.getPid());
        if (selectProductByPid == null) {
            return -1;
        }
        return productDao.updateProduct(product);
    }
}
