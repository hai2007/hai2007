
let config = {

    /**
     * 系统配置
     * ------------------
     */



    /**
     * $remote请求配置
     * ------------------
     */

    // 超时时间
    "timeout": 10000,

    // 请求头
    "headers": {
        "Content-Type": "application/json;charset=utf-8"
    },

    // 请求上下文
    "baseURL": "",

    // 请求成功拦截
    "requestBack": config => {
        return config;
    },

    // 请求失败拦截
    "requestErrorBack": error => {
        return Promise.reject(error);
    },

    // 响应成功拦截
    "responseBack": (response, callback, errorback) => {
        return Promise.resolve(response);
    },

    // 响应失败拦截
    "responseErrorBack": (error, callback, errorback) => {

        if (error && error.response) {

            switch (error.response.status) {
                case 400:
                    error.message = '请求错误';
                    break
                case 401:
                    error.message = '未授权，请登录';
                    break
                case 403:
                    error.message = '拒绝访问';
                    break
                case 404:
                    error.message = '找不到该地址: ' + error.response.config.url;
                    break
                case 408:
                    error.message = '请求超时';
                    break
                case 501:
                    error.message = '服务未实现';
                    break
                case 502:
                    error.message = '网关错误';
                    break
                case 503:
                    error.message = '服务不可用';
                    break
                case 505:
                    error.message = 'HTTP版本不受支持';
                    break
                default:
                    break
            }

            vm.alert(error.response.data.ERRINF || error.message || "未知错误", error.response.data.ERRMSG || '请求出错');


        } else {
            vm.alert('超过' + config.timeout + "ms未响应，请求已经取消");
        }

        return Promise.reject(error);
    },

    /**
     * 外设配置
     * ------------------
     */

    /**
     * 快捷键配置
     * ---------------------
     */

};

export default config;
