<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">昵称:</view>
					<input class="uni-input" type="text" name="username" maxlength="11" placeholder="请输入您的昵称"
						v-model="username"/>
				</view>
				<!-- 	<view class="uni-form-item uni-column">
					<view class="title">验证码:</view>
					<input class="uni-input" name="vercode" placeholder="请输入您的验证码" /><button
						@click="vercode(phoneNumber)">获取验证码</button>
				</view> -->
				<view class="uni-form-item uni-column">
					<view class="title"> 姓名:</view>
					<input class="uni-input" type="text" name="realname" placeholder="请输入您的姓名" v-model="realname"
						/>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title"> 地址:</view>
					<input class="uni-input" type="text" name="address" placeholder="请输入您的地址" v-model="address"
						/>
				</view>
				<view class="uni-form-item uni-column">
					
					<input v-show="false" name="userid" placeholder="请输入您的地址" v-model="userid"
						 />
				</view>
				<view class="button">
					<button type="primary" form-type="submit">提交</button>
				</view>
			</form>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlHeader: this.uH+'/test1_war_exploded/test/',
				userinfo: {},
				username:'',
				realname:'',
				address:'',
				userid:''
			}
		},
		methods: {
		//表单提交账户密码
		async formSubmit(e) {
			var formdata = JSON.stringify(e.detail.value);
			console.log('form发生了submit事件，携带数据为：' + formdata);
			if(this.username != undefined && this.realname != undefined && this.address != null){
				uni.request({
					url: this.urlHeader + 'updateuser',
					data: {
						formdata: formdata
					},
					success:(res)=> {
						console.log(res)
						if (res.data == 'success') {
							//登录成功
							
							uni.switchTab({
								
								url: '/pages/userinfo/userinfo',
							});
							
						
						} else {
							//登录失败
							uni.showModal({
								content: '请检查输入信息',
								showCancel: true
							});
						}
					}
					
				})
			}else{
				//登录失败
				uni.showModal({
					content: '请检查输入信息',
					showCancel: true
				});
			}
			
		
			// }
		
		},
		},
		onLoad() {
			this.userinfo = uni.getStorageSync('userinfo')
			this.username = this.userinfo.userName
			this.realname = this.userinfo.realName
			this.address = this.userinfo.address
			this.userid = this.userinfo.id
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
