<template>
	<div class="afficheAddPage">
		<el-row>
			<i @click="back" class="fa fa-reply" id="icon" onmouseover="this.style.color='#333333'" onmouseout="this.style.color='#009933'"> </i>
			<div class="grid-content">广告-编辑广告</div>
		</el-row>
		<div class="interval"></div>
		<el-row class="adsEditForm">
			<el-card>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" id="form">
					<el-form-item label="轮播图描述" prop="title">
						<el-input v-model="ruleForm.title"></el-input>
					</el-form-item>
					<el-form-item label="图片序号" prop="sequence">
						<el-input v-model="ruleForm.sequence"></el-input>
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
					<el-form-item label="轮播图图片" prop="adspicture" id="picture">
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog v-model="dialogVisible" size="tiny">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即更改</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值，且轮播图仅有5张，序号为1至5'));
          } else {
            if (value < 1 || value > 5) {
              callback(new Error('轮播图仅有5张，序号为1至5'));
            } else {
              callback();
            }
          }
        }, 100);
      };
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				ruleForm: {
					title: '',
					date1: '',
					date2: '',
					affcontent: ''
				},
				rules: {
					title: [{
							required: true,
							message: '请输入轮播图描述',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 100,
							message: '长度在 3 到 100个字符',
							trigger: 'blur'
						}
					],
					sequence: [{
						validator:checkAge,
						trigger: 'blur'
					}],
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
					adspicture: [{
						required: true,
						message: '请上传图片',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			back() {
				const self = this;
				self.$router.push('/Ads');
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
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
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
	
	.adsEditForm {
		padding: 10px 30px 10px 30px;
	}
	
	#icon {
		font-size: 30px;
		color: #009933;
		opacity: 0.33;
		float: left;
		line-height: 60px;
	}
	
	#form {
		display: inline-block;
		padding-left: 250px;
		padding-right: 50px;
	}
	
	#picture {
		height: 150px;
	}
	
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #20a0ff;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>