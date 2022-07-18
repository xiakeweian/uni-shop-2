<template>
	<view class='my-search-container'>
		<view class='my-search-box' @click="handleClick">
			<uni-icons type='search' size='17'></uni-icons>
			<text class='placeholder'>搜索</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			handleClick() {  
				console.log('ok')
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
.my-search-container {
	background:#40a9ff;
	height:50px;
	padding:0 10px;
	display:flex;
	align-items:center;
	.my-search-box {
		height:36px;
		ackground-color:#fff;
		border-radius:18px;
		border:1px solid #575757;
		width:100%;
		display:flex;
		justify-content: center;
		align-items:center;
		
	}
}
</style>
