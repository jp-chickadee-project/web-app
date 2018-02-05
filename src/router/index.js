import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import BirdList from '@/components/birds/List';
import VisitsPage from '@/components/visits/Index';
import ErrorPageNotFound from '@/components/errors/PageNotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/birds', component: BirdList },
    { path: '/visits', component: VisitsPage },
    { path: '*', component: ErrorPageNotFound },
  ],
});
