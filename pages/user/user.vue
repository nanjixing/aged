<template>
	<view>
		<Drag @dragClick="dragClick()" creatTop="500" creatLeft="280" image="" imageWidth="84%"></Drag>
		<view class="link">
			<button class="link_button" type="primary" size="mini" @click="goGoods()">查看商品</button>
			<button class="link_button" type="primary" size="mini" @click="getOrders()">查看订单</button>
			<button class="link_button" type="primary" size="mini" @click="tuichu()">退出登陆</button>
		</view>


		<view>
			<view v-for="(value,key) in orderArr" :key="key" class="uni-flex uni-column">
				<view>
					<!-- <input v-model="orderid" v-bind:value="a" disabled="true" v-show="true" /> -->
					<view style="margin-left: 50rpx;">订单号：{{value.code}}</view>
					<view style="height: 10rpx;"></view>
					<view style="margin-left: 50rpx;">下单时间：{{value.addTime}}</view>
					<view>
						<label style=" margin-left: 50rpx;">商品名：{{value.info}} 元</label>
						<label style=" margin-left: 10rpx;">收货人：{{value.realName}} </label>
					</view>
					<view>
						<label style=" margin-left: 50rpx;">总价：{{value.total}} 元 </label>
						<label class="order" @click="getOrderDetail(value.id)"
							style="float: right; margin-right: 50rpx;border: #007AFF; border-radius: 10rpx;">扫码取货</label>
					</view>
					<view class="line"></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempPhone: '',
				phone: '',
				urlHeader: this.uH+'/test1_war_exploded/test/',
				orderArr: [],
				orderid: ''



			}
		},
		methods: {
			dragClick() {

			},
			tuichu() {
				uni.removeStorageSync('orders');
				uni.removeStorageSync('userPhone');
				uni.navigateTo({
					url: '/pages/index/index',

				});
			},
			//跳转详情页
			goGoods() {
				//跳转到用户信息界面
				uni.navigateTo({
					url: '/pages/goods/goods',

				});
			},
			//获取订单信息
			getOrders() {
				console.log(this.phone);
				uni.request({
					url: this.urlHeader + 'uItemOrder',
					data: {
						phone: this.phone
					},
					success:(res)=> {
						//console.log(res);
						if (res.data.itemOrders != "暂无订单") {
							uni.setStorageSync('orders', res.data.itemOrders);
						    this.orderArr = uni.getStorageSync('orders');
						}

					}
				});
				
				//console.log(this.orderArr);
			},
			// 查看订单详情二维码
			getOrderDetail(id) {

				console.log(id);
				uni.request({
					url: this.urlHeader + 'uOrderDetail',
					data: {
						orderId: id
					},
					success(res) {
						console.log(res);
						if (res.data.orderQRCode != "error") {
							console.log(res.data.orderQRCode);
							uni.setStorageSync('imgUrl', res.data.orderQRCode);
							uni.setStorageSync('title', res.data.title);
							//跳转到用户信息界面
							uni.navigateTo({
								url: '/pages/orderQRCode/orderQRCode',

							});
						} else {
							uni.showModal({
								content: '获取订单失败，可直接去线下',
								showCancel: true
							});
						}
					}
				});
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('userPhone'));
			if (uni.getStorageSync('userPhone') == null) {
				uni.navigateTo({
					url: '/pages/index/index',

				});
			}

		},
		onShow() {
			var userPhone = uni.getStorageSync('userPhone');
			console.log(userPhone);
			if (userPhone == '') {
				uni.navigateTo({
					url: '/pages/index/index',

				});
			}
			this.phone = userPhone;
			console.log(this.phone)


		}

	}
</script>

<style>
	.uni-flex {
		display: flex;
		flex-direction: row;
	}

	.uni-flex-item {
		flex: 1;
	}

	.uni-row {
		flex-direction: row;
	}

	.uni-column {
		flex-direction: column;
	}

	.uni-link {
		color: #576B95;
		font-size: 26rpx;
	}

	.uni-center {
		text-align: center;
	}

	.uni-inline-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.uni-inline-item text {
		margin-right: 20rpx;
	}

	.uni-inline-item text:last-child {
		margin-right: 0rpx;
		margin-left: 20rpx;
	}

	.flex-item {
		width: 33.3%;
		height: 200rpx;
		text-align: center;
		line-height: 200rpx;
	}

	.flex-item-V {
		width: 100%;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}

	.text {
		margin: 15rpx 10rpx;
		padding: 0 20rpx;
		background-color: #ebebeb;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}

	.desc {
		/* text-indent: 40rpx; */
	}

	.flex-pc {
		display: flex;
		justify-content: center;
	}

	/* 背景色 */
	.uni-bg-red {
		background: #F76260;
		color: #FFF;
	}

	.uni-bg-green {
		background: #09BB07;
		color: #FFF;
	}

	.uni-bg-blue {
		background: #007AFF;
		color: #FFF;
	}

	//大盒子
	.link {
		display: flex;
		justify-content: space-around;
		flex-flow: wrap row;
		background-color: #55aaff;
	}

	.link_button {
		width: 180rpx; // 默认为26%*750
		min-width: 26%; //最小不能小于1/4，才能保持一行三个；最大不能大于1/3，才能改变width宽度
		font-size: 28rpx; //字体大小
		margin-top: 20rpx;
		margin-bottom: 20rpx; //上下设置间隔
	}

	.order {
		background-color: #75a0aa;
	}

	/* 横线 */
	.line {
		float: right;
		width: 100%;
		height: 1px;
		margin-top: 0.5em;
		background: #d4c4c4;
		position: relative;
		text-align: center;
	}
</style>
