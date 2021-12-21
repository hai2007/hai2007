/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/entry.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('3');
 // 引入样式

__etcpack__scope_args__=window.__etcpack__getBundle('16');

__etcpack__scope_args__=window.__etcpack__getBundle('17');

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var qCode =__etcpack__scope_args__.default;

QuickPaper.directive('qCode', qCode);
__etcpack__scope_args__=window.__etcpack__getBundle('22');
var fixedScroll =__etcpack__scope_args__.default;

QuickPaper.prototype.$fixedScroll = fixedScroll; // 获取url信息

QuickPaper.prototype.$urlFormat = function () {
  var splitTemp = (window.location.href + "").split('?');
  var routerTemp = (splitTemp[0] + "#").split("#")[1].replace(/^\//, '').replace(/\/$/, '').split('/');
  var paramTemp = splitTemp[1] || "";
  var paramResult, paramArray;

  if (paramTemp == "") {
    paramResult = {};
  } else {
    paramArray = paramTemp.split("&"), paramResult = {};
    paramArray.forEach(function (item) {
      var temp = item.split("=");
      paramResult[temp[0]] = temp[1];
    });
  }

  var resultData = {
    router: routerTemp[0] == '' ? [] : routerTemp,
    params: paramResult
  };
  return resultData;
}; // 在新页签打开新页面


QuickPaper.prototype.$loadPage = function (url) {
  var aDom = document.createElement('a');
  aDom.setAttribute('href', url);
  aDom.setAttribute('target', '_blank');
  aDom.click();
};

__etcpack__scope_args__=window.__etcpack__getBundle('24');
var App =__etcpack__scope_args__.default;
 //根对象

window.quickPaper = new QuickPaper({
  //挂载点
  el: document.getElementById('root'),
  // 启动页面
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/quick-paper.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');

__etcpack__scope_bundle__.default= QuickPaper;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    "use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* quick-paper v1.2.2
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var e=Object.prototype.toString;function t(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":e.call(t)}var n=function(e,n){return null!==n&&"object"===_typeof(n)&&e.indexOf(n.nodeType)>-1&&!function(e){if(null===e||"object"!==_typeof(e)||"[object Object]"!=t(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}(n)},r=function(e){var n=_typeof(e);return"string"===n||"object"===n&&null!=e&&!Array.isArray(e)&&"[object String]"===t(e)},o=function(e){if(!function(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(e))return!1;var n=t(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n};function i(e){/^[_$]/.test(e)&&console.error("The beginning of _ or $ is not allowed："+e)}var s=1;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!r(e))return{type:"component",options:e,attrs:{},children:[]};for(var s in t)/^@/.test(s)?o[s.replace(/^@/,"q-on:")]=t[s]:/^:/.test(s)?o["q-bind"+s]=t[s]:o[s]=t[s];for(var a,c=0;c<n.length;c++)a=n[c],r(a)?/\{\{[^}]+\}\}/.test(a)?i.push({type:"bindText",content:('" '+a+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):i.push({type:"text",content:a}):i.push(a);return{type:"none",tagName:e,attrs:o,children:i}}function c(e){for(var t=(e+"").toLowerCase(),n=(e+"").toUpperCase(),r="",o=!1,i=0;i<e.length;i++)"-"!=e[i]?o?(r+=n[i],o=!1):r+=t[i]:o=!0;return r}var l=Object.prototype.toString;var p=function(e){var t=_typeof(e);return"string"===t||"object"===t&&null!=e&&!Array.isArray(e)&&"[object String]"===function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l.call(e)}(e)},u=function(e){return Array.isArray(e)},f={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},d=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],h=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function v(e,t,n){t=t.trim();var r=-1,o=null,i=function(){return o=r++<t.length-1?t[r]:null},s=function(e){return t.substring(r,e+r>t.length?t.length:e+r)};i();for(var a=[];!(r>=t.length);)if(d.indexOf(o)>-1)if(["&","|","="].indexOf(o)>-1)if(["==="].indexOf(s(3))>-1)a.push(s(3)),r+=2,i();else{if(!(["&&","||","=="].indexOf(s(2))>-1))throw new Error("Illegal expression : "+t+"\nstep='analyseExpress',index="+r);a.push(s(2)),r+=1,i()}else["!=="].indexOf(s(3))>-1?(a.push(s(3)),r+=2,i()):[">=","<=","!="].indexOf(s(2))>-1?(a.push(s(2)),r+=1,i()):(a.push(o),i());else if(['"',"'"].indexOf(o)>-1){var c="",l=o;for(i();o!=l;){if(r>=t.length)throw new Error("String unclosed error : "+t+"\nstep='analyseExpress',index="+r);c+=o,i()}a.push(c+"@string"),i()}else if(/\d/.test(o)){var u="no";c=o;for(i();r<t.length;){if(/\d/.test(o))c+=o,"error"==u&&(u="yes");else{if("."!=o||"no"!=u)break;c+=o,u="error"}i()}"error"==u&&(c+="0"),a.push(+c)}else if(["null","true"].indexOf(s(4))>-1)a.push({null:null,true:!0}[s(4)]),r+=3,i();else if(["false"].indexOf(s(5))>-1)a.push({false:!1}[s(5)]),r+=4,i();else if(["undefined"].indexOf(s(9))>-1)a.push({undefined:void 0}[s(9)]),r+=8,i();else if(f.blankReg.test(o))do{i()}while(f.blankReg.test(o)&&r<t.length);else{var v=!1;if("."==o&&(v=!0,i()),!f.identifier.test(o))throw new Error("Illegal express : "+t+"\nstep='analyseExpress',index="+r);for(var y=1;r+y<=t.length&&f.identifier.test(s(y));)y+=1;if(v)a.push("["),a.push(s(y-1)+"@string"),a.push("]");else{var _=s(y-1),g=_ in n?n[_]:e[_];a.push(p(g)?g+"@string":g)}r+=y-2,i()}for(var b=0,m=0;m<a.length;m++)["+","-"].indexOf(a[m])>-1&&(0==m||h.indexOf(a[b-1])>-1)?(a[b++]=+(a[m]+a[m+1]),m+=1):a[b++]=a[m];return a.length=b,a}var y=function(e){return"string"==typeof e?e.replace(/@string$/,""):e};function _(e){for(var t,n=0,r=0;r<e.length;r++)"!"==e[r]?e[n]=!e[++r]:e[n]=e[r],n+=1;if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"*"==e[r]?e[n-1]=y(e[n-1])*y(e[++r]):"/"==e[r]?e[n-1]=y(e[n-1])/y(e[++r]):"%"==e[r]?e[n-1]=y(e[n-1])%y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"+"==e[r]?e[n-1]="string"==typeof(t=y(e[n-1])+y(e[++r]))?t+"@string":t:"-"==e[r]?e[n-1]=y(e[n-1])-y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)">"==e[r]?e[n-1]=y(e[n-1])>y(e[++r]):"<"==e[r]?e[n-1]=y(e[n-1])<y(e[++r]):"<="==e[r]?e[n-1]=y(e[n-1])<=y(e[++r]):">="==e[r]?e[n-1]=y(e[n-1])>=y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"=="==e[r]?e[n-1]=y(e[n-1])==y(e[++r]):"==="==e[r]?e[n-1]=y(e[n-1])===y(e[++r]):"!="==e[r]?e[n-1]=y(e[n-1])!=y(e[++r]):"!=="==e[r]?e[n-1]=y(e[n-1])!==y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"&&"==e[r]?(e[n-1]=y(e[n-1])&&y(e[1+r]),r+=1):"||"==e[r]?(e[n-1]=y(e[n-1])||y(e[1+r]),r+=1):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"?"==e[r]?(e[n-1]=y(e[n-1])?y(e[r+1]):y(e[r+3]),r+=3):e[n++]=e[r];if(1==n)return y(e[0]);throw e.length=n,new Error("Unrecognized expression : ["+e.toString()+"]")}var g=function(e){for(var t=!0;t;){t=!1;for(var n=[],r=[],o=!1,i=0;i<e.length;i++)if("["==e[i]&&0!=i&&"]"!=e[i-1]){if(o){n.push("[");for(var s=0;s<r.length;s++)n.push(r[s])}else o=!0;r=[]}else if("]"==e[i]&&o){t=!0;var a=_(r),c=n[n.length-1][a];n[n.length-1]=p(c)?c+"@string":c,o=!1}else o?r.push(e[i]):n.push(e[i]);e=n}return e},b=function(e){for(var t=[],n=[],r=0;r<e.length;r++)"["==e[r]?n=[]:"]"==e[r]?t.push(_(n)):n.push(e[r]);return t};function m(e,t,n){var r,o=function e(t,n,r){if(n.indexOf("(")>-1){for(var o=[],i=[],s=0,a=0;a<n.length;a++)if("("==n[a])s>0&&i.push("("),s+=1;else if(")"==n[a]){if(s>1&&i.push(")"),0==(s-=1)){var c=_(e(t,i));o.push(p(c)?c+"@string":c),i=[]}}else s>0?i.push(n[a]):o.push(n[a]);n=o}return g(n)}(e,t);if("["!=o[0])r=[_(o)];else if("]"==o[o.length-1])r=b(o);else{var i=o.lastIndexOf("]"),s=b(o.slice(0,i+1)),a=o.slice(i+1);a.unshift(function(e,t,n){for(var r=(t[0]in n?n[t[0]]:e[t[0]]),o=1;o<t.length;o++)try{r=r[t[o]]}catch(r){throw console.error({target:e,scope:n,expressArray:t,index:o}),r}return r}(e,s,n)),r=[_(a)]}return r}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var x=function(e,t,n){arguments.length<3&&(n={});var r=v(e,t,n),o=m(e,r,n);if(o.length>1)throw new Error("Illegal expression : "+t+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function O(e,t,n){window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function $(e){if(!(this instanceof $))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var t;this._name=e.name||"noname",this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),t=this._el,n([1,9,11],t)&&this.$$mount()}!function(e){e.prototype.$$init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this._options=e,this._uid=s++,this._data=o(e.data)?e.data():e.data,this._el=e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)i(t),this[t]=e.methods[t];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},e.component)this.__componentLib_scope[r]=e.component[r];for(var a in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[a]=e.directive[a]}}($),function(e){e.prototype.$$lifecycle=function(e){o(e)?e():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)>-1&&o(this._options[e])&&this._options[e].call(this)}}($),function(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(a),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function e(t,n,r,o){var i,s=x(t,n);if(s){if("none"==s.type){var a=c(s.tagName);t.__componentLib[a]||t.__componentLib_scope[a]?(s.options=t.__componentLib[a]||t.__componentLib_scope[a],s.type="component"):s.type="tag"}if("component"==s.type){i=document.createElement("quick-paper-component"),r.appendChild(i),s.options.el=i,"render"in s.options||(s.options.render=function(e){return e("quick-paper-component",{},[])}),s.instance=new o(s.options),s.instance.__parent=t;var l={};for(var p in s.attrs)/^data-quickpaper-/.test(p)||(/^:/.test(p)?l[p.replace("q-bind"+p)]=s.attrs[p]:/^@/.test(p)?l[p.replace(p.replace(/^@/,"q-on:"))]=s.attrs[p]:l[p]=s.attrs[p]);var u={attrs:l,instance:s.instance};if("component"==u.instance._name){var f=u.attrs["q-bind:is"];u.instance.lister(o,t[f])}t.__componentTask.push(u)}else if("tag"==s.type){for(var d in i=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==r.nodeName||"Quick-Paper-COMPONENT"==r._nodeName?(b=i,(g=r).parentNode.replaceChild(b,g),t._el=i):r.appendChild(i),s.attrs){var h=s.attrs[d],v=(d+":").split(":"),y=t.__directiveLib[c(v[0])]||t.__directiveLib_scope[c(v[0])];y?t.__directiveTask.push(_objectSpread(_objectSpread({el:i},y),{},{value:h,type:v[1]})):i.setAttribute(d,h)}for(var _=0;_<s.children.length;_++)e(t,n+".children["+_+"]",i,o)}else"text"==s.type?((i=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),r.appendChild(i)):"bindText"==s.type?((i=document.createTextNode("")).textContent=x(t,s.content).replace(/↵/g,"\n"),r.appendChild(i),t.__bindTextTask.push({el:i,content:s.content})):console.error("Type not expected："+s.type);var g,b}else console.error("vnode is undefined!")}(this,"_vnode",this._el,e);for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.inserted)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.inserted(n.el,{target:this,exp:n.value,value:r,type:n.type})}}!function(e){var t=function(t){i(t),o(e[t])&&console.error('Data property "'+t+'" has already been defined as a Method.');var n=e._data[t];e[t]=n,Object.defineProperty(e,t,{get:function(){return n},set:function(t){n=t,e.$$updateComponent()}})};for(var n in e._data)t(n)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.update)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.update(n.el,{target:this,exp:n.value,value:r,type:n.type})}}for(var i=0;i<this.__bindTextTask.length;i++){var s=this.__bindTextTask[i],a=x(this,s.content).replace(/↵/g,"\n");s.el.textContent!=a&&(s.el.textContent=a)}for(var c=0;c<this.__componentTask.length;c++){var l=this.__componentTask[c];if("component"==l.instance._name){var p=l.attrs["q-bind:is"];l.instance.lister(e,this[p])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var t=this.__directiveTask[e];o(t.delete)&&t.delete(t.el,{target:this,exp:t.value,value:x(this,t.value),type:t.type})}this.$$lifecycle("destroyed")}}($),function(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},function(e){e.directive=function(t,n){e.prototype.__directiveLib[t]=n},e.component=function(t,n){e.prototype.__componentLib[t]=n}}(e),function(e){e.use=function(t){t.install.call(t,e)}}(e)}($),$.prototype.$$mount=function(){if(!o(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()};var w=function(e,t){r(t.type)&&t.type.length>0?e.getAttribute(t.type)!=t.value&&e.setAttribute(t.type,t.value):e.value==t.value&&e.textContent==t.value||(e.value=e.textContent=t.value)},j={inserted:w,update:w},k={inserted:function(e,t){for(var n=t.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;O(e,n[0],(function o(i){r.stop&&function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}(i),r.prevent&&function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}(i);var s,a,c,l=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),p=[],u=[];if(l[2]){var f=l[2].replace(/^\(/,"").replace(/\)$/,"").trim();f.length>0&&(u=f.split(","))}for(var d=0;d<u.length;d++){var h=u[d];h=x(t.target,h),p.push(h)}p.push(i),t.target[l[1]].apply(t.target,p),r.once&&(s=e,a=n[0],c=o,window.detachEvent?s.detachEvent("on"+a,c):s.removeEventListener(a,c,!1))}))}},T={inserted:function(e,t){e.value=t.value,O(e,"input",(function(){!function(e,t,n,r){arguments.length<3&&(r={});for(var o=v(e,t,r),i=m(e,o,r),s=e,a=0;a<i.length-1;a++)i[a]in s||(s[i[a]]=u(s)?[]:{}),s=s[i[a]];s[i[i.length-1]]=n}(t.target,"."+t.exp,e.value)}))},update:function(e,t){e.value=t.value}};$.directive("qBind",j),$.directive("qOn",k),$.directive("qModel",T),$.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(e,t){if(t!=this.is&&null!=t){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=t;var r=t;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new e(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}}),"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=$:window.QuickPaper=$}();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('6');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('7');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('14');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "/*!\r\n * 👁️ - 统一不同浏览器的基础样式\r\n * https://github.com/hai2007/style.css/blob/master/normalize.css\r\n *\r\n * author hai2007 < https://hai2007.gitee.io/sweethome >\r\n *\r\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\r\n * Released under the MIT license\r\n *//* 防止iPhone在坚屏转向横屏时放大文字 */\n html{\n\n-ms-text-size-adjust: 100%;\n\n-webkit-text-size-adjust: 100%;\n/* 统一行高 */\nline-height: 1.15;\n\n}\n/* 兼容部分手机下border不显示问题 */\n button, input{\n\nborder: 1px solid #b2b2bd;\n\n}\n/* 修正旧浏览器未定义的块级元素 */\n article, footer, header, nav, section{\n\ndisplay: block;\n\n}\n/* 修正旧浏览器未定义的行内块元素 */\n canvas, svg{\n\ndisplay: inline-block;\n\n}\n/* 统一不同浏览器盒子尺寸计算方法 */\n *{\n\nbox-sizing: border-box;\n\n}\n/* 去掉IE浏览器输入框叉叉和眼睛 */\n ::-ms-clear, ::-ms-reveal{\n\ndisplay: none;\n\n}\n/* 针对火狐浏览器在img标签没有src时候的差异修复 */\n img{\n\ndisplay: inline-block;\n\n}\n/* 设置默认字体为统一的安全字体 */\n html{\n\nfont-family: sans-serif;\n\n}\n/* 默认去掉下划线 */\n a{\n\ntext-decoration: none;\n\n}\n/* 去掉前置索引 */\n li{\n\nlist-style-type: none;\n\n}\n/* 去掉不喜欢的间距 */\n ul, ol, li, p, h1, h2, h3, h4, h5, h6{\n\n-webkit-margin-before: 0;\n\n-webkit-margin-after: 0;\n\n-webkit-padding-start: 0;\n/* 去掉不喜欢的间距，针对火狐浏览器等 */\nmargin-block-end: 0;\n\nmargin-block-start: 0;\n\npadding-inline-start: 0;\n/* 修改IE和其它浏览器不一致问题 */\npadding: 0;\n\nmargin: 0;\n\n}\n/* 去掉默认的8px */\n body{\n\nmargin: 0;\n\n}\n/* 设置默认表格边框合并为一个单一的边框 */\n table{\n\nborder-collapse: collapse;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/assets/style.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/directives/q-code.js
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var OpenWebEditor =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= {
  inserted: function inserted(el, binding) {
    var code = el.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    var owe = new OpenWebEditor({
      // 编辑器挂载点
      el: el,
      // 初始化文本
      content: code,
      // 是否只读
      readonly: binding.type != 'editor',
      // 着色语言
      shader: [binding.exp || 'javascript', {
        insign: "#000000",
        "css": {
          insign: "#000000"
        },
        "javascript": {
          insign: "#000000"
        }
      }],
      // 设置颜色
      color: {
        background: "rgb(239, 235, 234)",

        /*编辑器背景*/
        text: "#000000",

        /*文本颜色*/
        number: "#888484",

        /*行号颜色*/
        edit: "#eaeaf1",

        /*编辑行背景色*/
        cursor: "#ff0000",

        /*光标颜色*/
        select: "gray"
        /*选择背景*/

      },
      // 是否隐藏行号
      // 如果只有一行，就不显示行号(编辑界面一定显示)
      noLineNumber: !/\n/.test(code)
    }); // 添加复制按钮

    var btnNode = xhtml.prepend(el, '<span class="copy-btn" title="复制到剪切板">复制<span></span></span>');
    xhtml.bind(btnNode, 'click', function () {
      owe.copy(function () {
        alert('复制成功');
      }, function (error) {
        console.log(error);
        alert('复制失败');
      });
    });
    xhtml.setStyles(btnNode, _defineProperty({
      position: "absolute",
      right: "10px",
      top: "6px",
      border: "none",
      outline: 0,
      padding: "4p 10p",
      transition: "0.2s",
      "font-size": "12px",
      cursor: "pointer",
      "z-index": 1,
      "line-height": '20px',
      "background-color": "#f8f8f8"
    }, "padding", "5px 10px"));
    el.__owe__ = owe;
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/open-web-editor.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');

__etcpack__scope_bundle__.default= OpenWebEditor;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/open-web-editor/dist/open-web-editor.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
* Open Web Editor - ✍️ An Editor Used on the Browser Side.
* git+https://github.com/hai2007/Open-Web-Editor.git
*
* author 你好2007
*
* version 0.3.2
*
* Copyright (c) 2020-2021 hai2007 走一步，再走一步。
* Released under the MIT license
*
* Date:Tue Jul 20 2021 13:18:10 GMT+0800 (中国标准时间)
*/

"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  'use strict';
  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */

  function _isObject(value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }
  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */


  function _isString(value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  }
  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */


  function _isFunction(value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }
  /**
   * 判断一个值是不是一个朴素的'对象'
   * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
   */


  function _isPlainObject(value) {
    if (value === null || _typeof(value) !== 'object' || getType(value) != '[object Object]') {
      return false;
    } // 如果原型为null


    if (Object.getPrototypeOf(value) === null) {
      return true;
    }

    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  }

  var domTypeHelp = function domTypeHelp(types, value) {
    return value !== null && _typeof(value) === 'object' && types.indexOf(value.nodeType) > -1 && !_isPlainObject(value);
  };

  var isString = _isString; // 引用类型

  var isFunction = _isFunction;

  var isArray = function isArray(input) {
    return Array.isArray(input);
  }; // 结点类型


  var isElement = function isElement(input) {
    return domTypeHelp([1, 9, 11], input);
  };

  var xhtml = {
    // 阻止冒泡
    "stopPropagation": function stopPropagation(event) {
      event = event || window.event;

      if (event.stopPropagation) {
        //这是其他非IE浏览器
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    // 阻止默认事件
    "preventDefault": function preventDefault(event) {
      event = event || window.event;

      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    // 绑定事件
    "bind": function bind(el, eventType, callback) {
      if (window.attachEvent) {
        el.attachEvent("on" + eventType, callback); // 后绑定的先执行
      } else {
        el.addEventListener(eventType, callback, false); // 捕获
      }
    },
    // 触发事件
    "trigger": function trigger(dom, eventType) {
      var event; //创建event的对象实例。

      if (document.createEventObject) {
        // IE浏览器支持fireEvent方法
        event = document.createEventObject();
        dom.fireEvent('on' + eventType, event);
      } // 其他标准浏览器使用dispatchEvent方法
      else {
          event = document.createEvent('HTMLEvents'); // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为

          event.initEvent(eventType, true, false);
          dom.dispatchEvent(event);
        }
    },
    // 变成结点
    "toNode": function toNode(template) {
      var frame = document.createElement("div");
      frame.innerHTML = template;
      var childNodes = frame.childNodes;

      for (var i = 0; i < childNodes.length; i++) {
        if (isElement(childNodes[i])) return childNodes[i];
      }

      return null;
    },
    // 追加结点(内部结尾)
    "appendTo": function appendTo(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.appendChild(node);
      return node;
    },
    // 追加结点(内部开头)
    "prependTo": function prependTo(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.insertBefore(node, el.childNodes[0]);
      return node;
    },
    // 删除结点
    "remove": function remove(el) {
      el.parentNode.removeChild(el);
    },
    // 在被指定元素之后插入结点
    "after": function after(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.parentNode.insertBefore(node, el.nextSibling);
      return node;
    },
    // 修改样式
    "css": function css(el, styles) {
      for (var key in styles) {
        el.style[key] = styles[key];
      }
    },
    // 修改属性
    "attr": function attr(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    },
    // 获取鼠标相对特定元素左上角位置
    "position": function position(el, event) {
      event = event || window.event; // 返回元素的大小及其相对于视口的位置

      var bounding = el.getBoundingClientRect();
      if (!event || !event.clientX) throw new Error('Event is necessary!');
      var temp = {
        // 鼠标相对元素位置 = 鼠标相对窗口坐标 - 元素相对窗口坐标
        "x": event.clientX - bounding.left + el.scrollLeft,
        "y": event.clientY - bounding.top + el.scrollTop
      };
      return temp;
    },
    // 复制到剪切板
    "copy": function copy(text, callback, errorback) {
      var el = this.appendTo(document.body, '<textarea>' + text + '</textarea>'); // 执行复制

      el.select();

      try {
        var result = window.document.execCommand("copy", false, null);

        if (result) {
          if (isFunction(callback)) callback();
        } else {
          if (isFunction(errorback)) errorback();
        }
      } catch (e) {
        if (isFunction(errorback)) errorback(e);
      }

      document.body.removeChild(el);
    }
  }; // 计算文字长度

  function textWidth(text) {
    this.__helpCalcDOM.innerText = text;
    return this.__helpCalcDOM.offsetWidth;
  } // 计算最佳光标左边位置


  function bestLeftNum(x, lineNum) {
    if (arguments.length < 2) lineNum = lineNum || this.__lineNum;
    var text = this._contentArray[lineNum];
    if (x <= 40) return 0;
    if (x - 40 >= this.$$textWidth(text)) return text.length;
    var dist = x - 40,
        i = 1;

    for (; i < text.length; i++) {
      var tempDist = Math.abs(x - 40 - this.$$textWidth(text.substr(0, i)));
      if (tempDist > dist) break;
      dist = tempDist;
    }

    return i - 1;
  } // 计算光标对应的x,y值


  function calcCanvasXY(leftNum, lineNum) {
    return {
      x: this.$$textWidth(this._contentArray[lineNum].substr(0, leftNum)),
      y: lineNum * 21
    };
  } // 判断选区是否为空


  function selectIsNotBlank() {
    return this.__cursor1.lineNum != this.__cursor2.lineNum || this.__cursor1.leftNum != this.__cursor2.leftNum;
  } // 根据内容生成模板


  function toTemplate(line, index, noLineNumber) {
    var _this = this;

    var template = "";
    template += "<div style='min-width: fit-content;white-space: nowrap;line-height:21px;height:21px;'>";
    var lineStyle = noLineNumber ? "font-size:0;" : "";
    template += "<em style='" + lineStyle + "color:" + this._colorNumber + ";user-select: none;display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>" + (index + 1) + "</em>";
    line.forEach(function (text) {
      var contentText = text.content; // 提前对特殊字符进行处理

      contentText = contentText.replace(/\&/g, "&amp;");
      /*[&]*/

      contentText = contentText.replace(/</g, "&lt;");
      contentText = contentText.replace(/>/g, "&gt;");
      /*[<,>]*/

      template += "<span style='user-select: none;font-weight:" + _this._fontWeight + ";white-space: pre;color:" + text.color + "'>" + contentText + "</span>";
    });
    return template + "</div>";
  } // 整理当前输入框信息


  function getInputMessage(owe) {
    return {
      // 光标前面有多少个字符
      leftNum: owe.__leftNum,
      // 当前行之前有多少行
      lineNum: owe.__lineNum,
      // 光标left坐标
      x: owe.__cursorLeft,
      // 光标top坐标
      y: owe.__cursorTop,
      // 一行文本的高
      lineHeight: 21
    };
  } // 初始化结点


  function initDom() {
    var _this2 = this;

    this._el.innerHTML = "";
    xhtml.css(this._el, {
      "font-size": "12px",
      position: "relative",
      cursor: "text",
      "font-family": this._fontFamily,
      "background": this._colorBackground,
      overflow: "auto"
    });
    xhtml.bind(this._el, 'click', function () {
      // 由于有时候点击屏幕的时候，是滚动导致的，因此位置可能没有计算好前聚焦了，导致光标错位
      setTimeout(function () {
        _this2.__focusDOM.focus();
      });
    }); // 辅助计算标签

    this.__helpCalcDOM = xhtml.appendTo(this._el, "<span></span>");
    xhtml.css(this.__helpCalcDOM, {
      position: "absolute",
      "z-index": "-1",
      "white-space": "pre",
      "top": 0,
      "left": 0,
      "color": "rgba(0,0,0,0)",
      "font-weight": this._fontWeight
    }); // 辅助输入标签

    this.__helpInputDOM = xhtml.appendTo(this._el, "<div></div>");
    xhtml.css(this.__helpInputDOM, {
      position: "absolute",
      "z-index": 1
    });
    xhtml.bind(this.__helpInputDOM, 'click', function (event) {
      xhtml.stopPropagation(event);
      xhtml.preventDefault(event);

      _this2.__focusDOM.focus();
    }); // 光标

    this.__focusDOM = xhtml.appendTo(this._el, "<textarea></textarea>");
    xhtml.css(this.__focusDOM, {
      position: "absolute",
      width: "6px",
      "margin-top": "3px",
      height: "15px",
      "line-height": "15px",
      resize: "none",
      overflow: "hidden",
      padding: "0",
      outline: "none",
      border: "none",
      background: "rgba(0,0,0,0)",
      color: this._colorCursor
    });
    xhtml.attr(this.__focusDOM, {
      wrap: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    });

    if (this._readonly) {
      xhtml.attr(this.__focusDOM, {
        readonly: true
      });
    } // 显示区域


    this.__showDOM = xhtml.appendTo(this._el, "<div></div>");
    xhtml.css(this.__showDOM, {
      padding: "10px 0"
    }); // 选中区域

    this.__selectCanvas = xhtml.appendTo(this._el, "<canvas></canvas>");
    xhtml.css(this.__selectCanvas, {
      position: "absolute",
      left: "40px",
      top: "10px",
      opacity: "0.5"
    });
    this.$$updateCanvasSize(1, 1);
  } // 初始化视图


  function initView() {
    // 初始化定位光标位置
    xhtml.css(this.__focusDOM, {
      left: 40 + this.$$textWidth(this._contentArray[this.__lineNum]) + "px",
      top: 10 + this.__lineNum * 21 + "px"
    });
  } // 更新编辑器内容视图


  function updateView() {
    var _this3 = this;

    // 如果有重复利用的行(可复用的过少就不选择这种方法了)
    if (this.__diff && this.__diff.beginNum + this.__diff.endNum > 10) {
      var lineDoms = this.__showDOM.childNodes;
      var lineDoms_length = lineDoms.length; // 先删除无用的行

      /**
       * 这里的删除需要稍微注意一下
       * 因为结点删除以后就没有了，这会导致lineDoms的更新，这也是为什么备份数组长度的原因
       * 倒着删除同样是因为这个原因
       */

      for (var i = lineDoms_length - this.__diff.endNum - 1; i >= this.__diff.beginNum; i--) {
        xhtml.remove(lineDoms[i]);
      } // 追加不足的行


      if (this.__diff.beginNum > 0) {
        for (var _i = this.__formatData.length - 1 - this.__diff.endNum; _i >= this.__diff.beginNum; _i--) {
          xhtml.after(lineDoms[this.__diff.beginNum - 1], this.$$toTemplate(this.__formatData[_i], _i, this._noLineNumber));
        }
      } else {
        // 如果开头没有结点保留，为了简单，我们直接采用prependTo方法追加
        for (var _i2 = this.__formatData.length - this.__diff.endNum - 1; _i2 >= 0; _i2--) {
          xhtml.prependTo(this.__showDOM, this.$$toTemplate(this.__formatData[_i2], _i2, this._noLineNumber));
        }
      } // 更新行号


      lineDoms = this.__showDOM.childNodes;

      for (var _i3 = this.__diff.beginNum; _i3 < this.__formatData.length; _i3++) {
        lineDoms[_i3].getElementsByTagName('em')[0].innerText = _i3 + 1;
      }
    } // 有时候，可能直接替换更快
    else if (this.__diff != "not update") {
        var template = "";

        this.__formatData.forEach(function (line, index) {
          template += _this3.$$toTemplate(line, index, _this3._noLineNumber);
        });

        this.__showDOM.innerHTML = template;
      }

    this.__diff = "not update";
    var tempLineDom = this.__showDOM.childNodes[this.__lineNum]; // 修改当前编辑的行

    if (!this._readonly && this.__lineDom) {
      this.__lineDom.style.backgroundColor = "rgba(0, 0, 0, 0)";
      tempLineDom.style.backgroundColor = this._colorEdit;
    }

    this.__lineDom = tempLineDom;
  } // 更新编辑器选中视图


  function updateSelectView() {
    var _this4 = this;

    var ctx = this.__selectCanvas.getContext('2d');

    ctx.fillStyle = this._colorSelect;
    ctx.clearRect(0, 0, this.__selectCanvas.scrollWidth, this.__selectCanvas.scrollHeight); // 绘制二个区间

    var drawerSelect = function drawerSelect(beginLeftNum, endLeftNum, lineNum) {
      var xy1 = _this4.$$calcCanvasXY(beginLeftNum, lineNum);

      var xy2 = _this4.$$calcCanvasXY(endLeftNum, lineNum); // 如何一行过少，前置一点点选中显示


      if (beginLeftNum == endLeftNum && beginLeftNum == 0) {
        ctx.fillRect(xy1.x, xy1.y, 5, 21);
      } else {
        ctx.fillRect(xy1.x, xy1.y, xy2.x - xy1.x, 21);
      }
    }; // 如果选中区域为空，不用绘制


    if (this.__cursor1.lineNum == this.__cursor2.lineNum && this.__cursor1.leftNum == this.__cursor2.leftNum) return;
    ctx.beginPath(); // 如果在一行

    if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      drawerSelect(this.__cursor1.leftNum, this.__cursor2.leftNum, this.__cursor1.lineNum);
    } // 如果选中的多于一行
    else {
        var beginCursor, endCursor;

        if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
          beginCursor = this.__cursor1;
          endCursor = this.__cursor2;
        } else {
          beginCursor = this.__cursor2;
          endCursor = this.__cursor1;
        } // 绘制开始的结尾


        drawerSelect(beginCursor.leftNum, this._contentArray[beginCursor.lineNum].length, beginCursor.lineNum); // 绘制结束的开头

        drawerSelect(0, endCursor.leftNum, endCursor.lineNum); // 绘制两行之间

        for (var lineNum = beginCursor.lineNum + 1; lineNum < endCursor.lineNum; lineNum++) {
          drawerSelect(0, this._contentArray[lineNum].length, lineNum);
        }
      }
  } // 输入的时候更新光标位置


  function updateCursorPosition() {
    this.__cursorTop = this.__lineNum * 21 + 10;
    this.__cursorLeft = 40 + this.$$textWidth(this._contentArray[this.__lineNum].substring(0, this.__leftNum));
    xhtml.css(this.__focusDOM, {
      top: this.__cursorTop + "px",
      left: this.__cursorLeft + "px"
    });
  } // 更新画布尺寸


  function updateCanvasSize(width, height) {
    if (arguments.length < 2) {
      width = this._el.scrollWidth - 40;
      height = this._el.scrollHeight - 10;
    }

    xhtml.css(this.__selectCanvas, {
      width: width + "px",
      height: height + "px"
    });
    xhtml.attr(this.__selectCanvas, {
      width: width,
      height: height
    });
  } // 取消选区


  function cancelSelect() {
    this.$$updateCanvasSize(1, 1);
    this.__cursor1 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
  } // 删除选区


  function deleteSelect() {
    // 假定cursor2是结束光标
    var beginCursor = this.__cursor2,
        endCursor = this.__cursor1; // 根据行号来校对

    if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
      beginCursor = this.__cursor1;
      endCursor = this.__cursor2;
    } else if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      // 根据列号来校对
      if (this.__cursor1.leftNum < this.__cursor2.leftNum) {
        beginCursor = this.__cursor1;
        endCursor = this.__cursor2;
      }
    }

    var newLineText = this._contentArray[beginCursor.lineNum].substr(0, beginCursor.leftNum) + this._contentArray[endCursor.lineNum].substr(endCursor.leftNum);

    this._contentArray.splice(beginCursor.lineNum, endCursor.lineNum - beginCursor.lineNum + 1, newLineText); // 校对光标和选区


    this.__leftNum = this.__cursor1.leftNum = this.__cursor2.leftNum = beginCursor.leftNum;
    this.__lineNum = this.__cursor1.lineNum = this.__cursor2.lineNum = beginCursor.lineNum;
    this.$$cancelSelect();
  }
  /*!
   * 💡 - 获取键盘此时按下的键的组合结果
   * https://github.com/hai2007/tool.js/blob/master/getKeyString.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // 字典表


  var dictionary = {
    // 数字
    48: [0, ')'],
    49: [1, '!'],
    50: [2, '@'],
    51: [3, '#'],
    52: [4, '$'],
    53: [5, '%'],
    54: [6, '^'],
    55: [7, '&'],
    56: [8, '*'],
    57: [9, '('],
    96: [0, 0],
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9,
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    // 字母
    65: ["a", "A"],
    66: ["b", "B"],
    67: ["c", "C"],
    68: ["d", "D"],
    69: ["e", "E"],
    70: ["f", "F"],
    71: ["g", "G"],
    72: ["h", "H"],
    73: ["i", "I"],
    74: ["j", "J"],
    75: ["k", "K"],
    76: ["l", "L"],
    77: ["m", "M"],
    78: ["n", "N"],
    79: ["o", "O"],
    80: ["p", "P"],
    81: ["q", "Q"],
    82: ["r", "R"],
    83: ["s", "S"],
    84: ["t", "T"],
    85: ["u", "U"],
    86: ["v", "V"],
    87: ["w", "W"],
    88: ["x", "X"],
    89: ["y", "Y"],
    90: ["z", "Z"],
    // 方向
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home",
    // 控制键
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "command",
    92: "command",
    93: "command",
    9: "tab",
    20: "caps lock",
    32: "spacebar",
    8: "backspace",
    13: "enter",
    27: "esc",
    46: "delete",
    45: "insert",
    144: "number lock",
    145: "scroll lock",
    12: "clear",
    19: "pause",
    // 功能键
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    // 余下键
    189: ["-", "_"],
    187: ["=", "+"],
    219: ["[", "{"],
    221: ["]", "}"],
    220: ["\\", "|"],
    186: [";", ":"],
    222: ["'", '"'],
    188: [",", "<"],
    190: [".", ">"],
    191: ["/", "?"],
    192: ["`", "~"]
  }; // 非独立键字典

  var help_key = ["shift", "ctrl", "alt"];
  /**
   * 键盘按键
   * 返回键盘此时按下的键的组合结果
   */

  function getKeyString(event) {
    event = event || window.event;
    var keycode = event.keyCode || event.which;
    var key = dictionary[keycode] || keycode;
    if (!key) return;
    if (key.constructor !== Array) key = [key, key];
    var _key = key[0];
    var shift = event.shiftKey ? "shift+" : "",
        alt = event.altKey ? "alt+" : "",
        ctrl = event.ctrlKey ? "ctrl+" : "";
    var resultKey = "",
        preKey = ctrl + shift + alt;

    if (help_key.indexOf(key[0]) >= 0) {
      key[0] = key[1] = "";
    } // 判断是否按下了caps lock


    var lockPress = event.code == "Key" + event.key && !shift; // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写

    resultKey = preKey + (preKey == '' && lockPress ? key[1] : key[0]);

    if (key[0] == "") {
      resultKey = resultKey.replace(/\+$/, '');
    }

    return resultKey == '' ? _key : resultKey;
  } // 绑定键盘和鼠标等交互事件处理


  function bindEvent() {
    var _this5 = this;

    var mouseDown = false; // 辅助计算选择光标位置

    var calcCursor = function calcCursor(event) {
      var position = xhtml.position(_this5._el, event);
      var topIndex = Math.round((position.y - 20.5) / 21);
      if (topIndex < 0) topIndex = 0;
      if (topIndex >= _this5._contentArray.length) topIndex = _this5._contentArray.length - 1;
      return {
        leftNum: _this5.$$bestLeftNum(position.x, topIndex),
        lineNum: topIndex
      };
    }; // 获取光标之间的内容


    var calcTwoCursor = function calcTwoCursor() {
      // 假定cursor2是结束光标
      var beginCursor = _this5.__cursor2,
          endCursor = _this5.__cursor1; // 根据行号来校对

      if (_this5.__cursor1.lineNum < _this5.__cursor2.lineNum) {
        beginCursor = _this5.__cursor1;
        endCursor = _this5.__cursor2;
      } else if (_this5.__cursor1.lineNum == _this5.__cursor2.lineNum) {
        // 根据列号来校对
        if (_this5.__cursor1.leftNum < _this5.__cursor2.leftNum) {
          beginCursor = _this5.__cursor1;
          endCursor = _this5.__cursor2;
        }

        return _this5._contentArray[beginCursor.lineNum].substring(beginCursor.leftNum, endCursor.leftNum);
      } // 余下的一定是多行


      var resultData = "";
      resultData += _this5._contentArray[beginCursor.lineNum].substr(beginCursor.leftNum) + "\n";

      for (var lineNum = beginCursor.lineNum + 1; lineNum < endCursor.lineNum; lineNum++) {
        resultData += _this5._contentArray[lineNum] + "\n";
      }

      resultData += _this5._contentArray[endCursor.lineNum].substr(0, endCursor.leftNum);
      return resultData;
    }; // 鼠标按下的时候，记录开始光标位置并标记鼠标按下动作


    xhtml.bind(this._el, 'mousedown', function (event) {
      mouseDown = true;
      _this5.__cursor2 = _this5.__cursor1 = calcCursor(event);

      _this5.$$updateCanvasSize(); // 绘制选中效果


      _this5.$$updateSelectView();
    }); // 移动的时候不停的同步结束光标位置

    xhtml.bind(this._el, 'mousemove', function (event) {
      if (!mouseDown) return;
      _this5.__cursor2 = calcCursor(event); // 绘制选中效果

      _this5.$$updateSelectView();
    }); // 鼠标分开或移出的时候，标记鼠标放开

    xhtml.bind(this._el, 'mouseup', function () {
      return mouseDown = false;
    }); // xhtml.bind(this._el, 'mouseout', () => mouseDown = false);
    // 点击编辑界面

    xhtml.bind(this._el, 'click', function (event) {
      _this5.__helpInputDOM.innerHTML = '';
      var position = xhtml.position(_this5._el, event);
      var topIndex = Math.round((position.y - 20.5) / 21); // 如果超过了内容区域

      if (topIndex < 0 || topIndex >= _this5._contentArray.length) return;
      _this5.__lineNum = topIndex;
      _this5.__leftNum = _this5.$$bestLeftNum(position.x);

      _this5.$$updateCursorPosition();

      _this5.$$updateView();
    });

    var update = function update(text) {
      // 获取输入内容
      text = text || _this5.__focusDOM.value;
      text = _this5.$$filterText(text);
      _this5.__focusDOM.value = ""; // 如果有选区，先删除选区

      if (_this5.$$selectIsNotBlank()) _this5.$$deleteSelect(); // 如果输入的是回车，切割文本

      if (/^\n$/.test(text)) {
        if (_this5.__leftNum >= _this5._contentArray[_this5.__lineNum].length) {
          _this5._contentArray.splice(_this5.__lineNum + 1, 0, "");
        } else {
          _this5._contentArray.splice(_this5.__lineNum + 1, 0, _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum));

          _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum);
        }

        _this5.__lineNum += 1;
        _this5.__leftNum = 0;
      } // 否则就是一堆文本（包括复制来的）
      else {
          var textArray = text.split(/\n/);

          if (_this5._contentArray == null) {
            _this5._contentArray = textArray;
            _this5.__lineNum = _this5._contentArray.length - 1;
            _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length;
          } // 如果只有一行文本(分开是为了加速)
          else if (textArray.length <= 1) {
              _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum) + text + _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum);
              _this5.__leftNum += text.length;
            } // 如果是复制的多行文本
            else {
                var _this5$_contentArray;

                // 需要切割的行两边文本
                var leftText = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum);

                var rightText = _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum); // 旧行文本拼接进来


                textArray[0] = leftText + textArray[0];
                textArray[textArray.length - 1] += rightText; // 新内容记录下来

                (_this5$_contentArray = _this5._contentArray).splice.apply(_this5$_contentArray, [_this5.__lineNum, 1].concat(_toConsumableArray(textArray)));

                _this5.__lineNum += textArray.length - 1;
                _this5.__leftNum = textArray[textArray.length - 1].length - rightText.length;
              }
        } // 着色并更新视图


      _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n')));

      _this5.$$updateCursorPosition();

      _this5.$$updateView(); // 通知文本改动


      _this5.__updated__();
    }; // 中文输入开始


    xhtml.bind(this.__focusDOM, 'compositionstart', function () {
      _this5.__needUpdate = false;
      _this5.__focusDOM.style.color = "rgba(0,0,0,0)";
      _this5.__focusDOM.style.borderLeft = '1px solid ' + _this5._colorCursor;
    }); // 中文输入结束

    xhtml.bind(this.__focusDOM, 'compositionend', function () {
      _this5.__needUpdate = true;
      _this5.__focusDOM.style.color = _this5._colorCursor;
      _this5.__focusDOM.style.borderLeft = "none";
      update(); // 辅助输入

      if (_this5.$input != null) _this5.__helpInputEvent = _this5.$input(_this5.__helpInputDOM, getInputMessage(_this5), _this5._contentArray) || {};
    }); // 输入

    xhtml.bind(this.__focusDOM, 'input', function () {
      // 如果是中文输入开始，不应该更新
      if (_this5.__needUpdate) {
        update(); // 辅助输入

        if (_this5.$input != null) _this5.__helpInputEvent = _this5.$input(_this5.__helpInputDOM, getInputMessage(_this5), _this5._contentArray) || {};
      }
    }); // 记录此刻MAC电脑的Command是否按下

    var macCommand = false;
    xhtml.bind(this._el, 'keyup', function (event) {
      var keyStringCode = getKeyString(event);
      if (keyStringCode == 'command') macCommand = false;
    }); // 处理键盘控制

    xhtml.bind(this._el, 'keydown', function (event) {
      var keyStringCode = getKeyString(event);
      if (keyStringCode == 'command') macCommand = true; // 如果Command被按下，就需要补充ctrl以兼容MAC电脑

      if (macCommand && ['a', 'c', 'x'].indexOf(keyStringCode) > -1) {
        keyStringCode = "ctrl+" + keyStringCode;
      } // 辅助输入前置拦截


      if (_this5.__helpInputDOM.innerHTML != '') {
        var __helpInputEvent = _this5.__helpInputEvent[keyStringCode];

        if (isFunction(__helpInputEvent)) {
          // 如果返回true表示继续调用，否则此快捷键结束
          if (!__helpInputEvent()) return;
        } else {
          _this5.__helpInputDOM.innerHTML = '';
        }
      } // 只读模式需要拦截部分快捷键
      // 命令行不拦截


      if (_this5._readonly && ['ctrl+a', 'ctrl+c'].indexOf(keyStringCode) < 0) return; // 进入常规快捷键

      switch (keyStringCode) {
        // 全选
        case "ctrl+a":
          {
            // 修改选区范围
            _this5.__cursor1 = {
              leftNum: 0,
              lineNum: 0
            };
            _this5.__cursor2 = {
              lineNum: _this5._contentArray.length - 1,
              leftNum: _this5._contentArray[_this5._contentArray.length - 1].length
            }; // 绘制选中效果

            _this5.$$updateSelectView();

            break;
          }
        // 复制

        case "ctrl+c":
          {
            if (_this5.$$selectIsNotBlank()) {
              xhtml.copy(calcTwoCursor());

              _this5.__focusDOM.focus();
            }

            break;
          }
        // 剪切

        case "ctrl+x":
          {
            if (_this5.$$selectIsNotBlank()) {
              xhtml.copy(calcTwoCursor());

              _this5.__focusDOM.focus();

              _this5.$$deleteSelect(); // 由于内容改变，需要重新调用着色


              _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n'))); // 更新视图

              _this5.$$updateCursorPosition();

              _this5.$$updateView();

              _this5.$$cancelSelect(); // 通知文本改动


              _this5.__updated__();
            }

            break;
          }
        // 多空格输入或多行移位

        case "tab":
          {
            // tab用来控制输入多个空格，默认事件需要禁止
            xhtml.stopPropagation(event);
            xhtml.preventDefault(event); // 计算空格

            var blanks = "";

            for (var i = 0; i < _this5._tabSpace; i++) {
              blanks += " ";
            } // 如果有选区，特殊处理


            if (_this5.$$selectIsNotBlank()) {
              var beginLineNum = _this5.__cursor1.lineNum,
                  endLineNum = _this5.__cursor2.lineNum;

              if (beginLineNum > endLineNum) {
                beginLineNum = _this5.__cursor2.lineNum;
                endLineNum = _this5.__cursor1.lineNum;
              } // 在开头追究tab


              for (var lineNum = beginLineNum; lineNum <= endLineNum; lineNum++) {
                _this5._contentArray[lineNum] = blanks + _this5._contentArray[lineNum];
              } // 校对选择区域


              _this5.__cursor1.leftNum += _this5._tabSpace;
              _this5.__cursor2.leftNum += _this5._tabSpace; // 校对光标

              _this5.__leftNum += _this5._tabSpace;
              _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n')));

              _this5.$$updateCursorPosition();

              _this5.$$updateView();

              _this5.$$updateCanvasSize();

              _this5.$$updateSelectView(); // 通知文本改动


              _this5.__updated__();
            } else {
              update(blanks);
            }

            break;
          }
        // 光标向上

        case "up":
          {
            // 如果是第一行不需要任何处理
            if (_this5.__lineNum <= 0) return; // 向上一行

            _this5.__lineNum -= 1;
            _this5.__leftNum = _this5.$$bestLeftNum(_this5.$$textWidth(_this5._contentArray[_this5.__lineNum + 1].substr(0, _this5.__leftNum)) + 40);

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect();

            _this5._el.scrollTop -= 21;
            break;
          }
        // 光标向下

        case "down":
          {
            if (_this5.__lineNum >= _this5._contentArray.length - 1) return; // 向下一行

            _this5.__lineNum += 1;
            _this5.__leftNum = _this5.$$bestLeftNum(_this5.$$textWidth(_this5._contentArray[_this5.__lineNum - 1].substr(0, _this5.__leftNum)) + 40);

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect();

            _this5._el.scrollTop += 21;
            break;
          }
        // 光标向左

        case "left":
          {
            if (_this5.__leftNum <= 0) {
              if (_this5.__lineNum <= 0) return;
              _this5.__lineNum -= 1;
              _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length;
            } else {
              _this5.__leftNum -= 1;
            }

            _this5.$$updateCursorPosition();

            _this5.$$cancelSelect();

            break;
          }
        // 光标向右

        case "right":
          {
            if (_this5.__leftNum >= _this5._contentArray[_this5.__lineNum].length) {
              if (_this5.__lineNum >= _this5._contentArray.length - 1) return;
              _this5.__lineNum += 1;
              _this5.__leftNum = 0;
            } else {
              _this5.__leftNum += 1;
            }

            _this5.$$updateCursorPosition();

            _this5.$$cancelSelect();

            break;
          }
        // 删除

        case "backspace":
          {
            // 如果有选区
            if (_this5.$$selectIsNotBlank()) {
              // 删除选区
              _this5.$$deleteSelect();
            } // 无选区的常规操作
            else {
                if (_this5.__leftNum <= 0) {
                  if (_this5.__lineNum <= 0) return;
                  _this5.__lineNum -= 1;
                  _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length; // 一行的开头应该删除本行（合并到前一行）

                  _this5._contentArray[_this5.__lineNum] += _this5._contentArray[_this5.__lineNum + 1];

                  _this5._contentArray.splice(_this5.__lineNum + 1, 1);
                } else {
                  _this5.__leftNum -= 1;
                  _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum) + _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum + 1);
                }
              } // 由于内容改变，需要重新调用着色


            _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n'))); // 更新视图

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect(); // 通知文本改动


            _this5.__updated__();

            break;
          }
      }
    });
  } // 判断一行是否匹配


  var euqalLine = function euqalLine(line1, line2) {
    if (line1.length != line2.length) return false;

    for (var i = 0; i < line1.length; i++) {
      if (line1[i].content != line2[i].content || line1[i].color != line2[i].color) return false;
    }

    return true;
  };
  /**
   * 为了加速页面渲染，我们引入差异对比
   * 简单的理解就是：
   * 原本在数据改变的时候直接更新整个DOM的方式替换成只功能必要的DOM
   */


  function diff(newFormatData) {
    /**
     * 思路：
     * 
     * 从开始匹配无法匹配的，匹配条个数记作beginNum
     * 再从结尾匹配无法匹配的，匹配条个数记作endNum
     * 只有begin和end之间的数据需要更新DOM
     * 
     * 当然，也有特殊情况，因此在进行回归前，先把特殊情况提取处理
     * 
     */
    var oldFormatData = this.__formatData;

    if (oldFormatData) {
      // 寻找开始匹配行数
      var beginNum = 0;

      for (var i = 0; i < oldFormatData.length && i < newFormatData.length; i++) {
        if (!euqalLine(oldFormatData[i], newFormatData[i])) {
          break;
        }

        beginNum += 1;
      } // 寻找结束匹配行数


      var endNum = 0;

      for (var _i4 = 1; _i4 <= oldFormatData.length && _i4 <= newFormatData.length; _i4++) {
        if (!euqalLine(oldFormatData[oldFormatData.length - _i4], newFormatData[newFormatData.length - _i4])) {
          break;
        }

        endNum += 1;
      }

      var minLength = Math.min(oldFormatData.length, newFormatData.length); // 校对(如果复用重叠了)

      if (beginNum + endNum >= minLength) {
        endNum = minLength - beginNum - 1; // 由于不知道是删除还是增加，因此可能出现负数

        if (endNum < 0) endNum = 0;
      } // 对比以后的差异信息


      this.__diff = {
        beginNum: beginNum,
        endNum: endNum
      };
    }

    return newFormatData;
  } // 外来文本统一过滤处理


  function filterText(oralStr) {
    // 把tab统一变成空格
    var tab = "";

    for (var i = 0; i < this._tabSpace; i++) {
      tab += " ";
    }

    return oralStr.replace(/\t/g, tab);
  }

  function _inner_CSS_shader(textString, colors) {
    var shaderArray = []; // 当前面对的

    var i = 0; // 获取往后n个值

    var nextNValue = function nextNValue(n) {
      return textString.substring(i, n + i > textString.length ? textString.length : n + i);
    };

    var template = ""; // 1:选择器 tag
    // 2:属性名 attr
    // 3:属性值 string

    var state = "tag"; // 初始化模板，开始文本捕获

    var initTemplate = function initTemplate() {
      if (template != "") {
        shaderArray.push({
          color: {
            tag: colors.selector,
            attr: colors.attrKey,
            string: colors.attrValue
          }[state],
          content: template
        });
      }

      template = "";
    };

    while (true) {
      /* 1.注释 */
      if (nextNValue(2) == '/*') {
        initTemplate();

        while (nextNValue(2) !== '*/' && i < textString.length) {
          template += textString[i++];
        }

        shaderArray.push({
          color: colors.annotation,
          content: template + nextNValue(2)
        });
        i += 2;
        template = "";
      }
      /* 2.字符串 */
      else if (["'", '"'].indexOf(nextNValue(1)) > -1) {
          var strBorder = nextNValue(1);
          initTemplate();

          do {
            template += textString[i++];
          } while (nextNValue(1) != strBorder && i < textString.length); // 因为可能是没有字符导致的结束


          if (nextNValue(1) != strBorder) {
            strBorder = "";
          } else {
            i += 1;
          }

          shaderArray.push({
            color: colors.attrValue,
            content: template + strBorder
          });
          template = "";
        }
        /* 3.边界 */
        else if ([":", '{', '}', ";"].indexOf(nextNValue(1)) > -1) {
            initTemplate();
            shaderArray.push({
              color: colors.insign,
              content: nextNValue(1)
            });
            template = "";

            if (nextNValue(1) == '{' || nextNValue(1) == ';') {
              state = 'attr';
            } else if (nextNValue(1) == '}') {
              state = 'tag';
            } else {
              state = 'string';
            }

            i += 1;
          }
          /* 追加字符 */
          else {
              if (i >= textString.length) {
                initTemplate();
                break;
              } else {
                template += textString[i++];
              }
            }
    }

    return shaderArray;
  } // JS关键字


  var keyWords = ["abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"];

  function _inner_ES_shader(textString, colors) {
    var shaderArray = []; // 当前面对的

    var i = 0; // 获取往后n个值

    var nextNValue = function nextNValue(n) {
      return textString.substring(i, n + i > textString.length ? textString.length : n + i);
    };

    var template = ""; // 初始化模板，开始文本捕获

    var initTemplate = function initTemplate() {
      if (template != "") {
        // 考虑开始的(
        if (template[0] == '(') {
          shaderArray.push({
            color: colors.insign,
            content: "("
          });
          template = template.substr(1);
        }

        shaderArray.push({
          color: colors.text,
          content: template
        });
      }

      template = "";
    };

    while (true) {
      /* 1.注释1 */
      if (nextNValue(2) == '/*') {
        initTemplate();

        while (nextNValue(2) !== '*/' && i < textString.length) {
          template += textString[i++];
        }

        shaderArray.push({
          color: colors.annotation,
          content: template + nextNValue(2)
        });
        i += 2;
        template = "";
      }
      /* 2.注释2 */
      else if (nextNValue(2) == '//') {
          initTemplate();

          while (nextNValue(1) !== '\n' && i < textString.length) {
            template += textString[i++];
          }

          shaderArray.push({
            color: colors.annotation,
            content: template
          });
          template = "";
        }
        /* 3.字符串 */
        else if (["'", '"', '`'].indexOf(nextNValue(1)) > -1) {
            var strBorder = nextNValue(1);
            initTemplate();

            do {
              template += textString[i++];
            } while (nextNValue(1) != strBorder && i < textString.length); // 因为可能是没有字符导致的结束


            if (nextNValue(1) != strBorder) {
              strBorder = "";
            } else {
              i += 1;
            }

            shaderArray.push({
              color: colors.string,
              content: template + strBorder
            });
            template = "";
          }
          /* 4.函数定义 */
          else if (nextNValue(1) == '(' && (template[0] == ' ' || i - template.length - 1 >= 0 && textString[i - template.length - 1] == " ")) {
              shaderArray.push({
                color: colors.funName,
                content: template
              });
              i += 1;
              template = "(";
            }
            /* 5.方法调用 */
            else if (nextNValue(1) == '(') {
                shaderArray.push({
                  color: colors.execName,
                  content: template
                });
                i += 1;
                template = "(";
              }
              /* 6.边界 */
              else if ([";", '{', '}', '(', ')', '.', '\n', '=', '+', '>', '<', '[', ']', '-', '*', '/', '^', '*', '!'].indexOf(nextNValue(1)) > -1) {
                  initTemplate();
                  shaderArray.push({
                    color: colors.insign,
                    content: nextNValue(1)
                  });
                  template = "";
                  i += 1;
                }
                /* 7.关键字 */
                else if (nextNValue(1) == ' ' && keyWords.indexOf(template.trim()) > -1) {
                    shaderArray.push({
                      color: colors.key,
                      content: template + " "
                    });
                    template = "";
                    i += 1;
                  }
                  /* 追加字符 */
                  else {
                      if (i >= textString.length) {
                        initTemplate();
                        break;
                      } else {
                        template += textString[i++];
                      }
                    }
    }

    return shaderArray;
  }

  function _inner_HTML_shader(textString, colors) {
    var shaderArray = []; // 当前面对的

    var i = 0; // 获取往后n个值

    var nextNValue = function nextNValue(n) {
      return textString.substring(i, n + i > textString.length ? textString.length : n + i);
    };

    var template = ""; // 初始化模板，开始文本捕获

    var initTemplate = function initTemplate() {
      if (template != "") {
        shaderArray.push({
          color: colors.text,
          content: template
        });
      }

      template = "";
    }; // 匹配属性值模板


    var getAttrValueTemplate = function getAttrValueTemplate() {
      var endStr = " "; // 寻找属性值边界

      if (nextNValue(1) == '"') endStr = '"';
      if (nextNValue(1) == "'") endStr = "'"; // 到达边界前一直寻找下一个

      do {
        template += textString[i++];
      } while (nextNValue(1) != endStr && i < textString.length); // 如果是匹配成功而不是匹配到末尾


      if (endStr != " " && i < textString.length) {
        template += endStr;
        i += 1;
      }

      shaderArray.push({
        color: colors.attrValue,
        content: template
      });
      template = "";
    };

    while (true) {
      /* 1.注释 */
      if (nextNValue(4) == '<!--') {
        initTemplate();

        while (nextNValue(3) !== '-->' && i < textString.length) {
          template += textString[i++];
        }

        shaderArray.push({
          color: colors.annotation,
          content: template + nextNValue(3)
        });
        i += 3;
        template = "";
      }
      /* 2.</ */
      else if (nextNValue(2) == '</') {
          initTemplate();
          shaderArray.push({
            color: colors.insign,
            content: "</"
          });
          i += 2;

          while (nextNValue(1) !== '>' && i < textString.length) {
            template += textString[i++];
          }

          if (template != "") {
            shaderArray.push({
              color: colors.node,
              content: template
            });
            template = "";

            if (i < textString.length) {
              shaderArray.push({
                color: colors.insign,
                content: ">"
              });
              i += 1;
            }
          }
        }
        /* 3.< */
        else if (nextNValue(1) == '<' && nextNValue(2) != '< ') {
            var specialTag = "";
            initTemplate();
            shaderArray.push({
              color: colors.insign,
              content: "<"
            });
            i += 1; // 寻找标签名称

            while (nextNValue(1) != '>' && nextNValue(1) != ' ' && i < textString.length) {
              template += textString[i++];
            }

            if (template != '') {
              // 针对style和script这样特殊的标签，内部需要调用对应的着色器着色
              if (template == "style" || template == 'script') {
                specialTag = "</" + template + ">";
              }

              shaderArray.push({
                color: colors.node,
                content: template
              });
              template = '';

              if (i < textString.length) {
                // 寻找标签属性
                while (i < textString.length) {
                  // 遇到这个表示标签结束了
                  // 也就意味着标签匹配结束
                  if (nextNValue(1) == ">") {
                    initTemplate();
                    shaderArray.push({
                      color: colors.insign,
                      content: ">"
                    });
                    i += 1;
                    break;
                  } // 如果是空格，表示是属性之间，接着查看下一个即可
                  else if (nextNValue(1) != ' ') {
                      initTemplate(); // 匹配属性名称

                      if (nextNValue(1) != '"' && nextNValue(1) != "'") {
                        // 如果不是=或>和空格就继续
                        while (nextNValue(1) != "=" && nextNValue(1) != '>' && i < textString.length && nextNValue(1) != " ") {
                          template += textString[i++];
                        }

                        if (template != "") {
                          shaderArray.push({
                            color: colors.attrKey,
                            content: template
                          });
                          template = ""; // 如果下一个是=，就接着找属性值

                          if (nextNValue(1) == '=') {
                            shaderArray.push({
                              color: colors.insign,
                              content: "="
                            });
                            i += 1;

                            if (i < textString.length && nextNValue(1) != " " && nextNValue(1) != '>') {
                              // 寻找属性值
                              getAttrValueTemplate();
                            }
                          }
                        } else {
                          template += textString[i++];
                        }
                      } else if (nextNValue(1) == '=') {
                        shaderArray.push({
                          color: colors.insign,
                          content: "="
                        });
                        i += 1;
                      } else {
                        if (i < textString.length && nextNValue(1) != " " && nextNValue(1) != '>') {
                          getAttrValueTemplate();
                        }
                      }
                    } else {
                      template += textString[i++];
                    }
                }
              }
            }

            if (specialTag != "") {
              var oldI = i,
                  oldTemplate = template,
                  langHelp,
                  innerShaderArray;

              while (nextNValue(specialTag.length) != specialTag && i < textString.length) {
                template += textString[i++];
              }

              if (i < textString.length) {
                langHelp = specialTag.replace(/<\//, '');
                innerShaderArray = {
                  "style>": _inner_CSS_shader,
                  "script>": _inner_ES_shader
                }[langHelp](template, {
                  "style>": colors._css,
                  "script>": colors._javascript
                }[langHelp]);
                innerShaderArray.forEach(function (innerShader) {
                  shaderArray.push(innerShader);
                });
                template = "";
              } else {
                template = oldTemplate;
                i = oldI;
              }
            }
          }
          /* 追加字符 */
          else {
              if (i >= textString.length) {
                initTemplate();
                break;
              } else {
                template += textString[i++];
              }
            }
    }

    return shaderArray;
  } // 合并内容


  var toShaderReult = function toShaderReult(words) {
    var resultData = [[]],
        lineNum = 0;
    words.forEach(function (word) {
      var codeArray = word.content.split(/\n/),
          index;
      resultData[lineNum].push({
        color: word.color,
        content: codeArray[0]
      });

      for (index = 1; index < codeArray.length; index++) {
        lineNum += 1;
        resultData.push([]);
        resultData[lineNum].push({
          color: word.color,
          content: codeArray[index]
        });
      }
    });
    return resultData;
  }; // 初始化配置文件


  var initConfig = function initConfig(init, data) {
    var key;

    for (key in data) {
      try {
        init[key] = data[key];
      } catch (e) {
        throw new Error("Illegal property value！");
      }
    }

    return init;
  };

  var _deafultColors_html = {
    "text": "#000000",

    /*文本颜色*/
    "annotation": "#6a9955",

    /*注释颜色*/
    "insign": "#ffffff",

    /*符号颜色*/
    "node": "#1e50b3",

    /*结点颜色*/
    "attrKey": "#1e83b1",

    /*属性名称颜色*/
    "attrValue": "#ac4c1e"
    /*属性值颜色*/

  };
  var _deafultColors_css = {
    "annotation": "#6a9955",

    /*注释颜色*/
    "insign": "#ffffff",

    /*符号颜色*/
    "selector": "#1e50b3",

    /*选择器*/
    "attrKey": "#1e83b1",

    /*属性名称颜色*/
    "attrValue": "#ac4c1e"
    /*属性值颜色*/

  };
  var _deafultColors_javascript = {
    "text": "#000000",

    /*文本颜色*/
    "annotation": "#6a9955",

    /*注释颜色*/
    "insign": "#ffffff",

    /*符号颜色*/
    "key": "#ff0000",

    /*关键字颜色*/
    "string": "#ac4c1e",

    /*字符串颜色*/
    "funName": "#1e50b3",

    /*函数名称颜色*/
    "execName": "#1e83b1"
    /*执行方法颜色*/

  };

  function innerShader(lang, colors) {
    colors = colors || {};

    var _inner_shader, _inner_colors;

    if (lang == 'html') {
      colors._css = initConfig(_deafultColors_css, colors.css);
      colors._javascript = initConfig(_deafultColors_javascript, colors.javascript);
      _inner_colors = initConfig(_deafultColors_html, colors);
      _inner_shader = _inner_HTML_shader;
    } else if (lang == 'css') {
      _inner_colors = initConfig(_deafultColors_css, colors);
      _inner_shader = _inner_CSS_shader;
    } else if (lang == 'javascript') {
      _inner_colors = initConfig(_deafultColors_javascript, colors);
      _inner_shader = _inner_ES_shader;
    } else {
      throw new Error('Language not supported:' + lang + ",The languages available include: html、css、javascript!");
    }

    return function (textString) {
      return toShaderReult(_inner_shader(textString, _inner_colors));
    };
  }

  var owe = function owe(options) {
    var _this6 = this;

    if (!(this instanceof owe)) {
      throw new Error('Open-Web-Editor is a constructor and should be called with the `new` keyword');
    }
    /**
     *
     * [格式化配置]
     *
     * 所有的配置校验和默认值设置等都应该在这里进行
     * 经过这里处理以后，后续不需要再进行校验了
     * 因此这里的内容的更改一定要慎重
     *
     */
    // 编辑器挂载点


    if (isElement(options.el)) {
      // 着色器
      var shader = function shader() {
        var resultData = [];

        _this6._contentArray.forEach(function (text) {
          resultData.push([{
            content: text,
            color: _this6._colorText
          }]);
        });

        return resultData;
      }; // 格式化


      var format = function format(textString) {
        return textString;
      };

      this._el = options.el;
      this._el.owe_terminal = 'none'; // 公共配置

      options.color = options.color || {};
      this._colorBackground = options.color.background || "#d6d6e4";
      /*编辑器背景*/

      this._colorText = options.color.text || "#000000";
      /*普通文本颜色*/

      this._colorNumber = options.color.number || "#888484";
      /*行号颜色*/

      this._colorEdit = options.color.edit || "#eaeaf1";
      /*编辑行颜色*/

      this._colorCursor = options.color.cursor || "#ff0000";
      /*光标颜色*/

      this._colorSelect = options.color.select || "#6c6cf1";
      /*选择背景*/

      this._fontFamily = options["font-family"] || "新宋体";
      /*字体*/

      this._fontWeight = options["font-weight"] || 600;
      /*字重*/

      this._tabSpace = options.tabSpace || 4;
      /*设置一个tab表示多少个空格*/

      this._readonly = options.readonly || false;
      /*是否只读*/

      this._noLineNumber = options.noLineNumber || false;
      /*是否隐藏行号*/
      // 文本

      this._contentArray = isString(options.content) ? (this.$$filterText(options.content) + "").split("\n") : [""]; // 着色方法

      this.$shader = isFunction(options.shader) ? options.shader : isArray(options.shader) ? innerShader.apply(void 0, _toConsumableArray(options.shader)) : shader; // 格式化方法

      this.$format = isFunction(options.format) ? options.format : format; // 辅助输入

      this.$input = isFunction(options.input) ? options.input : null;
    } else {
      // 挂载点是必须的，一定要有
      throw new Error('options.el is not a element!');
    } // 先初始化DOM


    this.$$initDom(); // 初始化控制变量

    this.__needUpdate = true;
    this.__lineNum = this._contentArray.length - 1;
    this.__leftNum = this._contentArray[this.__lineNum].length;
    this.__cursor1 = this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__formatData = this.$$diff(this.$shader(this._contentArray.join('\n'))); // 初始化视图

    this.$$initView(); // 更新视图

    this.$$updateView(); // 绑定操作

    this.$$bindEvent();

    this.__updated__ = function () {}; // 编辑器管理的文本发生改变后会主动触发callback方法


    this.updated = function (callback) {
      _this6.__updated__ = callback;
    }; // 获取当前编辑器代码


    this.valueOf = function (content) {
      if (content || content == '') {
        // 先删除内容
        _this6._contentArray = null; // 输入以触发更新

        _this6.__focusDOM.value = content;
        xhtml.trigger(_this6.__focusDOM, 'input');

        _this6.__focusDOM.focus();
      }

      return _this6._contentArray.join('\n');
    }; // 在当前光标位置输入新的内容


    this.input = function () {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var cursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      // 先删除多余的内容
      if (cursor != 0) {
        if (number != 0) {
          _this6._contentArray[_this6.__lineNum] = _this6._contentArray[_this6.__lineNum].substring(0, _this6.__leftNum + cursor) + _this6._contentArray[_this6.__lineNum].substring(_this6.__leftNum + cursor + number);
        } // 修改光标位置


        _this6.__leftNum += cursor;
      } // 输入以触发更新


      _this6.__focusDOM.value = content;
      xhtml.trigger(_this6.__focusDOM, 'input');

      _this6.__focusDOM.focus();
    }; // 格式化代码


    this.format = function () {
      // 格式化内容
      _this6._contentArray = _this6.$format(_this6._contentArray.join('\n'), _this6._tabSpace).split('\n');
      _this6.__lineNum = _this6._contentArray.length - 1;
      _this6.__leftNum = _this6._contentArray[_this6.__lineNum].length; // 着色

      _this6.__formatData = _this6.$$diff(_this6.$shader(_this6._contentArray.join('\n'))); // 更新视图

      _this6.$$updateView(); // 更新光标位置


      _this6.$$initView();
    }; // 复制当前编辑器代码到电脑剪切板


    this.copy = function (callback, errorback) {
      xhtml.copy(_this6.valueOf(), callback, errorback);
    };
  }; // 挂载辅助方法


  owe.prototype.$$textWidth = textWidth;
  owe.prototype.$$bestLeftNum = bestLeftNum;
  owe.prototype.$$calcCanvasXY = calcCanvasXY;
  owe.prototype.$$selectIsNotBlank = selectIsNotBlank;
  owe.prototype.$$filterText = filterText;
  owe.prototype.$$toTemplate = toTemplate; // 挂载核心方法

  owe.prototype.$$initDom = initDom;
  owe.prototype.$$initView = initView;
  owe.prototype.$$updateView = updateView;
  owe.prototype.$$updateSelectView = updateSelectView;
  owe.prototype.$$updateCursorPosition = updateCursorPosition;
  owe.prototype.$$updateCanvasSize = updateCanvasSize;
  owe.prototype.$$cancelSelect = cancelSelect;
  owe.prototype.$$deleteSelect = deleteSelect;
  owe.prototype.$$bindEvent = bindEvent; // 性能优化系列方法

  owe.prototype.$$diff = diff;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = owe;
  } else {
    window.OpenWebEditor = owe;
  }
})();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('23');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (fixed, overValue) {
  overValue = overValue || 60;
  var element = document.getElementById('root-view');

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/animation.js
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = [];
//唯一定时器的定时间隔
var $interval = 13;
//指定了动画时长duration默认值
var $speeds = 400;
//定时器ID
var $timerId = null;

/*!
 * 💡 - 动画轮播
 * https://github.com/hai2007/tool.js/blob/master/animation.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
__etcpack__scope_bundle__.default= function (doback, duration, callback) {

    // 如果没有传递时间，使用内置默认值
    if (arguments.length < 2) duration = $speeds;

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('Tick is required!');
            }
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            $timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!$timerId) {
                $timerId = setInterval(clock.tick, $interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime, needStop,
                timers = $timers;
            $timers = [];
            $timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;
                needStop = false;

                //执行
                passTime = (+new Date() - createTime) / duration;
                if (passTime >= 1) {
                    needStop = true;
                }
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    $timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if ($timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if ($timerId) {
                clearInterval($timerId);
                $timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in $timers) {
            if ($timers[i].id == id) {
                $timers[i].id = undefined;
                return;
            }
        }
    };

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('25');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('29');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('26');
var uiSearch =__etcpack__scope_args__.default;


    __etcpack__scope_bundle__.default= {
        data() {
            return {

            };
        },
        mounted() {

            // 获取url信息
            console.log(this.$urlFormat());

        },
        methods: {

        },
        component: {
            uiSearch
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('27');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('28');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-04c380ac":""},[createElement('input',{"placeholder":"输入内容后回车查询","@keydown":"goSearch","q-model":"wd","data-quickpaper-04c380ac":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper?QuickPaper&type=script&lang=js&hash=04c380ac
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                wd: ""
            };
        },
        methods: {
            goSearch(event) {

                // 如果是回车就带着数据跳转到查询界面
                if (event.keyCode == 13) this.loadPage("https://hai2007.gitee.io/sweethome/#/search?wd=" + encodeURIComponent(this.wd));

            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper?QuickPaper&type=style&lang=css&hash=04c380ac
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-04c380ac]{\n\ndisplay: inline-block;\n\n}\n\n input[data-quickpaper-04c380ac]{\n\nheight: 30px;\n\nborder: none;\n\noutline: none;\n\npadding: 0 10px;\n\npadding-right: 35px;\n\nbackground-image: url('../assets/search.svg');\n\nbackground-position: center right;\n\nbackground-repeat: no-repeat;\n\nborder-radius: 3px;\n\nbackground-color: rgb(243 240 240);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();