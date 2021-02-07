// 引入qs库
var qs = Qs;
// 引入自定义baseUrl
var baseUrl = getBaseUrl(); 
// 意思是携带cookie信息,保持session的一致性
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
var app = new Vue({
	el: '#app',
	data: {
		captchaSrc: '',
		form: {
			id: "",
			password: "",
			captchaCode: "",
		},
		rules: {
			id: [{ required: true, message: "请输入用户ID", trigger: "blur" }],
			password: [{ required: true, message: "请输入密码", trigger: "blur" }],
			captchaCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
		}
	},
	created() {
		this.isLogin();
		// this.getCaptcha();
	},
	methods: {
		getCookie(name){
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
			if(arr != null) return unescape(arr[2]); return null;
		},
		isLogin: function() {
			var that = this;
			var getUid = this.getCookie('uid');
			// console.log(getUid);
			if (getUid == null || getUid == '') {
			} else {
				that.$notify({
					title: '提示',
					message: '你当前已经登录过，再次登录将会覆盖上一次登录！',
					duration: 0
				});
			}
// 			axios({
// 				method: 'post',
// 				url: baseUrl + '/user/getCurUser'
// 			}).then(function(response) {
// 				if (response.data.status == '1') {
// 					that.$notify({
// 						title: '提示',
// 						message: '你当前已经登录过，再次登录将会覆盖上一次登录！',
// 						duration: 0
// 					});
// 				}
// 			})
		},
		toHome: function() {
			window.location.href = 'index.html'
		},
		getCaptcha: function() {
			axios({
				method: 'post',
				url: baseUrl + '/captcha/image',
				responseType: 'arraybuffer'
			}).then (res => {
				return 'data:image/png;base64,' + btoa(
					new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
				);
			}).then(data => {
				this.captchaSrc = data;
			})
		},
		onSubmit(formName) {
			var that = this;
			that.$refs[formName].validate((valid) => {
				// 表单参数验证
				if (valid) {
					axios({
						method: 'post',
						url: baseUrl + '/user/login',
						transformRequest: [
							function (data) {
								return qs.stringify(data)
							}
						],
						data: {
							uid: that.form.id,
							upwd: that.form.password
						}
					}).then(function(response) {
						if (response.data.status == '1') {
							// sessionStorage.setItem('uid', that.form.id)
							document.cookie = 'uid=' + that.form.id + ';path=/';
							// 登录成功
							window.location.href = 'index.html'
						} else {
							that.$message.error(response.data.msg);
							return false;
						}
					}, function(err) {
						console.log(err);
					})
				} else {
					this.$message.error('用户名或者密码格式不对！');
					return false;
				}
			})
		}
// 		onSubmit(formName) {
// 			var that = this;
// 			axios({
// 				method: 'post',
// 				url: baseUrl + '/captcha/image/check',
// 				transformRequest: [
// 					function (data) {
// 						return qs.stringify(data);
// 					}
// 				],
// 				data: {
// 					checkCode: that.form.captchaCode
// 				}
// 			}).then(function(response) {
// 				if (response.data.status == '0') {
// 					// 验证码不正确
// 					that.$message.error(response.data.msg);
// 					that.getCaptcha();
// 					return false;
// 				} else {
// 					// 验证码正确
// 					that.$refs[formName].validate((valid) => {
// 						// 表单参数验证
// 						if (valid) {
// 							axios({
// 								method: 'post',
// 								url: baseUrl + '/user/login',
// 								transformRequest: [
// 									function (data) {
// 										return qs.stringify(data)
// 									}
// 								],
// 								data: {
// 									uid: that.form.id,
// 									upwd: that.form.password
// 								}
// 							}).then(function(response) {
// 								if (response.data.status == '1') {
// 									// 登录成功
// 									window.location.href = 'index.html'
// 								} else {
// 									that.$message.error(response.data.msg);
// 									return false;
// 								}
// 							}, function(err) {
// 								console.log(err);
// 							})
// 						} else {
// 							this.$message.error('用户名或者密码格式不对！');
// 							return false;
// 						}
// 					})
// 				}
// 			})
// 		}
	}
})