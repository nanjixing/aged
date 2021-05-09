<template>
	<view>
		<view class="content">
			<image class="logo" src="/static/logo.png"></image>
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>

		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">电话:</view>
					<input class="uni-input" type="number" name="phone" maxlength="11" placeholder="请输入您的手机号"
						v-model="phoneNumber" number />
				</view>
				<!-- 	<view class="uni-form-item uni-column">
					<view class="title">验证码:</view>
					<input class="uni-input" name="vercode" placeholder="请输入您的验证码" /><button
						@click="vercode(phoneNumber)">获取验证码</button>
				</view> -->
				<view class="uni-form-item uni-column">
					<view class="title"> 密码:</view>
					<input class="uni-input" type="password" name="phonepass" placeholder="请输入您的密码" v-model="phonePass"
						number />
				</view>
				<view class="button">
					<button type="primary" form-type="submit">登录</button>
				</view>
			</form>
			<!-- <view class="button">
				<button  form-type="submit" style="margin-top: 20rpx;">密码登陆</button>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎使用',
				phoneNumber: '',
				phonePass: '',
				code: 'fail',
				urlHeader: 'http://391661q0s0.wicp.vip/test1_war_exploded/test/',
				tempPhone: ''
			}
		},
		onLoad() {
			// // 验证登录状态
			// this.tempPhone = uni.getStorageSync('userPhone');
			// if (this.tempPhone != '') {
			// 	//跳转到用户信息界面
			// 	uni.navigateTo({
			// 		url: '/pages/user/user?toUserPhone=' + this.tempPhone
			// 	});

			// }
		},

		methods: {
			// //表单提交,验证码
			// formSubmit: function(e) {
			// 	var formdata = JSON.stringify(e.detail.value);
			// 	console.log('form发生了submit事件，携带数据为：' + formdata);

			// 	uni.request({
			// 		url: this.urlHeader + 'cuLogin',
			// 		data: {
			// 			formdata: formdata
			// 		},
			// 		success(res) {
			// 			console.log(res);
			// 			if (res.data.user_login_success == 'success') {
			// 				//登录成功
			// 				console.log("登陆成功" + JSON.parse(formdata).phone);

			// 				setTimeout(() => {
			// 					//将用户数据写入到本地缓存当中
			// 					uni.setStorageSync('userPhone',JSON.parse(formdata).phone);
			// 				}, 200);
			// 				//跳转到用户信息界面
			// 				uni.switchTab({
			// 					url: '/pages/user/user',
			// 				});

			// 			} else {
			// 				//登录失败
			// 				uni.showModal({
			// 					content: '请检查验证码和手机号是否正确或重新获取验证码',
			// 					showCancel: true
			// 				});
			// 			}
			// 		}
			// 	})

			// 	// }



			// },
			//表单提交账户密码
			async formSubmit(e) {
				var formdata = JSON.stringify(e.detail.value);
				console.log('form发生了submit事件，携带数据为：' + formdata);

				
				uni.request({
					url: this.urlHeader + 'uLogin',
					data: {
						formdata: formdata
					},
					success(res) {
						console.log(res);
						if (res.data.user_login_success == 'success') {
							//登录成功
							console.log("登陆成功" + JSON.parse(formdata).phone);


							//将用户数据写入到本地缓存当中
							uni.setStorageSync('userPhone', JSON.parse(formdata).phone);
							console.log("存储成功 " + JSON.parse(formdata).phone)

							//跳转到用户信息界面
							uni.switchTab({
								url: '/pages/user/user',
							});

						} else {
							//登录失败
							uni.showModal({
								content: '请检查手机号和密码是否正确',
								showCancel: true
							});
						}
					}
				})

				// }

			},
			formReset: function(e) {
				console.log('清空数据')
			},
			//获取验证码
			vercode: function(pn) {
				if (pn == '') {
					// 前台弹窗提示
					uni.showModal({
						content: '电话号码不能为空',
						showCancel: true
					});

				} else if (pn.length < 11) {
					// 电话号码长度不对
					uni.showModal({
						content: '请检查电话号码的长度',
						showCancel: true
					});
				} else {
					// 发送请求获取验证码
					uni.request({
						url: this.urlHeader + 'gencode',
						data: {
							phone: pn
						},
						success(res) {
							console.log(res);
							console.log(pn + '---' + res.data.user_phone_code + '---' + res.data.user_is_null);

							if (res.data.user_is_null == null && res.data.user_phone_code != '') {
								this.phoneNumber = pn;
								this.code = res.data.user_phone_code;
								uni.showModal({
									content: '验证码发送成功',
									showCancel: true
								});
							} else {
								uni.showModal({
									content: '请检查电话号码是否已经注册',
									showCancel: true
								});
							}

						}
					})


				}

			}
			// 向服务器发送请求获取code


		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}


	.uni-padding-wrap {
		/* width:690rpx; */
		padding: 0 30rpx;
	}

	.uni-common-mt {
		margin-top: 30rpx;
	}

	.uni-form-item .title {
		padding: 20rpx 0;
	}

	/* 表单 */
	.uni-form-item {
		display: flex;
		width: 100%;
		padding: 10rpx 0;
	}

	.uni-form-item .title {
		padding: 10rpx 25rpx;
	}

	.uni-label {
		width: 210rpx;
		word-wrap: break-word;
		word-break: break-all;
		text-indent: 20rpx;
	}

	.uni-input {
		height: 60rpx;
		padding: 15rpx 25rpx;
		line-height: 50rpx;
		font-size: 28rpx;
		background: #F0F0F0;
		flex: 1;
	}

	radio-group,
	checkbox-group {
		width: 100%;
	}

	radio-group label,
	checkbox-group label {
		padding-right: 20rpx;
	}

	.uni-form-item .with-fun {
		display: flex;
		flex-wrap: nowrap;
		background: #FFFFFF;
	}

	.uni-form-item .with-fun .uni-icon {
		width: 40px;
		height: 80rpx;
		line-height: 80rpx;
		flex-shrink: 0;
	}
</style>
