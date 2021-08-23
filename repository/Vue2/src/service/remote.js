import config from '../config';

/**
 * xhr请求
 */
import axios from "axios";

let commonConfig = {

    // 超时时间
    timeout: config.timeout,

    // 请求头
    headers: config.headers,

    // 请求上下文
    baseURL: config.baseURL

};

//发送请求拦截
axios.interceptors.request.use(
    // 成功
    config.requestBack,
    // 失败
    config.requestErrorBack
);

// 导出方法提供给项目使用
export default {
    install(Vue) {
        Vue.prototype.$remote = {

            // GET请求
            /*
            this.get(url)
            this.get(url,callback)
            this.get(url,callback,errorback)
            this.get(url,callback,conf)
            this.get(url,callback,errorback,conf)
             */
            "get": (url, callback, errorback, conf) => {

                // 参数校对
                if (typeof errorback !== 'function') conf = errorback;

                let _config = {};
                /**
                 * 这里特别解释一下conf是什么意思？
                 * 大部分情况下，请求配置应该都是一致的（比如超时时间或请求header等）
                 * 而为了保证一些特殊交易可以个性化，通过conf实现配置重置
                 * 下同
                 */
                Object.assign(_config, commonConfig, conf);

                axios.get(url, _config).then((response) => {

                    /**
                     * 这里来解释一下公共的回调（或错误回调）和交易中的回调执行问题
                     * 请求的回调和错误回调都可以缺省
                     * 当然，也可以传递（大部分下回调都会有，而错误回调都是用公共的）
                     *
                     * 默认情况下，会先执行交易中的回调或错误回调（当然，没有设置就不会执行），然后执行公共的
                     * 而特殊情况下，如果你不想公共的回调或错误回调执行，只执行交易中的
                     * 很简单
                     * 回调或者错误回调返回true即可
                     */
                    if (typeof callback !== 'function' || !callback(response))
                        config.responseBack(response, callback, errorback, conf);

                }).catch((error) => {

                    if (typeof errorback !== 'function' || !errorback(error))
                        config.responseErrorBack(error, callback, errorback, conf);

                });
            },

            // POST请求
            /*
            this.post(url)
            this.post(url,params)
            this.post(url,params,callback)
            this.post(url,params,callback,errorback)
            this.post(url,params,callback,conf)
            this.post(url,params,callback,errorback,conf)
            */
            "post": (url, params, callback, errorback, conf) => {
                vm.$store.state.loadings.push('nouse');

                // 参数校对
                if (typeof errorback !== 'function') conf = errorback;



                let _config = {};
                Object.assign(_config, commonConfig, conf);

                axios.post(url, params || {}, _config).then((response) => {
                    vm.$store.state.loadings.shift();

                    // 如果没有默认回调或者有默认回调，可是返回false
                    // 这是为了方便交易中的回调可以控制公共回调是否执行
                    if (typeof callback !== 'function' || !callback(response))
                        config.responseBack(response, callback, errorback);

                }).catch((error) => {
                    vm.$store.state.loadings.shift();

                    if (typeof errorback !== 'function' || !errorback(error))
                        config.responseErrorBack(error, callback, errorback);

                });

            }
        };
    }
};
