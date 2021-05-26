<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			
			<image :src="item.url1"></image>
			<view class="price">
				<text>￥{{item.price * item.zk*0.1}}</text>
				<text>￥{{item.price}}</text>
			</view>
			<view class="name">
				<text>{{item.name}}</text>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		// 接受外界传过来的数据，在这个页面使用goods用数据
		
		props: ['goods'],
		methods: {
			// 点击跳转详情页界面这是在使用的地方的绑定的事件名goodsItemClick
			navigator (id) {
				console.log(id);
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;//一行显示，但是不换行
		flex-wrap: wrap;//一行显示，加了之后可以换行
		justify-content: space-between;
		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;//防止盒子被撑大
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: auto;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			
			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
