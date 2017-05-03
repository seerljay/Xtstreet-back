import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
	    {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
	{
		path: '/administration',
		component: resolve => require(['../components/common/Add.vue'], resolve),
		children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Home.vue'], resolve)
                },
                {
                    path: '/home',
                    component: resolve => require(['../components/page/Home.vue'], resolve)
                },
                   {
                    path: '/afficheInf',
                    component: resolve => require(['../components/page/AfficheInf.vue'], resolve)
                },
                {
                    path: '/afficheAdd',
                    component: resolve => require(['../components/page/AfficheAdd.vue'], resolve)
                },
                {
                    path: '/afficheEdit',
                    component: resolve => require(['../components/page/AfficheEdit.vue'], resolve)
                },
                  {
                    path: '/ads',
                    component: resolve => require(['../components/page/Ads.vue'], resolve)
                },
                   {
                    path: '/adsEdit',
                    component: resolve => require(['../components/page/AdsEdit.vue'], resolve)
                },
                       {
                    path: '/goodsSort',
                    component: resolve => require(['../components/page/GoodsSort.vue'], resolve)
                },
                 {
                    path: '/gsortAdd',
                    component: resolve => require(['../components/page/GsortAdd.vue'], resolve)
                },
                {
                    path: '/gsortEdit',
                    component: resolve => require(['../components/page/GsortEdit.vue'], resolve)
                },
                {
                    path: '/goodsCheck',
                    component: resolve => require(['../components/page/GoodsCheck.vue'], resolve)
                },
                 {
                    path: '/shopCheck',
                    component: resolve => require(['../components/page/shopCheck.vue'], resolve)
                },
		]
	}]
})