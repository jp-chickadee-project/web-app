import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/pages/HomePage';
import VisitsPage from '@/components/pages/VisitsPage';
import BirdsPage from '@/components/pages/BirdsPage';
import FeedersPage from '@/components/pages/FeedersPage';
import BirdProfilePage from '@/components/pages/BirdProfilePage';
import FeederProfilePage from '@/components/pages/FeederProfilePage';
import ErrorNotFoundPage from '@/components/pages/ErrorNotFoundPage';

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
    { path: '*', component: ErrorNotFoundPage },
  ],
});
