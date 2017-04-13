<template>
	<div class="header">
		<div class="navigator">
			<el-row>
				<el-col :span="24">
					<div class="top">
						<el-menu theme="dark":default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
							<div class="one">测试</div>
							<div class="other">
							<el-menu-item index="2">首页</el-menu-item>
							<el-submenu index="3">
								<template slot="title">个人中心</template>
								<el-menu-item index="3-1">账户信息</el-menu-item>
								<el-menu-item index="3-2">修改密码</el-menu-item>
								<el-menu-item index="3-3">注销登陆</el-menu-item>
							</el-submenu>
							<el-menu-item index="4">订单管理</el-menu-item>
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
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
	.top {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
    }
	.one {
		float: left;
		width: 250px;
		text-align: center;
		color:#ffffff;
	}
	.other {
		float: right;
		text-align: center;
	}
</style>