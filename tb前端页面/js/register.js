// 引入qs库
var qs = Qs;
// 引入自定义baseUrl
var baseUrl = getBaseUrl(); 
// 意思是携带cookie信息,保持session的一致性
axios.defaults.withCredentials = true; 
var app = new Vue({
	el: '#app',
	data: {
		captchaSrc: '',
		form: {
			id: '',
			name: '',
			password: '',
			phone: '',
			gender: '男',
			captchaCode: '',
		},
		rules: {
			id: [{ required: true, message: "请输入用户ID", trigger: "blur" }],
			name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
			password: [{ required: true, message: "请输入密码", trigger: "blur" }],
			phone: [
				{ required: true, message: "请输入的手机号码", trigger: "blur" }
			],
			captchaCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
		}
	},
	created() {
		// this.getCaptcha();
	},
	methods: {
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
			let that = this;
			// 验证码正确
			that.$refs[formName].validate((valid) => {
				if (valid) {
					axios({
						method: 'post',
						url: baseUrl + '/user/register',
						transformRequest: [
							function(data) {
								return qs.stringify(data);
							}
						],
						data: {
							uid: that.form.id,
							uname: that.form.name,
							upwd: that.form.password,
							phone: that.form.phone,
							gender: that.form.gender
						}
					}).then(function(response) {
						if (response.data.status == '1') {
							// 注册成功
							window.location.href = 'login.html'
						} else {
							// 注册失败
							that.$message.error(response.data.msg);
							// that.getCaptcha();
							return false;
						}
					}, function(err) {
						console.log(err);
					})
				} else {
					that.$message.error("表单格式不正确！");
					that.getCaptcha();
					return false;
				}
			})
		},
// 		onSubmit(formName) {
// 			var that = this;
// 			axios({
// 				method: 'post',
// 				url: baseUrl + '/captcha/image/check',
// 				transformRequest: [
// 					function(data) {
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
// 						if (valid) {
// 							axios({
// 								method: 'post',
// 								url: baseUrl + '/user/register',
// 								transformRequest: [
// 									function(data) {
// 										return qs.stringify(data);
// 									}
// 								],
// 								data: {
// 									uid: that.form.id,
// 									uname: that.form.name,
// 									upwd: that.form.password,
// 									phone: that.form.phone,
// 									gender: that.form.gender
// 								}
// 							}).then(function(response) {
// 								if (response.data.status == '1') {
// 									// 注册成功
// 									window.location.href = 'login.html'
// 								} else {
// 									// 注册失败
// 									that.$message.error(response.data.msg);
// 									that.getCaptcha();
// 									return false;
// 								}
// 							}, function(err) {
// 								console.log(err);
// 							})
// 						} else {
// 							that.$message.error("表单格式不正确！");
// 							that.getCaptcha();
// 							return false;
// 						}
// 					})
// 				}
// 			})
// 		}
	}
})