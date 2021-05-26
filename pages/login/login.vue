<template>
	<view>
		<Drag @dragClick="dragClick" creatTop="500" creatLeft="280" image="" imageWidth="84%"></Drag>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

	</view>
	<view class="uni-padding-wrap uni-common-mt">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="title">input</view>
				<input class="uni-input" name="input" placeholder="这是一个输入框" />
			</view>
			<view class="uni-btn-v">
				<button form-type="submit">Submit</button>
				<button type="default" form-type="reset">Reset</button>
			</view>
		</form>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎使用'
			}
		},
		onLoad() {

		},
		methods: {
			dragClick() {
			
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
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

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.uni-padding-wrap{
		/* width:690rpx; */
		padding:0 30rpx;
	}
	.uni-common-mt{
		margin-top:30rpx;
	}
	/* 表单 */
	.uni-form-item{
		display:flex;
		width:100%;
		padding:10rpx 0;
	}
	.uni-form-item .title{
		padding:10rpx 25rpx;
	}
	.uni-label {
		width: 210rpx;
		word-wrap: break-word;
		word-break: break-all;
		text-indent:20rpx;
	}
	.uni-input {
		height: 50rpx;
		padding: 15rpx 25rpx;
		line-height:50rpx;
		font-size:28rpx;
		background:#FFF;
		flex: 1;
	}
	radio-group, checkbox-group{
		width:100%;
	}
	radio-group label, checkbox-group label{
		padding-right:20rpx;
	}
	.uni-form-item .with-fun{
		display:flex;
		flex-wrap:nowrap;
		background:#FFFFFF;
	}
	.uni-form-item .with-fun .uni-icon{
		width:40px;
		height:80rpx;
		line-height:80rpx;
		flex-shrink:0;
	}
</style>
