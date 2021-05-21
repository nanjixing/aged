<template>
	<view>
		<swiper>
			<swiper-item v-for="(item, id) in data" :key="item.id">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						"src": "http://391661q0s0.wicp.vip/test1_war_exploded/resource/ueditor/upload/e8640440b0da11ebdeff09cfde08326f老年垫子0.jpg"
					} ,
					{
					"src":
					"http://391661q0s0.wicp.vip/test1_war_exploded/resource/ueditor/upload/e8660010b0da11ebdeff09cfde08326f老年垫子3.jpg"
				}
			]
		}
	},
	methods: {

	}
	}
</script>

<style>

</style>
