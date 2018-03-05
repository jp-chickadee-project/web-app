<template lang='pug'>
div
  BirdProfile(:bird='bird')
</template>

<script>
import Api from '@/api';
import BirdProfile from './Profile';
import DefaultBird from '@/defaults/Bird';

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
    const URL = `/visits/latest?limit=50&rfid=${this.rfid}`;
    this.isLoadingVisits = true;
    Api.get(URL)
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
