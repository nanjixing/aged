<template >
	<view class="user-background">
		<Drag @dragClick="dragClick()" creatTop="500" creatLeft="280" image="" imageWidth="84%"></Drag>
		<view class="user-font" style="margin-top: 150rpx;">
			<text>
				个人信息
			</text>
		</view>
		<view class="top YmContent">
			<view class="info_96">
				<view v-on:click="row4_65_click()" class="row4">
					<text decode="true" class="info_66 ">昵称</text>
					<text decode="true" class="name">{{userinfo.userName}}</text>
				</view>
				<view class="info_69">
				</view>
				<view class="row4">
					<text decode="true" class="info_66">真实姓名</text>
					<text decode="true" class="name">{{userinfo.realName}}</text>
				</view>
				<view class="info_69">
				</view>
				<view class="row3">
					<text decode="true" class="info_71">手机号</text>
					<text decode="true" class="ids">{{userinfo.phone}}</text>
				</view>
				<view class="info_74">
				</view>

				<view class="info_79">
				</view>
				<view class="row1">
					<text decode="true" class="info_81">地址</text>
					<text decode="true" class="job">{{userinfo.address}}</text>
				</view>
				<view class="info_83">
				</view>
				<button type="primary" @click="utuichu()">退出</button>
			</view>


			<view class="ymBbottom"></view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlHeader: this.uH+'/test1_war_exploded/test/',
				userinfo: {}
			}
		},
		methods: {
			dragClick() {
			
			},
			utuichu(){
				uni.removeStorageSync('userPhone')
				uni.navigateTo({
					url: '/pages/index/index',
				
				});
			}
		},
		onLoad() {

		},
		onShow() {
			var phone = uni.getStorageSync('userPhone')
			if (phone == undefined || phone == '') {
				uni.navigateTo({
					url: '/pages/index/index',

				});
			}

			uni.request({
				url: this.urlHeader + 'userinfo',
				data: {
					phone: phone
				},
				success:(res)=> {
					uni.setStorageSync('userinfo', res.data.userinfo)
					this.userinfo = uni.getStorageSync('userinfo')
					console.log(this.userinfo)
				}
			})
			
		}
	}
</script>

<style lang="scss">
	@import './info.scss'
</style>
