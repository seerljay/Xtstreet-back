<template>
	<div class="afficheAddPage">
		<el-row>
			<i @click="back" class="fa fa-reply" id="icon" onmouseover="this.style.color='#333333'" onmouseout="this.style.color='#009933'"> </i>
			<div class="grid-content">公告-添加新公告</div>
		</el-row>
		<div class="interval"></div>
		<el-row class="affaddForm">
			<el-card>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" id="afficheform">
					<el-form-item label="公告标题" prop="title">
						<el-input v-model="ruleForm.title"></el-input>
					</el-form-item>
					<el-form-item label="添加时间" required>
						<el-col :span="11">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
							<el-form-item prop="date2">
								<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
							</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="公告内容" prop="affcontent">
						<quill-editor id="affContent" ref="myTextEditor" v-model="ruleForm.affcontent" :config="editorOption"></quill-editor>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-row>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor';
	export default {
		components: {
			quillEditor
		},
		data() {
			return {
				ruleForm: {
					title: '',
					date1: '',
					date2: '',
					affcontent: ''
				},
				rules: {
					title: [{
							required: true,
							message: '请输入公告名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 100,
							message: '长度在 3 到 100个字符',
							trigger: 'blur'
						}
					],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					affcontent: [{
						required: true,
						message: '请填写公告内容',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			back() {
				const self = this;
				self.$router.push('/afficheInf');
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			onEditorChange({
				editor,
				html,
				text
			}) {
				this.content = html;
			}
		},
		computed: {
			editor() {
				return this.$refs.myTextEditor.quillEditor;
			}
		}
	}
</script>

<style>
	.grid-content {
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		padding: 0 20px;
		border-bottom: 1px solid #97A8BE;
	}
	
	.interval {
		height: 20px;
	}
	
	.affaddForm {
		padding: 10px 30px 10px 30px;
	}
	
	#icon {
		font-size: 30px;
		color: #009933;
		opacity: 0.33;
		float: left;
		line-height: 60px;
	}
	
	#afficheform {
		display: inline-block;
		padding-left: 50px;
		padding-right: 50px;
	}
	
	#affContent {
		height: 150px;
	}
</style>