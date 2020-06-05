import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTableDynamic from 'vue-table-dynamic'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueTableDynamic)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
