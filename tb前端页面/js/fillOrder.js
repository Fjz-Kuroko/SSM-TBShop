// 引入qs库
var qs = Qs;
// 引入自定义baseUrl
var baseUrl = getBaseUrl(); 
// 意思是携带cookie信息,保持session的一致性
axios.defaults.withCredentials = true; 
var app = new Vue({
	el: '#app',
	data: function() {
		return {
			uid: '',
			oid: '',
			myOrder: null,
			shoplist: [],
			addresses:[],
			currentRow: null
		}
	},
	created() {
		this.getOid();
		// this.isLogin();
	},
	methods: {
		getAddresses() {
			let that = this;
			axios({
				method: 'get',
				url: baseUrl + '/address/getAllAddressByUid?uid=' + that.uid
			}).then(function(res) {
				// console.log(res);
				if (res.data.status == '1') {
					that.addresses = res.data.data;
				}
			}, function(err) {
				console.log(err);
			})
		},
		getOrder() {
			let that = this;
			axios({
				method: 'get',
				url: baseUrl + '/order/getOrderByOid?oid=' + that.oid
			}).then(function(res) {
				if (res.data.status == '1') {
					if (!(res.data.data.status == '未付款')) {
						that.$alert('该订单已完成支付，请勿重新进入！', {
							confirmButtonText: '确定',
							callback: action => {
								window.location.href = 'index.html'
							}
						})
					}
					that.myOrder = res.data.data;
				} else {
					that.$alert('订单不存在！', {
						confirmButtonText: '确定',
						callback: action => {
							window.location.href = 'index.html'
						}
					})
				}
			}, function(err) {
				console.log(err)
			})
		},
		getShoplist() {
			let that = this;
			axios({
				method: 'get',
				url: baseUrl + '/order/getShoplistByOid?oid=' + that.oid
			}).then(function(res) {
				if (res.data.status == '1') {
					that.shoplist = res.data.data;
				}
			}, function(err) {
				console.log(err)
			})
		},
		getOid() {
			var url = decodeURI(window.location.href);
			var myoid = url.split("?oid=")[1];
			if (!myoid || myoid == '') {
				this.$alert('订单不存在！', {
					confirmButtonText: '确定',
					callback: action => {
						window.location.href = 'index.html'
					}
				})
			} else {
				this.oid = myoid;
				this.isLogin();
			}
		},
		getCookie(name){
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
			if(arr != null) return unescape(arr[2]); return null;
		},
		isLogin() {
			let that = this;
			var getUid = this.getCookie('uid');
			console.log(getUid);
			if (getUid == null || getUid == '') {
				that.$alert('您暂时还没有登录，请先登录', {
					confirmButtonText: '确定',
					callback: action => {
						window.location.href = 'login.html'
					}
				})
			} else {
				that.uid = getUid;
				that.getAddresses();
				that.getOrder();
				that.getShoplist();
			}
// 			axios({
// 				method: 'post',
// 				url: baseUrl + '/user/getCurUser'
// 			}).then(function(response) {
// 				if (response.data.status == '1') {
// 					that.uid = response.data.data.uid;
// 					that.getAddresses();
// 					that.getOrder();
// 					that.getShoplist();
// 				} else {
// 					that.$alert('您暂时还没有登录，请先登录', {
// 						confirmButtonText: '确定',
// 						callback: action => {
// 							window.location.href = 'login.html'
// 						}
// 					})
// 				}
// 			}, function(err) {
// 				console.log(err);
// 				that.$alert('您暂时还没有登录，请先登录', {
// 					confirmButtonText: '确定',
// 					callback: action => {
// 						window.location.href = 'login.html'
// 					}
// 				})
// 			})
		},
		submitOrder() {
			let that = this;
			if (!this.currentRow) {
				this.$message({
					type: 'info',
					message: '还没有选择收货地址哦'
				});
				return false;
			}
			axios({
				method: 'post',
				url: baseUrl + '/order/payOrder',
				transformRequest: [
					function (data) {
						return qs.stringify(data);
					}
				],
				data: {
					aid: that.currentRow.aid,
					oid: that.oid
				}
			}).then(function(res) {
				if (res.data.status == '1') {
					that.$alert('订单完成，跳转到首页', '提示', {
					  confirmButtonText: '确定',
					  callback: action => {
						window.location.href = 'index.html';
					  }
					});
				} else {
					that.$message.error('付款出错！');
				}
			}, function(err) {
				console.log(err);
			})
		},
		cancelOrder() {
			let that = this;
			this.$confirm('确定取消该订单吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				axios({
					method: 'post',
					url: baseUrl + '/order/cancelOrderByOid',
					transformRequest: [
						function (data) {
							return qs.stringify(data);
						}
					],
					data: {
						oid: that.oid
					}
				}).then(function(res) {
					if (res.data.status == '1') {
						that.$alert('取消订单成功，跳转到首页', '提示', {
						  confirmButtonText: '确定',
						  callback: action => {
							window.location.href = 'index.html';
						  }
						});
					} else {
						that.$message.error(res.data.msg);
					}
				}, function(err) {
					console.log(err);
				})
			}).catch(() => {
				
			})
		},
		toAddress() {
			this.$message.info('跳转到管理地址页面');
			window.location.href = 'personCenter.html';
		},
		handleCurrentChange(val) {
			this.currentRow = val;
		},
		arraySpanMethod({row, column, rowIndex, columnIndex}) {
			let that = this;
			if (columnIndex === 4 || columnIndex === 5) {
				if (rowIndex === 0) {
					return {
						rowspan: that.shoplist.length,
						colspan: 1
					};
				}
			}
		}
	}
})