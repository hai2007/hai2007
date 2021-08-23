import Vue from 'vue';

// https://www.npmjs.com/package/vue-input-check
import inputCheck from 'vue-input-check';

// 安装
Vue.use(inputCheck, {

    // 自定义交易规则
    validate: [

        // 举个例子        
        {

            // 规则的名称
            name: "yourvalidatename",

            // 校验方法
            test: function (el, val) {
                return !val || /^\d{3,4}\-\d{7}$/.test(val);
            },

            // 错误提示
            message: function (el, name) {
                return name + '输入非法，应该是一个固定号码';
            }

        }

    ]
});