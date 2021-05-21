<template>
	<view class="content">
		<Drag @dragClick="dragClick" creatTop="500" creatLeft="280" image="" imageWidth="84%"></Drag>
		<view>商品名字：{{title}}</view>
		<image v-bind:src="img" class="hw"></image>
		<view>
			<button @click="scanQRCode()">
				扫码
			</button>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: '',
				title:'',
				urlHeader: 'http://391661q0s0.wicp.vip/test1_war_exploded/test/'
			}
		},
		methods: {
			dragClick(){
				
				},
			//扫描二维码
			scanQRCode: function() {
				uni.scanCode({
					onlyFromCamera: false,
					scanType: ['qrCode'],
					//遇到这种问题，先把方法的几种方式换一换
					success: (res) => {
						var scanString = res.result
						uni.request({
							url: this.urlHeader + 'scanQRCode',
							data: {
								scanString: scanString
							},
							//请求成功返回信息处理
							success(res) {
								console.log(res.data);
								if(res.data == "success"){
									uni.showModal({
									content: '扫码取货成功',
									showCancel: true
								})
								}else if(res.data == "fail"){
									uni.showModal({
										content: '取货失败，请联系工作人员',
										showCancel: true
									})
								}else if(res.data == "yqh"){
									uni.showModal({
										content: '该商品已被取货',
										showCancel: true
									})
								}
								
							}
						})
						console.log('条码内容：' + JSON.stringify(res.result));
						
					}
					

				});
			},

		},
		onLoad() {
			this.img = uni.getStorageSync('imgUrl');
			this.title = uni.getStorageSync('title');
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

	.hw {
		height: 400rpx;
		width: 400rpx;
		margin-top: 50rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
</style>
