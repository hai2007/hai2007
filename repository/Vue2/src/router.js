import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{

        // 首页
        path: '/home',
        component: () => import('./pages/home.vue')

    },  {

        // 默认路由
        path: "/*",
        redirect: 'home'

    }]
});
