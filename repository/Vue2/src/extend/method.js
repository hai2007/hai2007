/**
 * 配置公共方法
 * ------------------
 */
export default {
    install(Vue) {

        /**
         * 通用的弹框方法
         * ========================
         */

        // 提示信息
        Vue.prototype.alert = function (msg, title, funPos) {

            msg = msg || "未知错误";

            this.$store.state.openDialog(
                "warning",
                ['alert', msg, title || "温馨提示", "确定"],
                function () {
                    if (typeof funPos == 'function') funPos();
                } 
            );
        };

        // 确认信息
        Vue.prototype.confirm = function (title, msg, actionPos, actionNeg, mesPos, mesNeg) {

            if (!title || !msg || typeof actionPos !== 'function') throw Error("Title、Message和积极回调为必传参数！");

            this.$store.state.openDialog(
                "warning",
                ['confirm', msg, title, mesPos || "确定", mesNeg || "取消"],
                function (msg) {
                    if (msg == 'yes') actionPos();
                    else if (msg == 'no' && typeof actionNeg == 'function') actionNeg();
                }
            );
        };

   

 

        /**
         * 辅助方法
         * ========================
         */
       


    }
};
