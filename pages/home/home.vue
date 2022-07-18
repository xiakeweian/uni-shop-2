<template>
	<view>
		<mySearch @click="handlerSearch"></mySearch>
		<swiper class='swiper-list' :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			:circular="true">
			<swiper-item v-for="(item,i) in swiperList" :key='i'>
				<navigator class='swiper-item' :url="'/subpkg/goodsDetail/goodsDetail?goods_id='+item.goods_id">
					<image :src='item.url'></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="nav-list">
			<view v-for="(item,i) in navList" :key="i" class='nav-item' @click="navClickHandler(item)">
				<image :src='item.image_src' class="nav-img"></image>
				<view>{{item.name}}</view>

			</view>
		</view>
	</view>



</template>

<script>
	import Mock from 'mockjs'
	import mockData from '../../mock/index'
	export default {
		data() {
			return {
				swiperList: [],
				//定义nav列表字段
				navList: []
			}
		},
		onLoad() {
			//获取轮播图数据
			this.getSwiperList()
			// //获取navList数据
			this.getNavList()
			// this.getFloorList()

		},
		methods: {
			async getSwiperList() {
				const data = await uni.newRequest('/api/home/swiperlist', 'GET', true)
				this.swiperList = data.message

			},
			async getNavList() {
				const data = await uni.newRequest('/api/categories/list', 'GET', true)
				this.navList = data.message
			},
			navClickHandler(item) {
				uni.switchTab({
					url: '/pages/cate/cate'
				})
			},
			async getFloorList() {
				const data = await uni.$http.get('/api/public/v1/home/floordata')
				console.log(data, 'ssssfff')
			},
			handlerSearch() {
				console.log('搜索')
				uni.navigateTo({
					url:'/subpkg/goods_list/goods_list'
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper-list {
		.swiper-item image {
			width: 100%;
		}

	}

	.nav-list {
		display: flex;
		margin: 30rpx 0;
		justify-content: space-around;

		.nav-item {
			width: 25%;
			text-align: center;
			font-size: 24rpx;

			.nav-img {
				width: 60rpx;
				height: 60rpx;
			}


		}
	}
</style>
