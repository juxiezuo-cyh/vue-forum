<template>
	<div id="app" class="c_index_app">
		<c-header></c-header>
		<swiper :options="swiperOption">
			<swiper-slide v-for="(slide,index) in swiperSlides">
				 <a href="../home/list.html">
					<img :src="slide" alt="index">
				</a> 
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="marauto_width_1100">
			<!-- 问题列表 -->
			<div class="c-problem-list">
				<ul class="c-problem-list-nav clearfix">
					<li class="fl">Top Questions</li>
					<li class="fr">
						<a href="">interesting</a>
					</li>
					<li class="fr">
						<a href="">
							<span>345</span> featured
						</a>
					</li>
					<li class="fr">
						<a href="">hot</a>
					</li>
					<li class="fr">
						<a href="">week</a>
					</li>
					<li class="fr">
						<a href="" class="active">month</a>
					</li>
				</ul>
				<question-list></question-list>
			</div>
			<div class="div-news fr">

			</div> 
		</div>
	</div>
</template>

<script>
import Lib from 'assets/js/Lib'
import CHeader from 'components/CHeader'
import QuestionList from 'components/QuestionList'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	data() {
		return {
			swiperOption: {
				autoplay: 3000,
				setWrapperSize: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				mousewheelControl: true,
				observeParents: true,
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
		swiperSlide,
		QuestionList
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
.c_index_app {
	padding-top: 61px;
}

.c-problem-list-nav {
	width: 728px;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #E4E6E8;
}

.c-problem-list {
	display: inline-block;
	margin-top: 15px;
}

.c-problem-list-nav:nth-child(1) {
	color: #242729;
	font-size: 18px;
}

.c-problem-list-nav li a {
	padding: 0 10px;
	display: inline-block;
	color: #848D95;
	margin: -3px 5px 0;
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
	border-bottom: transparent solid 1px;
	border-top: transparent solid 2px;
}

.c-problem-list-nav li a:hover {
	background: #F9F9FA;
	color: #535A60;
	border-bottom: #E4E6E8 solid 1px;
}

.c-problem-list-nav li a.active {
	background: #F9F9FA;
	color: #535A60;
	border-top: #F69C55 solid 2px;
	border-bottom: #fff solid 1px;
	border-left: 1px solid #E4E6E8;
	border-right: 1px solid #E4E6E8;
}

.c-problem-list-nav li a:last-child {
	margin-right: 0;
}

.div-news {
	display: inline-block;
	width: 300px;
	height: 500px;
	border: #E4E6E8 1px solid;
}
</style>
