import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'ant-design-vue';
import router from './router'
import store from './store/store'

Vue.use(Icon)

Vue.config.productionTip = false

//路由跳转
Vue.prototype.$goRoute = function (index: any) {
  this.$router.push(index)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

