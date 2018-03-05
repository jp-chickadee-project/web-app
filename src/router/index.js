import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage';

import VisitsPage from '@/components/visits/list/Index';
import FeedersPage from '@/components/feeders/list/Index';

import BirdProfilePage from '@/components/birds/profile/Index';
import FeederProfilePage from '@/components/feeders/profile/Index';

import ErrorPageNotFound from '@/components/errors/PageNotFound';

import BirdsPage from '@/components/birds/Page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/birds', component: BirdsPage },
    { path: '/visits', component: VisitsPage },
    { path: '/feeders', component: FeedersPage },
    {
      path: '/birds/:rfid',
      component: BirdProfilePage,
      props: route => ({ rfid: route.params.rfid }),
    },
    {
      path: '/feeders/:id',
      component: FeederProfilePage,
      props: route => ({ id: route.params.id }),
    },
    { path: '*', component: ErrorPageNotFound },
  ],
});
