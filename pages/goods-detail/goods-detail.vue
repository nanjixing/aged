<template>
	<view class="goods_detail">
		<Drag @dragClick="dragClick" creatTop="500" creatLeft="280" image="" imageWidth="84%"></Drag>
		<!-- 详情轮播图 indicator-dots显示轮播点-->
		<swiper indicator-dots>
			<swiper-item v-for="(item,key) in swipers" :key="key">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>

		<view class="box1">
			<view class="price">
				<text>￥{{info.price}}</text>
				<text>￥{{info.price}}</text>
			</view>
			<view class="goods_name">{{info.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{info.id}}</view>
			<view>名字：{{info.name}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">

				<!-- <rich-text :nodes="info.ms">
					
				</rich-text> -->
				<image :src="info.url2"></image>
			</view>
		</view>
		<view class="goods_nav">

			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick(info.id)"></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				urlHeader: 'http://391661q0s0.wicp.vip/test1_war_exploded/test/',
				content: '',
				options: [{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				buttonGroup: [

					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			dragClick() {

			},
			// 轮播详情图获取
			getSwipers(options) {
				uni.request({
					url: this.urlHeader + 'goodpicture?id=' + options,
					success(res) {
						if (res.data.goodpicture != undefined) {

							uni.setStorageSync("goodpicture", res.data.goodpicture)

						}
					}
				})
				this.swipers = uni.getStorageSync("goodpicture")

			},
			//获取详情信息
			getDetailInfo(options) {
				uni.request({
					url: this.urlHeader + 'gooddetail?id=' + options,
					success(res) {
						if (res.data.gooddetail != undefined) {
							uni.setStorageSync("gooddetail", res.data.gooddetail)
							console.log(res.data.gooddetail)
						}
					}
				})
				this.info = uni.getStorageSync("gooddetail")
			},
			// 获取详情内容
			async getDetailContent() {
				const res = await this.$myRuquest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.content = res.data.message[0].content
			},
			onClick(e) {
				// uni.showToast({
				// 	title: `点击${e.content.text}`,
				// 	icon: 'none'
				// })
				console.log('客服')
				uni.makePhoneCall({
					phoneNumber: '18338783995',

				})
			},
			buttonClick(e) {
				//立即购买按钮
				console.log('立即购买')
				var phone = uni.getStorageSync('userPhone')
				if (phone == null) {
					uni.showModal({
						content: '请先登录',
						showCancel: true
					});
				} else {
					var itemId = this.info.id
					console.log(phone + ' ' + itemId)
					uni.request({
						url: this.urlHeader + 'buy',
						data: {
							phone: phone,
							itemId: itemId
						},
						success(res) {
							console.log(res);
							if (res.data == 'success') {
								console.log(res.data)
								uni.showModal({
									content: '购买成功',
									showCancel: true
								});
							}
						}
					})
				}

			}
		},
		//接受传页面的id参数
		onLoad(options) {
			//获取上一个页面传递的id
			this.id = options.id

			// 获取轮播图
			this.getSwipers(this.id)

			// 获取详情
			this.getDetailInfo(this.id)
			// 获取详情内容
			//this.getDetailContent()
		},
		//注册导航组件
		components: {
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 50px;

			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
</style>
