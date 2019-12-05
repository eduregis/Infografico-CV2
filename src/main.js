import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import CallToAction from './pages/CallToAction.vue'
import ChooseState from './pages/ChooseState.vue'
import Test from './pages/Test.vue'

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
    path: '/geral',
    component: ChooseState
  },
  {
    name: 'Test',
    path: '/teste',
    component: Test
  },  
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  router,    
  render: h => h(App),
}).$mount('#app')
