import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
  import('@/components/Home')
const mine = () =>
  import('@/components/mine')
const order = () =>
  import('@/components/order')
const search = () =>
  import('@/components/search')
const site = () =>
  import('@/components/site')
const login = () =>
  import('@/components/login')
const searchAddress = () =>
  import('@/components/searchAddress')
const foodsearch = () =>
  import('@/components/foodsearch')
const foodfen = () =>
  import('@/components/foodfen')
const details = () =>
  import('@/components/details')
const cookieseek = () =>
  import('@/components/cookieseek')
  const ResetPassword = () =>
    import('@/components/ResetPassword')
const xiangqing = () =>
  import('@/components/xiangqing')
const shangping = () =>
  import('@/components/shangping')
Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,

    },
    {
      path: '/order',
      name: 'order',
      component: order,
    }, {
      path: '/search',
      name: 'search',
      component: search,
    }, {
      path: '/mine',
      name: 'mine',
      component: mine,
    }, {
      path: '/site',
      name: 'site',
      component: site,
    }, {
      path: '/login',
      name: 'login',
      component: login,
    }, {
      path: '/searchAddress',
      name: 'searchAddress',
      component: searchAddress,
    }, {
      path: '/foodsearch',
      name: 'foodsearch',
      component: foodsearch,
    }, {
      path: '/foodfen',
      name: 'foodfen',
      component: foodfen,
    }, {
      path: '/details',
      name: 'details',
      component: details,
    }
    , {
      path: '/cookieseek',
      name: 'cookieseek',
      component: cookieseek,
    }, {
      path: '/ResetPassword',
      name: 'ResetPassword',
      component: ResetPassword,
    }
    , {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing,
    }
      , {
      path: '/shangping',
        name: 'shangping',
        component: shangping,
    }

  ]
})
