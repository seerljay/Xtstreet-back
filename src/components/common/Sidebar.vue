<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <el-menu-item index="home">
                <i class="fa fa-home"></i><span>首页</span>
            </el-menu-item>
            <el-submenu index="ads">
                <template slot="title"><i class="fa fa-desktop"></i><span>广告</span></template>
                <el-menu-item index="ads">广告列表</el-menu-item>
            </el-submenu>
            <el-submenu index="goods">
                <template slot="title"><i class="fa fa-shopping-bag"></i><span>商品</span></template>
                <el-menu-item index="goodsSort">商品分类</el-menu-item>
            </el-submenu>
            <el-submenu index="affiche">
                <template slot="title"><i class="fa fa-newspaper-o"></i><span>公告</span></template>
                <el-menu-item index="afficheInf">公告列表</el-menu-item>
            </el-submenu>
            <el-submenu index="check">
                <template slot="title"><i class="fa fa-check"></i><span>审核</span></template>
                <el-menu-item index="goodsCheck">商品管理</el-menu-item>
                <el-menu-item index="shopCheck">商铺审核</el-menu-item>
            </el-submenu>  
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .el-menu {
    	opacity: 0.3;
    	height: auto;
    	z-index: 999;
    }
    span {
    	padding-left: 1em;
    }
     .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 65px;
        bottom:0;
        display: block;
        border: 1px solid #97A8BE;
        box-shadow: 2px 1px 2px 0 #97A8BE;
        overflow: auto; 
    }
    ::-webkit-scrollbar{
    	width: 5px;
    	height: 30px;
    }
    ::-webkit-scrollbar-thumb{
    	background: #324057;
    }
</style>
