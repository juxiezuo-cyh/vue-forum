<template>
	<div id="app">
		<c-header></c-header>
		<swiper :options="swiperOption">
			<swiper-slide v-for="(slide,index) in swiperSlides">
				<img :src="slide" alt="index">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import Lib from 'assets/js/Lib';
import CHeader from 'components/CHeader'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	data() {
		return {
			 swiperOption: {
				autoplay: 3000,
				setWrapperSize :true,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				mousewheelControl : true,
				observeParents:true,
			},
			swiperSlides: [
				require('assets/img/swiper1.png'),
				require('assets/img/swiper2.png'),
				require('assets/img/swiper3.png'),
				require('assets/img/swiper4.png')
			]
		}
	},
	components: {
		CHeader,
		swiper,
		swiperSlide
	},
	//实例初始化最之前，无法获取到data里的数据
	beforeCreate() {


	},
	//在挂载开始之前被调用
	beforeMount() {


	},
	//已成功挂载，相当ready()
	mounted() {



	},
	//相关操作事件
	methods: {




	}
}
</script>

<style scoped>
	#app {
		padding-top: 61px;
	}
	#app .swiper-pagination-bullet-active {
		opacity: 1;
		background: #fff !important;
	}
</style>
