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
			sumPrice: 0,
			tableData: [],
			multipleSelection: [],
			loading: true,
			uid: ''
		}
	},
	created() {
		this.isLogin()
	},
	methods: {
		getCookie(name){
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
			if(arr != null) return unescape(arr[2]); return null;
		},
		isLogin() {
			let that = this;
			var getUid = this.getCookie('uid');
			// console.log(getUid);
			if (getUid == null || getUid == '') {
				that.$alert('您暂时还没有登录，请先登录', {
					confirmButtonText: '确定',
					callback: action => {
						window.location.href = 'login.html'
					}
				})
			} else {
				that.uid = getUid;
				that.getData();
			}
// 			axios({
// 				method: 'post',
// 				url: baseUrl + '/user/getCurUser'
// 			}).then(function(response) {
// 				if (response.data.status == '1') {
// 					that.uid = response.data.data.uid;
// 					// 如果已经登录成功,那么获取相应的数据
// 					that.getData();
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
		getData() {
			let that = this;
			axios({
				method: 'get',
				url: baseUrl + '/cart/getCarts?uid=' + that.uid,
			}).then(function(res) {
				that.tableData = res.data.data;
				that.loading = false;
			}, function(err) {
				console.log(err);
			})
		},
		changeNum(currentRow) {
			// console.log(currentRow);
			let that = this;
			// 更新表格数据
			var sum = Number(currentRow.price) * Number(currentRow.num);
			sum = Math.floor(sum * 100) / 100;
			currentRow.summary = sum;
			// 增加请求
			axios({
				method: 'post',
				url: baseUrl + '/cart/updateCart',
				transformRequest: [
					function (data) {
						return qs.stringify(data);
					}
				],
				data: {
					cid: currentRow.cid,
					num: currentRow.num
				}
			}).then(function(res) {
				if (res.data.status == '0') {
					that.$message({
						message: '更新购物车时发生错误',
						type: 'error'
					})
				}
			}, function(err) {
				console.log(err);
			})
		},
		deleteCur(currentRow, index) {
			let that = this;
			console.log('删除cid为' + currentRow.cid + '的购物车记录');
			this.$confirm('确定从购物车删除此商品吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				axios({
					method: 'get',
					url: baseUrl + '/cart/deleteCart?cid=' + currentRow.cid,
				}).then(function(res) {
					if (res.data.status == '1') {
						that.tableData.splice(index, 1);
						that.$message({
							type: 'success',
							message: res.data.msg
						});
					} else {
						that.$message({
							type: 'error',
							message: res.data.msg
						});
					}
				}, function(err) {
					console.log(err);
					that.$message({
						type: 'error',
						message: '删除出错'
					});
				})
			}).catch(() => {
				that.$message({
					type: 'info',
					message: '已取消删除'
				});
			})
		},
		clearCart() {
			let that = this;
			this.$confirm('此操作无法恢复,确定清空购物车吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				axios({
					method: 'post',
					url: baseUrl + '/cart/clearCart',
					transformRequest: [
						function (data) {
							return qs.stringify(data);
						}
					],
					data: {
						uid: that.uid
					}
				}).then(function(res) {
					if (res.data.status == '1') {
						that.tableData = [];
						// 请求后再显示
						that.$message({
							type: 'success',
							message: res.data.msg
						});
					} else {
						that.$message({
							type: 'error',
							message: res.data.msg
						});
					}
				}, function(err) {
					console.log(err);
					that.$message({
						type: 'error',
						message: '清空购物车出错'
					});
				})
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消清空购物车'
				});
			});
		},
		toggleSelection(rows) {
			if (rows) {
			  rows.forEach(row => {
				this.$refs.multipleTable.toggleRowSelection(row);
			  });
			} else {
			  this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
			var sum = 0;
			this.multipleSelection.filter( (item, i) => {
				sum = sum + Number(item.summary);
			})
			this.sumPrice = sum;
		},
		submitCart() {
			let that = this;
			// 如果没有选择任何商品,那么弹出提示
			if (!this.multipleSelection || this.multipleSelection.length <= 0) {
				this.$message({
					type: 'info',
					message: '当前没有选择任何商品哦'
				});
				return false;
			}
			// 进行逻辑处理
			this.$message({
				type: 'info',
				message: '应该结算跳转到订单页面了'
			});
			axios({
				method: 'post',
				url: baseUrl + '/order/submitOrder',
				transformRequest: [
					function (data) {
						return qs.stringify(data);
					}
				],
				data: {
					viewCartsStr: JSON.stringify(that.multipleSelection),
					uid: that.uid,
					orderAmount: that.sumPrice
				}
			}).then(function(res) {
				console.log('res', res);
				if (res.data.status == '1') {
					// 提交成功
					var url = 'fillOrder.html?oid=' + res.data.data;
					window.location.href = url;
				} else {
					that.$message({
						type: 'error',
						message: res.data.msg
					});
				}
			}, function(err) {
				console.log('err', err)
			})
		}
	}
})