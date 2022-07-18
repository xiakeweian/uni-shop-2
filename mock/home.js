import Mock from 'mockjs'
const home = {
	// 'GET /api/categories/list': Mock.mock({
	// 	"message|4": [{
	// 		"image_src|1": ['cate', 'sale', 'shopping', 'babyProducts'],
	// 		open_type: 'navigate',
	// 		"goods_id|1": Mock.mock('@id()'),
	// 		navigator_url: [],
	// 		"name|1": ['分类', '秒杀拍', '超市购', '母婴品']
	// 	}]
	// })
	'GET /api/categories/list': Mock.mock({
		message:[
			{
				image_src:'/static/cate_icons/cate.png',
				open_type:'navigate',
				goods_id:1,
				name:'分类'
			},
			{
				image_src:'/static/cate_icons/sale.png',
				open_type:'navigate',
				goods_id:2,
				name:'秒杀拍'
			},
			{
				image_src:'/static/cate_icons/shopping.png',
				open_type:'navigate',
				goods_id:3,
				name:'超市购'
			},
			{
				image_src:'/static/cate_icons/babyProducts.png',
				open_type:'navigate',
				goods_id:4,
				name:'母婴品'
			},
		]
	}),
	'GET /api/home/swiperlist': Mock.mock({
		message:[
			{
				url:'/static/home/1.jpg',
				goods_id:1
			},
			{
				url:'/static/home/2.jpg',
				goods_id:2
			},
			{
				url:'/static/home/3.jpg',
				goods_id:3
			},
			{
				url:'/static/home/4.jpg',
				goods_id:4
			},
		]
	})
	
		
	
}
export default home
