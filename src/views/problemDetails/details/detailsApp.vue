<template>
	<div id="app">
		<c-header></c-header>
		<div class="marauto_width_1100">
			<!-- 问题题目 -->
			<h1 class="titile">
				<a href="" v-html="questionDetail.title"></a>
				<a :href="questionDetail.src" target='block'>源自：
						<i v-html="questionDetail.src"></i>
					</a>
			</h1>
			<div class="flg">
				<a href="javascript:void(0);" :key="index" v-for="(item, index) in questionDetail.tag">{{item}}</a>
			</div>
			<!-- 问题详细描述 -->
			<div class="center">
				<p class="detail" v-html="questionDetail.content"></p>
				<!-- 答案列表 -->
				<div class="answer-list" :key="index" v-if="questionDetail.answer" v-for="(item,index) in questionDetail.answer">
					<h2 class="your-answer">
						<span>{{index+1}}</span> Answer
					</h2>
					<p class="answer" v-html="item"></p>
				</div>
				<!-- 编辑器 -->
				<div v-show="false">
					<p class="share-title">Know someone who can answer? Share a link to this question via email, Google+, Twitter, or Facebook.</p>
					<h2 class="your-answer">Your Answer</h2>
					<quill-editor v-model="content" @change="onEditorChange($event)">
					</quill-editor>
					<div class="line"></div>
					<button class="btn-submit" @click="saveContent">Post Your Answer</button>
				</div>
			</div>
			<div class="div-news fr">
			</div>
		</div>
	</div>
</template>

<script>
	import Lib from 'assets/js/Lib'
	import Api from 'assets/js/api'
	import CHeader from 'components/CHeader'
	import VueQuillEditor from 'vue-quill-editor'
	import Common from 'assets/js/common'
	// require styles
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import {
		quillEditor
	} from 'vue-quill-editor'
	export default {
		data() {
			return {
				content: '',
				url: '',
				questionDetail: {}
			}
		},
		components: {
			CHeader,
			quillEditor
		},
		//实例初始化最之前，无法获取到data里的数据
		beforeCreate() {},
		//在挂载开始之前被调用
		beforeMount() {
			this.getUrl('id')
		},
		//已成功挂载，相当ready()
		mounted() {
			this.getQuestionDetail()
		},
		//相关操作事件
		methods: {
			getQuestionDetail() {
				Api.questionDetail({
					'id': this.url
				}).then(res => {
					if (res.code === 0) {
						this.questionDetail = res.data
					} else {
						alert(res.msg)
					}
				})
			},
			getUrl(id) {
				this.url = Common.getUrlQuery(id)
			},
			saveContent: function() {
				// You have the content to save
				console.log(this.content)
			},
			onEditorChange({quill,html,text}) {
				console.log('editor change!', quill, html, text)
				this.content = html
			}
		}
	}
</script>

<style scoped>
	#app {
		margin-top: 61px;
	}
	
	.btn-submit {
		color: #FFF;
		background-color: #0095ff;
		border-color: #07c;
		box-shadow: inset 0 1px 0 #66bfff;
		padding: 8px 13px;
		border-radius: 2px;
		box-sizing: border-box;
		border: none;
		cursor: pointer;
	}
	
	.btn-submit:active {
		border: none;
	}
	
	.line {
		box-sizing: border-box;
		padding: 10px 0;
		border-top: 1px dotted #c8ccd0;
		border-bottom: 1px dotted #c8ccd0;
		margin: 20px 0;
	}
	
	.titile {
		font-weight: normal;
		border-bottom: 1px solid #E4E6E8;
		margin-bottom: 13px;
	}
	
	.titile a:nth-child(1) {
		font-size: 24px;
		color: #242729;
		display: block;
		padding: 20px 0 10px;
	}
	
	.titile a:nth-child(2) {
		font-size: 15px;
		line-height: 25px;
		color: #39739D;
		display: block;
	}
	
	.center {
		display: inline-block;
		font-size: 15px;
		width: 728px;
		color: #242729;
		line-height: 22px;
	}
	
	.detail {
		padding: 10px;
		border-bottom: 1px solid #E4E6E8;
		width: 728px;
		line-height: 22px;
		word-break:break-all;
		overflow:auto;
	}
	
	.answer {
		padding: 10px;
		margin-bottom: 13px;
		background: #EFF0F1;
	}
	
	.flg a {
		display: inline-block;
		padding: 6px 6px;
		color: #39739d;
		margin-right: 3px;
		margin-bottom: 10px;
		background-color: #E1ECF4;
		border-color: transparent;
	}
	
	.div-news {
		display: inline-block;
		width: 300px;
		height: 500px;
		border: #E4E6E8 1px solid;
	}
	
	.share-title {
		font-size: 16px;
		margin-top: 10px;
	}
	
	.your-answer {
		font-size: 18px;
		line-height: 55px;
		font-weight: normal;
		border-bottom: 1px solid #E4E6E8;
		margin-bottom: 15px;
	}
	
	.answer-list {
		padding-bottom: 15px;
		border-bottom: 1px solid #E4E6E8;
		width: 728px;
		word-break:break-all;
		overflow:auto;
	}
</style>
