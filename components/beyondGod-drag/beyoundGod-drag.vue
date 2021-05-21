<template>
	<view class="content" @click="dragClick" @touchstart.capture="touchstart" @touchend.capture="touchend" @touchmove.capture="touchmove"
		:style="{left:left + 'px',top:top + 'px',backgroundColor:background}">
		帮助
		<image :src="image" mode="widthFix" :style="{width:imageWidth}" v-if="image"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				left: '280',
				top: '500',
				isdrag: false,
				NowLeft: '',
				disX: '',
				NowTop: '',
				disY: ''
			};
		},
		mounted() {
			this.top = this.creatTop;
			this.left = this.creatLeft;
		},
		props: ['creatTop', 'creatLeft', 'image', 'background','imageWidth'],
		methods: {
			dragClick(){
				this.$emit('dragClick')
				console.log('悬浮按钮点击事件')
				uni.makePhoneCall({
					phoneNumber:'18338783995',
					
				})
			},
			touchstart(e) {
				let that = this;
				this.isdrag = true;
				this.NowLeft = parseInt(that.left);
				this.NowTop = parseInt(that.top);
				this.disX = e.touches[0].pageX;
				this.disY = e.touches[0].pageY;
				return false;
			},
			touchend(e) {
				this.isdrag = false;
			},
			touchmove(e) {
				if (this.isdrag) {
					this.left = this.NowLeft + e.touches[0].pageX - this.disX;
					this.top = this.NowTop + e.touches[0].pageY - this.disY;
					return false;
				}
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		background-color: rgb(255, 0, 0);
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px 0px;
		z-index: 5;
		overflow: hidden;
	}
	.content image{
		width: 40%;
	}
</style>
