<template>
	<div class="footer">
		<el-row theme="dark">
			<el-col :span="24">
				<div class="foot-content">
					这里可以放内容
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style>
	.footer {
		position: fixed;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 22px;
        line-height: 100px;
        background-color:slategray;
	}
	.foot-content {
		text-align: center;
	}
</style>