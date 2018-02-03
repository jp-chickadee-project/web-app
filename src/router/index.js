import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import BirdList from '@/components/birds/List';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/birds', component: BirdList },
  ],
});
