<template>
	<div class="header">
		<div class="navigator">
			<el-row>
				<el-col :span="24">
					<div class="top">
						<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" unique-opened router>
							<div class="one">测试</div>
							<div class="other">
								<el-menu-item index="administration">首页</el-menu-item>
								<el-submenu>
									<template slot="title">{{username}}</template>
									<el-menu-item index="account">账户信息</el-menu-item>
									<el-menu-item index="changepwd">修改密码</el-menu-item>
									<el-menu-item index="login">退出</el-menu-item>
								</el-submenu>
								<el-menu-item index="orderm">订单管理</el-menu-item>
							</div>
						</el-menu>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		computed: {
			username() {
				let username = localStorage.getItem('ms_username');
				return username ? username : this.name;
			},
			onRoutes(){
				localStorage.removeItem('ms_username')
                return this.$route.path.replace('/','');
            }
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped>
	.el-menu {
		z-index: 999;
		background: none;
	}
	
	.top {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 65px;
		font-size: 22px;
		line-height: 65px;
	}
	
	.one {
		float: left;
		width: 250px;
		text-align: center;
		color: #324057;
	}
	
	.other {
		float: right;
		text-align: center;
	}
</style>