import Vue from 'vue'
import VueRouter from 'vue-router'
import { Product, Customer, Transaction, Provider, Employee } from '../components/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/san-pham',
    name: 'Product',
    component: Product,
    props: {
      title: "Sản phẩm"
    }
  }, {
    path: '/khach-hang',
    name: 'Customer',
    component: Customer,
    props: {
      title: "Khách hàng"
    }
  }, {
    path: '/giao-dich',
    name: 'Transaction',
    component: Transaction,
    props: {
      title: "Giao dịch"
    }
  }, {
    path: '/cung-cap',
    name: 'Provider',
    component: Provider,
    props: {
      title: "Nhà cung cấp"
    }
  }, {
    path: '/nhan-vien',
    name: 'Employee',
    component: Employee,
    props: {
      title: "Nhân viên"
    }
  }
]
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
