package com.tb.service;

import com.tb.dao.TbCartDao;
import com.tb.dao.TbProductDao;
import com.tb.dao.TbUserDao;
import com.tb.entity.TbCart;
import com.tb.vo.ViewCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("tbCartService")
public class TbCartServiceImpl implements TbCartService {

    @Autowired
    private TbCartDao cartDao;
    @Autowired
    private TbUserDao userDao;
    @Autowired
    private TbProductDao productDao;

    @Override
    public int addCart(TbCart cart) {
        if (userDao.selectUserByUid(cart.getUid()) == null) {
            return -1;
        }
        if (productDao.selectProductByPid(cart.getPid()) == null) {
            return -2;
        }
        // 查询购物车是否存放了该用户所选商品
        TbCart tbCart = cartDao.selectCartByUidAndPid(cart);
        // 如果存在，那把购物车记录的商品数量加一就好
        if (tbCart != null) {
            tbCart.setNum(tbCart.getNum() + cart.getNum());
            return cartDao.updateCart(tbCart);
        }
        // 如果不存在那就新增
        cart.setNum(cart.getNum());
        return cartDao.addCart(cart);
    }

    @Override
    public int updateCart(TbCart cart) {
        if (cartDao.selectCartByCid(cart.getCid()) == null) {
            return -1;
        }
        return cartDao.updateCart(cart);
    }

    @Override
    public int deleteCart(int cid) {
        return cartDao.deleteCart(cid);
    }

    @Override
    public List<ViewCart> selectCartsByUid(String uid) {
        List<ViewCart> viewCarts = cartDao.selectCartsByUid(uid);
        for (ViewCart viewCart : viewCarts) {
            viewCart.setSummary(viewCart.getNum() * viewCart.getPrice());
        }
        return viewCarts;
    }

    @Override
    public int clearCart(String uid) {
        return cartDao.clearCart(uid);
    }
}
