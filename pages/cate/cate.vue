<template>
	<view>
		<view class='scroll-view-container'>
			<scroll-view class='left-scroll-view' scroll-y="true" style="{style:wh + 'px'}">
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
				<view>xxx</view>
			</scroll-view>
			<scroll-view class='right-scroll-view'  scroll-y="true" style="{style:wh + 'px'}">
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
				<view>yyyyyyyyyyyyyyy</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wh:0
			};
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync()
			console.log(sysInfo)
			this.wh = sysInfo.windowHeight
		},
		methods:{
			getHeight() {
			
			}
		}
	}
</script>

<style lang="scss">
	
	.scroll-view-container {
		display:flex;
		.left-scroll-view{
			width:240rpx;
			
		}
		.right {
			
		}
	}

</style>
