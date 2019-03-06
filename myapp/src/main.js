// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$http = axios

//设置axios拦截器，对所有请求在token存在的情况下，在请求头携带token
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
	  if (store.getters.token) {
	    config.headers['token'] = store.getters.token
	  }
	    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})