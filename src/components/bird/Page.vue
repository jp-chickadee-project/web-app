<template lang='pug'>
div
  BirdProfile(:bird='bird')
</template>

<script>
import Api from '@/api';
import DefaultBird from '@/defaults/Bird';

import BirdProfile from './Profile';

export default {
  props: ['rfid'],
  components: {
    BirdProfile,
  },
  name: 'BirdPage',
  data() {
    return {
      bird: DefaultBird,
      visits: [],
    };
  },
  created() {
    this.isLoadingVisits = true;
    Api.get('/visits/latest', {
      params: {
        rfid: this.rfid,
        limit: 50,
      },
    })
      .then((visits) => {
        this.isLoadingVisits = false;
        this.visits = visits;
      })
      .catch(() => {});

    Api.get(`/birds/${this.rfid}`)
      .then((bird) => {
        this.bird = bird;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
