
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {$http} from '@escook/request-miniprogram'
import newRequest from './utils/request'
Vue.config.productionTip = false

import mockdata from "./mock";
console.log(mockdata,'ssfdddff')

App.mpType = 'app'
uni.newRequest = newRequest

// $http.baseUrl = 'https://www.zhengzhicheng.cn'
// $http.baseUrl = 'https://www.uinav.com'
$http.baseUrl = 'https://autumnfish.cn/wx'
uni.$http = $http;
//请求开始之前的拦截需要做的事情
$http.beforeRequest = function (options) {
	uni.showLoading({
		title:'数据加载中...'
	})
}
// //请求结束后做的事情
$http.afterRequest = function(options) {
	uni.hideLoading();  
};

uni.$showMsg = function(title = '数据加载失败',duration=1500) {
	uni.showToast({
		title,
		duration,
		icon:'none'
	})
};
const app = new Vue({
    ...App
})
app.$mount()

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif