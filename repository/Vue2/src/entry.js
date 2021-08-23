import Vue from 'vue';

// 引入兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入启动界面
import App from './App.vue';

// 引入基础和公共样式
import '@hai2007/style/normalize.css';
import './style/common.css'

// 引入全局变量
import store from './store/index';

// 引入路由文件
import router from './router';

// 引入$remote请求服务
import remote from './service/remote'; Vue.use(remote);

// 引入表单校验
import './validate/index';

// 引入公共指令
import './directive/dragdrop';

// 安装扩展方法
import method from './extend/method'; Vue.use(method);

//根对象
window.vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用store
    store,

    // 启用路由
    router,

    // 启动vue
    render: createElement => createElement(App)

});
