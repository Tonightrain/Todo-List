import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'ant-design-vue';
import router from './router'

Vue.use(Icon)

Vue.config.productionTip = false

Vue.prototype.$goRoute = function (index: any) {
  this.$router.push(index)
}

new Vue({
  render: h => h(App)
}).$mount('#app')

