import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/vue',
  routes: [
    {
      path: '/',
      component: () => import('@/components/List'),
      children: [],
    },
    {
      path: '/detail',
      component: () => import('@/components/Detail'),
      children: [],
    },
  ],
});
