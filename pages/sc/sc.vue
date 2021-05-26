<template>
	<view class="home">
		<Drag @dragClick="dragClick" creatTop="500" creatLeft="280" image="" imageWidth="84%"></Drag>
		
		<!-- 推荐商品 -->
		<view class="hot_goods">
			
			<view class="wrapper">
				<view style="text-align: center; font-size: 50rpx;">我的收藏商品</view>
				
			</view>
			<!-- goodlist标签时import导入的并且经过component注册 -->
			<goods-list1 @goodsItemClick="goGoodsDetail" :goods="goods" @qxsp="itemqxsc"></goods-list1>
			<!-- <view v-for="(item,index) in goods" :key = "index">
				<label>{{item.name}}</label>
				<image :src="item.url1"></image>
			</view> -->
		</view>
	</view>
</template>

<script>
	
	import goodsList1 from '../../components/goods-list/good-list1.vue';

	export default {
		data() {
			return {
				urlHeader: this.uH+'/test1_war_exploded/test/',
				swipers: [],
				goods: []
			}
		},
		onLoad() {
			// 页面加载一次发送请求
			// this.getSwipers()
			this.getScGoods()
			

		},
		onShow() {
			this.getScGoods()
		},
		//将goodlist注册为组件
		components: {
			"goods-list1": goodsList1
		},
		methods: {
			dragClick() {
			
			},
			// 获取热门商品列表数据
			getScGoods() {
				var phone = uni.getStorageSync('userPhone')
				console.log(phone)
				if(phone == undefined){
					uni.navigateTo({
						url: '/pages/index/index'
					})
				}else{
					uni.request({
						url: this.urlHeader + 'getscgoods',
						data:{
							phone:phone
						},
						success:(res)=> {
							// 将商品把偶才能在数组
							console.log(res)
							if(res.data.scgoods == 'fail'){
								uni.showModal({
									content: '没有收藏商品',
									showCancel: true
								});
							}else{
								uni.setStorageSync('scgoods', res.data.scgoods);
								this.goods = uni.getStorageSync('scgoods');
							}
							
						}
					})
					
					console.log(this.goods)
				}
				
			},
			// 每个导航按钮点击的处理函数
			navItemClick(url) {
				console.log(url)
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情页,子组件先将id传给父组件，然后这个id是父传过来的
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail1/goods-detail1?id=' + id
				})
			},
			itemqxsc(id){
				console.log(id)
				var phone = uni.getStorageSync('userPhone')
				console.log(phone)
				if (phone == undefined) {
					uni.navigateTo({
						url: '/pages/index/index'
					})
				} else {
					uni.request({
						url: this.urlHeader + 'qxsc',
						data: {
							itemId: id,
							phone:phone
						},
						success:(res)=> {
							console.log(res)
							if (res.data == 'success') {
								uni.showModal({
									content: '取消收藏成功',
									showCancel: true
								});
							this.getScGoods()
							}else{
								uni.showModal({
									content: '取消收藏失败，请检查网络',
									showCancel: true
								});
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.home {

		// 配置轮播图样式，注意高度实际位设置的一半
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx; //圆
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color; //uni.scss中定义的
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
				font-size: 40px; //设置字体大小
			}
		}

	}

	.uni-input {
		height: 60rpx;
		padding: 15rpx 25rpx;
		line-height: 50rpx;
		font-size: 28rpx;
		background: #F0F0F0;
		flex: 1;
	}

	.wrapper {
		margin: 40rpx;

	}

	.wrapper button {
		margin-top: 20rpx;
		text-align: center;
	}

	.result {
		color: red;
		font-size: 36rpx;
	}
</style>
