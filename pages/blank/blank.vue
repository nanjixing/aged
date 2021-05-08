<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			// 验证登录状态
			var tempPhone = uni.getStorageSync('userPhone');
			if (tempPhone != '') {
				//跳转到用户信息界面
				uni.navigateTo({
					url: '/pages/user/user'
				});
			}else{
				//跳转到用户信息界面
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}
		},
		onShow() {
			// 验证登录状态
			var tempPhone = uni.getStorageSync('userPhone');
			if (tempPhone != '') {
				//跳转到用户信息界面
				uni.switchTab({
					url: '/pages/user/user'
				});
			}else{
				//跳转到用户信息界面
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style>

</style>
