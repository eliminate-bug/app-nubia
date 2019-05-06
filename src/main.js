import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import router from './router/index'
import * as $http from './requests/index'

Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$http = $http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
