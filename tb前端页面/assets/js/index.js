var baseUrl = 'http://10.252.76.125:8081';
var qs = Qs;
var main = new Vue({
    el:"#main",
    data: {
        message:'',
        isActive:[1,0,0,0,0,0,0],
        order:[],
        commodity:[,,,,,,,,,],
        commodity2:[,,,,,,,,,],
        arr:[],
        page:"1",
    },
    mounted: function () {
        this.getData();
        this.getOrder();
        this.showActive(0)
    },
    created() {
        this.isLogin();
    },
    methods: {
        getcommodity: function () {
        },
        getOrder: function () {
            var that = this;
            axios.get(baseUrl + "/order/getAllOrders")
                .then(function (response) {
                    that.order = response.data.data;
                    console.log(that.order)
                }, function (err) {
                    console.log(err);
                })
        },
        send: function () {
            var that = this;
            var id = that.commodity[0];
            var name = that.commodity[2];
            var kind = that.commodity[1];
            var description = that.commodity[3];
            var price = that.commodity[4];
            var num = that.commodity[5];
            var imgb = that.commodity[6];
            const imgm = that.commodity[7];
            var imgs = that.commodity[8];
            axios({
                method: 'post',
                url: baseUrl + '/product/addProduct',
                transformRequest: [
                    function (data) {
                        return qs.stringify(data);
                    }
                ],
                data: {
                    pid: id,
                    pname: name,
                    pclass: kind,
                    price: price,
                    description: description,
                    saleNum: num,
                    imgB: imgb,
                    imgM: imgm,
                    imgS: imgs
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.status == '1') {
                    alert('添加成功');
                } else {
                    alert('添加失败');
                }
            }, function (err) {
                console.log(err);
            })
        },
        getData: function () {
            let that = this;
            axios({
                method: 'get',
                url: 'http://10.252.76.125:8081/product/list',
            }).then(function (res) {
                if (res.data.status == '1') {
                    console.log(res.data.data);
                    that.arr = res.data.data;
                }
            }, function (err) {
                console.log(err);
            })
        },
        modifyCommodity: function (i) {
            var than = this
            this.showActive(6)
            axios({
                method: 'get',
                url: baseUrl + '/product/detail?pid=' + i
            }).then(function (res) {
                var save = res.data.data
                than.$set(than.commodity2, 0, save.pid)
                than.$set(than.commodity2, 1, save.pclass)
                than.$set(than.commodity2, 2, save.pname)
                than.$set(than.commodity2, 4, save.price)
                than.$set(than.commodity2, 5, save.saleNum)
                than.$set(than.commodity2, 6, save.imgB)
                than.$set(than.commodity2, 7, save.imgM)
                than.$set(than.commodity2, 8, save.imgS)
                than.$set(than.commodity2, 3, save.description)
            }, function (err) {
                console.log(err);
            })
        },
        send2: function () {
            var that = this;
            var id = that.commodity2[0];
            var name = that.commodity2[2];
            var kind = that.commodity2[1];
            var description = that.commodity2[3];
            var price = that.commodity2[4];
            var num = that.commodity2[5];
            var imgb = that.commodity2[6];
            const imgm = that.commodity2[7];
            var imgs = that.commodity2[8];
            axios({
                method: 'post',
                url: baseUrl + '/product/updateProduct',
                transformRequest: [
                    function (data) {
                        return qs.stringify(data);
                    }
                ],
                data: {
                    pid: id,
                    pname: name,
                    pclass: kind,
                    price: price,
                    description: description,
                    saleNum: num,
                    imgB: imgb,
                    imgM: imgm,
                    imgS: imgs
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.status == '1') {
                    alert('更新成功');
                } else {
                    alert('更新失败');
                }
            }, function (err) {
                console.log(err);
            })
            this.showActive(0)
        },
        delectCommodity: function (i) {
            axios.get(baseUrl + "/product/deleteProduct?pid=" + i)
                .then(function (response) {
                    alert('删除成功！')
                }, function (err) {
                    var reason = err
                    alert('删除失败,' + reason)
                })
        },
        showActive: function (i) {
            var than = this
            for (j = 0; j < 7; j++) {
                if (j == i) this.$set(than.isActive, j, 1);
                else this.$set(than.isActive, j, 0);
            }
        },
        fahuo: function (i) {
            axios({
                method: 'post',
                url: baseUrl + '/order/deliverOrder',
                transformRequest: [
                    function (data) {
                        return qs.stringify(data);
                    }
                ],
                data: {
                    oid: i,
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.status == '1') {
                    alert('发货成功');
                } else {
                    alert('发货失败');
                }
            }, function (err) {
                console.log(err);
            })
        },
        getCookie(name){
            var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
            if(arr != null) return unescape(arr[2]); return null;
        },
        isLogin() {
            var getAdmin = this.getCookie('admin');
            if (getAdmin == null || getAdmin == '') {
                alter('您暂时还没有登录，请先登录');
                window.location.href = 'adminLogin.html';
            }
        },
        logout:function (){
            document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            // location.reload();
            var getAdmin = this.getCookie('admin');
            if (getAdmin == null || getAdmin == '') {
                window.location.href = 'adminLogin.html';
            } else {
                alter('退出失败');
            }
        },
    }
})

