import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTableDynamic from 'vue-table-dynamic'

Vue.config.productionTip = false
Vue.use(VueTableDynamic)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
