import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant'
import './assets/icon/iconfont.css'
import 'vant/lib/index.css'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.config.productionTip = false
import _ from 'lodash'
Vue.prototype._ = _ // 使用 this._.debounce(this.handleClick,1000,false)
import axios from 'axios'
Vue.prototype.$axios=axios
import {
  Lazyload
} from 'vant';
Vue.use(Lazyload);
Vue.use(ElementUI)

Vue.use(Vant)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
