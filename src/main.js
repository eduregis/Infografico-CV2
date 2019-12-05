import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import CallToAction from './pages/CallToAction.vue'
import ChooseState from './pages/ChooseState.vue'
import Page2 from './pages/Page2.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const routes = [
  {
    name: 'CallToAction',
    path: '/',
    component: CallToAction
  },
  {
    name: 'ChooseState',
    path: '/chooseState',
    component: ChooseState
  },
  {
    name: 'Page2',
    path: '/page2',
    component: Page2
  },  
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  router,    
  render: h => h(App),
}).$mount('#app')
