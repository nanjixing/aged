// 每个页面都要使用在main。js中暴漏
const BASE_URL = 'http://391661q0s0.wicp.vip/test1_war_exploded'
export const myRequest = (options)=>{
	//异步请求，使用promis封装
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				console.log(res)
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				//获取数据成功
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}