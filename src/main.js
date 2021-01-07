import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

// [Workaround] Vue.js で A-Frame のタグに対するエラーが表示される問題.
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-entity',
  'a-marker',
  'a-nft',
  'a-camera',
  'a-image',
  'a-text',
  'a-plane'
];

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
