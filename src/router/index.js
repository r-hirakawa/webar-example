import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import WebAR from '../views/WebAR.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/webar',
    name: 'WebAR',
    component: WebAR
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  /**
   * [Workaround]
   *  概要   : GitHub Pages にデプロイすると Vue Router のリンク先が 404 Not Found となる.
   *  原因   : Vue Router の base の既定値がドメインのルート直下へのデプロイを想定した設定になっている.
   *  回避策 : vue.config.js で設定した publicPath に一致するよう process.env.BASE_URL を設定する.
   */
  base: process.env.BASE_URL,
  routes
});

export default router;
