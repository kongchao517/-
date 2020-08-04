// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import { Grid, GridItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Grid).use(GridItem);


Vue.use(ElementUI)

/* eslint-disable no-new */
window.onresize = setHtmlFontSize;
function setHtmlFontSize() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
