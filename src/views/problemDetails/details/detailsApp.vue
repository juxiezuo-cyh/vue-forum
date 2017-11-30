<template>
	<div id="app">
		<c-header></c-header>
		<div class="marauto_width_1100">
			<!-- 问题题目 -->
			<h1 class="titile">
				<a href="">Printing from Phone to Hp Printer via Wifi</a>
			</h1>
			<!-- 问题详细描述 -->
			<div class="center">
				<p class="detail">
					0 down vote favorite 1 I have saved My ListView items as a Pdf file in local Storage,but not able to print the Pdf file and also can't open it. It shows the error like this : "Cannot display pdf (myfile.pdf is in Invalid format)"
				</p>
				<!-- 答案列表 -->
				<div class="answer-list">
					<h2 class="your-answer">1 Answer</h2>
					<p class="answer">
						File fileDir = new File( Environment.getExternalStorageDirectory(), "Android/data/mypackage/"); if (!fileDir.exists()) fileDir.mkdirs(); File newFile = new File(fileDir, fileName+ ".pdf"); BufferedWriter bw = new BufferedWriter(new FileWriter(newFile, false)); /* * Write a header row. */ bw.write("Description" + "\t\t\t" + "Value"); /* * and a row for each result, comma separated */ for (int i = 0; i
						< jewelleryDetailsList.size(); i++) { String row=n ew String(); row=j ewelleryDetailsList.get(i).getLine1() + "\t\t" + jewelleryDetailsList.get(i).getLine2(); bw.write(row); } bw.close(); 
					</p>
					<div class="flg">
						<a href="">mysql</a>
						<a href="">group-concat</a>
					</div>
				</div>
				<div class="answer-list">
					<h2 class="your-answer">2 Answer</h2>
					<p class="answer">
						File fileDir = new File( Environment.getExternalStorageDirectory(), "Android/data/mypackage/"); if (!fileDir.exists()) fileDir.mkdirs(); File newFile = new File(fileDir, fileName+ ".pdf"); BufferedWriter bw = new BufferedWriter(new FileWriter(newFile, false)); /* * Write a header row. */ bw.write("Description" + "\t\t\t" + "Value"); /* * and a row for each result, comma separated */ for (int i = 0; i
						< jewelleryDetailsList.size(); i++) { String row=n ew String(); row=j ewelleryDetailsList.get(i).getLine1() + "\t\t" + jewelleryDetailsList.get(i).getLine2(); bw.write(row); } bw.close(); 
					</p>
					<div class="flg">
						<a href="">mysql</a>
						<a href="">group-concat</a>
					</div>
				</div>
				<p class="share-title">Know someone who can answer? Share a link to this question via email, Google+, Twitter, or Facebook.</p>
				<h2 class="your-answer">Your Answer</h2>
				<!-- 编辑器 -->
				<vue-editor v-model="content"></vue-editor>
				<div class="line"></div>
				<button class="btn-submit" @click="saveContent">Post Your Answer</button>
			</div>
			<div class="div-news fr">
			</div>
		</div>
	</div>
</template>

<script>
import Lib from 'assets/js/Lib'
import CHeader from 'components/CHeader'
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
export default {
	data() {
		return {
			content: ''
		}
	},
	components: {
		CHeader,
		VueEditor
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
		saveContent: function() {
			// You have the content to save
			console.log(this.content)
			// axios({
			// 	url: 'https://fakeapi.yoursite.com/images',
			// 	method: 'POST',
			// 	data: formData
			// })
			// .then((result) => {
			// 	let url = result.data.url // Get url from response
			// 	Editor.insertEmbed(cursorLocation, 'image', url);
			// })
			// .catch((err) => {
			// 	console.log(err);
			// })
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
	font-size: 24px;
	font-weight: normal;
	color: #242729;
	line-height: 67px;
	border-bottom: 1px solid #E4E6E8;
	margin-bottom: 13px;
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
}
</style>
