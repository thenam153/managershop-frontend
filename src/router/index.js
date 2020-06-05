import Vue from 'vue'
import VueRouter from 'vue-router'
import { Product, Customer, Transaction, Provider, Employee, TransactionDetail, Login } from '../components/index'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/san-pham',
    name: 'Product',
    component: Product,
    props: {
      title: "Sản phẩm"
    },
    meta: {
      requireAuth: true
    }
  }, 
  {
    path: '/khach-hang',
    name: 'Customer',
    component: Customer,
    props: {
      title: "Khách hàng"
    },
    meta: {
      requireAuth: true
    }
  }, 
  {
    path: '/tao-giao-dich',
    name: 'Transaction',
    component: Transaction,
    props: {
      title: "Giao dịch"
    },
    meta: {
      requireAuth: true
    }
  }, 
  {
    path: '/cung-cap',
    name: 'Provider',
    component: Provider,
    props: {
      title: "Nhà cung cấp"
    },
    meta: {
      requireAuth: true
    }
  }, 
  {
    path: '/nhan-vien',
    name: 'Employee',
    component: Employee,
    props: {
      title: "Nhân viên"
    },
    meta: {
      requireAuth: true
    }
  }, 
  {
    path: '/giao-dich',
    name: 'Details',
    component: TransactionDetail,
    props: {
      title: "Chi tiết giao dịch"
    },
    meta: {
      requireAuth: true
    }
  }, 
  {
    path: '/dang-nhap',
    name: 'Login',
    component: Login, 
    props: {
      title: "Đăng nhập"
    }
  }, 
  {
    path: '/',
    name: 'Login',
    component: Login, 
    props: {
      title: "Đăng nhập"
    }, 
    beforeEnter(to, from, next) {
      if(store.state.login) {
        return next({path: '/san-pham'})
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(store.state.login) {
    return next();
  }
  if(to.meta.requireAuth ) {
    return next({path: '/dang-nhap'})
  }
  next()
})
export default router
