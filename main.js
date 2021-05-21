import Vue from 'vue'
import App from './App'
import Drag from "@/components/beyondGod-drag/beyoundGod-drag.vue"
// 将请求挂载到全局
import { myRequest } from './util/api.js'
Vue.prototype.$myRuquest = myRequest

Vue.config.productionTip = false

Vue.component('Drag', Drag)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
