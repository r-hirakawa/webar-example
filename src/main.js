import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// [Workaround] Vue.js で A-Frame のタグに対するエラーが表示される問題.
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-entity',
  'a-marker',
  'a-nft',
  'a-camera',
  'a-cursor',
  'a-image',
  'a-text',
  'a-plane'
];

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
