// 引入qs库
var qs = Qs;
// 引入自定义baseUrl
var baseUrl = getBaseUrl(); 
// 意思是携带cookie信息,保持session的一致性
axios.defaults.withCredentials = true;
var app = new Vue({
	el: '#app',
	data: {
		form: {
			name: "",
			password: "",
		},
		rules: {
			name: [{ required: true, message: "请输入管理员用户名", trigger: "blur" }],
			password: [{ required: true, message: "请输入密码", trigger: "blur" }],
		}
	},
	created() {

	},
	methods: {
		onSubmit(formName) {
			var that = this;
			that.$refs[formName].validate((valid) => {
				// 表单参数验证
				if (valid) {
					axios({
						method: 'post',
						url: baseUrl + '/admin/login',
						transformRequest: [
							function (data) {
								return qs.stringify(data)
							}
						],
						data: {
							adminName: that.form.name,
							adminPwd: that.form.password
						}
					}).then(function(response) {
						if (response.data.status == '1') {
							// sessionStorage.setItem('admin', that.form.name)
							document.cookie = 'admin=' + that.form.name + ';path=/';
							// 登录成功
							window.location.href = 'admin.html'
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
	}
})