<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
        <v-foot></v-foot>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vFoot from './Footer.vue';
    export default {
        components:{
            vHead, vFoot
        }
    }
</script>
