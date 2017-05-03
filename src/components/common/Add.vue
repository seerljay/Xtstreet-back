<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
	import vHead from './Header.vue';
	import vSidebar from './Sidebar.vue'
	export default {
		components: {
			vHead,
			vSidebar
		}
	}
</script>

<style>
	.wrapper {
		background-image: url(../../assets/bg-home1.jpg);
		background-size: 100% 100%;
	}
</style>