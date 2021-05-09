<template>
	<view class="home">

		<!-- 导航区域,这里改为语音搜索框 -->
		<view class="nav">
			<!-- 编程式导航，同时位每个导航按钮设置时间处理函数 -->
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<!-- class也是用v-bind绑定指定的样式，可以用你来全局改变字体颜色 -->
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				<!-- 搜索 -->
				<input class="uni-input" type="text" name="condition" placeholder="搜索" :value="resultText" />

			</view>
			<view class="wrapper">
				<view>语音识别结果：</view>
				<view class="result">{{ resultText }}</view>
				<button @click="startRecord" v-bind:disabled="status">{{ status ? '正在录音中...' : '开始录音' }}</button>
				<button @click="endRecord" v-bind:disabled="!status">停止录音</button>
			</view>
			<!-- goodlist标签时import导入的并且经过component注册 -->
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
			<!-- <view v-for="(item,index) in goods" :key = "index">
				<label>{{item.name}}</label>
				<image :src="item.url1"></image>
			</view> -->
		</view>
	</view>
</template>

<script>
	import {
		sentenceRecognition,
		toBase64,
		Recorder
	} from '@/js_sdk/tencentcloud-plugin-asr';
	import goodsList from '../../components/goods-list/goods-list.vue';

	export default {
		data() {
			return {
				urlHeader: 'http://391661q0s0.wicp.vip/test1_war_exploded/test/',
				resultText: '', // 语音识别结果
				rec: '', // recorder实例
				status: false, // 是否在录制状态
				wordList: [],
				swipers: [],
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			// 页面加载一次发送请求
			// this.getSwipers()
			this.getHotGoods()
			// 初始化录音实例
			this.rec = new Recorder();

		},
		//将goodlist注册为组件
		components: {
			"goods-list": goodsList
		},
		methods: {
			// 获取轮播图的数据，写箭头函数，不然不能获取this。swipers
			// async getSwipers () {
			// 	console.log('获取轮播图路径')
			// 	// 发送get请求
			// 	const res = await this.$myRuquest({
			// 		// 在api.js中配置的options对象
			// 		url: '/api/getlunbo'
			// 	})
			// 	this.swipers = res.data.message
			// },
			// 获取热门商品列表数据
			getHotGoods() {
				uni.request({
					url: this.urlHeader + 'gethotgoods',
					success(res) {
						// 将商品把偶才能在数组
						console.log(res.data.hotgoods)
						uni.setStorageSync('goods', res.data.hotgoods);
					}
				})
				this.goods = uni.getStorageSync('goods');


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
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			},
			// 开始录音
			async startRecord() {
				try {
					this.status = true;
					await this.rec.start();
				} catch (error) {
					uni.showToast({
						icon: 'none',
						title: error.message
					});
				}
			},
			// 停止录音
			async endRecord() {
				this.status = false;
				try {
					// 录音完成获取录音文件和音频大小
					const {
						voiceBase64,
						size
					} = await this.rec.stop();
					uni.showLoading({
						mask: true
					});
					// 发起一句话识别请求
					const {
						result
					} = await sentenceRecognition({
						engSerViceType: '8k_zh',
						sourceType: 1,
						voiceFormat: 'mp3',
						usrAudioKey: 'test',
						dataLen: size,
						data: voiceBase64,
						// 过滤脏词
						FilterDirty: 2,
						//过滤标点 1 过滤句尾句号，2 过滤所有 0 不过滤
						FilterPunc: 1,
						//过滤语气词
						FilterModal: 2
					});
					this.resultText = result.Result;
					this.wordList = result.WordList;
					console.log(this.wordList);
					uni.setStorageSync("stoVoiceResult", this.resultText);
					var logresult = uni.getStorageSync("stoVoiceResult");
					console.log(logresult);
					uni.hideLoading();
					if (this.resultText != '') {
						this.search();
					} else {
						uni.showModal({
							content: '未检测到您说话',
							showCancel: true
						});
					}
				} catch (error) {
					uni.showToast({
						icon: 'none',
						title: error.message
					});
				}
			},
			//语音搜索
			search() {
				uni.request({
					url: this.urlHeader + 'search?condition=' + this.resultText,
					success(res) {
						// 将商品把偶才能在数组
						console.log(res.data.hotgoods)
						if (res.data.hotgoods != undefined && res.data.hotgoods!= 'false') {
							uni.setStorageSync('goods', res.data.hotgoods);
							//刷新一下
							uni.navigateTo({
								url: '/pages/goods/goods',
							
							});
						} else {
							uni.showModal({
								content: '未找到您说的商品，请再试一次',
								showCancel: true
							});
						}

					}
				})
				this.goods = uni.getStorageSync('goods');
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
	}

	.result {
		color: red;
		font-size: 36rpx;
	}
</style>
