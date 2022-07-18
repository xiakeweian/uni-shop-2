
// import {getToken,removeToken} from './auth.js'

export const config = {
	baseUrl: 'http://192.168.82.215:4000/',
	
}

	import mockData from '../mock/index'
	console.log(mockData,'ddmockData')

const request = async function(url,method='GET',mock=false,parms={}){
	// const token = getToken()
	try{ 
		if(mock) {
			const api = `${method} ${url}`
			return mockData[api]
		}
		const result = await uni.request({
			url:config.baseUrl+ url,
			method,
			data: parms || {},
			// header:{
			// 	Authorization:token
			// }
		})
		// if(result[1].statusCode !== 200){
		// 	uni.showToast({
		// 		title: result[1].data.message
		// 	})
		// }
		console.log(result[1].data,'ggresult')
		// const response = JSON.parse(result[1].data)
		// console.log(response,'ggresponse')
		// return JSON.parse(result[1].data);
	}catch(e){
		uni.showToast({
			title:'网络错误,请稍后重试!!!'
		})
	}
}

export default request;



// import Mock from 'mockjs'
// function fetch({ 
//     url,
//     method = 'GET',
//     data,
//     showLoading = false,
//     header = {
//         'content-type': 'application/json'
//     },
// 	mock=false
// }) {
//     if (showLoading) {
//         uni.showLoading({
//             mask: true
//         });
//     }
//     if (method.toLowerCase() == 'post') {
//         header['content-type'] = 'application/x-www-form-urlencoded'
//     }
// 	if(mock) {
// 		Mock.mock(url,method,(config) => {
// 			console.log(config)
// 		})
// 	}
//     return new Promise((resolve, reject) => {
//         uni.request({
//             url, //仅为示例，并非真实接口地址。
//             header,
//             data: {
//                 ...data,
//                 openid: uni.getStorageSync('openid') || '',
//                 language: uni.getStorageSync('language') || 'en'
//             },
//             method,
//             success: (res) => {
//                 console.log(url, data, method, res);
//                 if (res.statusCode == 200) {
                   
//                     resolve(res.data)
//                     if (showLoading) {
//                         uni.hideLoading();
//                     }
//                 } else {
//                     reject(res)
//                 }
//             },
//             error(err) {
//                 reject(err)
//                 uni.hideLoading();
//             }
//         });
//     })

// }
// Function.prototype.before = function( fn ){
//     var self = this;
//     return function(){
//         let f = fn.apply( this, arguments );
//         if( f ){
//             console.log( arguments );
//             let opt = arguments[0];
//             let index = opt.url.lastIndexOf('/');
//             var name = opt.url.substring(index+1);
//             console.log(name);
//             //这里mock返回， promise函数
//             var url =` http://localhost:8080/${name}.json`;
//             return mock(url);
//         }
//         return self.apply( this, arguments );
 
//     }
// }
// function mock( url ){
//     return uni.request({
//         url: url, //仅为示例，并非真实接口地址。
//         data: {
//             text: new Date(),
//         },
//         method: 'GET',
//         header: {
//             'custom-header': 'hello' //自定义请求头信息
//         }
//     }).then( function( data ){
//         return data[1].data;
//     })
// }

