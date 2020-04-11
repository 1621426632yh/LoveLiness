import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../src/assets/css/common.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import api from './api'
import '../src/assets/iconfont/iconfont.css'
import LoadingMore from "./pages/Find/components/loadingMore.js"
import Tabs from './components/tabs'
import { Tab } from 'vant';


Vue.config.productionTip = false
Vue.prototype.LoadingMore = LoadingMore
Vue.prototype.$video = Video
Vue.prototype.$api = api
Vue.use(Tabs)
Vue.use(Tab)

if (localStorage.getItem('username')){
  store.commit('setToken',true)
}else {
  store.commit('setToken','')

}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
