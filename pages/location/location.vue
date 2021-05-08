<template>
	<view class="contact">
		<view class=" img"></view>
		<view class="info">
			<view @click="phone">联系电话：18338783995</view>
			<view>联系地址</view>
		</view>

		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" >
			<cover-view></cover-view>
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//用百度地图工具得到经纬度
				longitude: 113.66296,
				latitude: 34.781903,
				scale: 13,
				markers: [{
					longitude: 113.66296,
					latitude: 34.781903,
					iconPath: '../../static/tab-user.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'18338783995',
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
