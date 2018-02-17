import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import BirdList from '@/components/birds/list/BirdList';
import BirdProfile from '@/components/birds/Profile';
import VisitsPage from '@/components/visits/list/Index';
import ErrorPageNotFound from '@/components/errors/PageNotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/birds', component: BirdList },
    { path: '/visits', component: VisitsPage },
    { path: '/birds/:rfid',
      component: BirdProfile,
      props: route => ({ rfid: route.params.rfid }),
    },
    { path: '*', component: ErrorPageNotFound },
  ],
});
