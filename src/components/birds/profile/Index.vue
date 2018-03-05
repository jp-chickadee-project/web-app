<template lang="pug">
div
  BirdBiography(:bird="bird")
  VisitList(:visits="visits" :isLoading="isLoadingVisits")
</template>

<script>
import Api from '@/api';
import VisitList from '@/components/visits/list/VisitList';
import BirdBiography from './BirdBiography';

export default {
  props: ['rfid'],
  components: {
    BirdBiography,
    VisitList,
  },
  name: 'BirdProfile',
  data() {
    return {
      bird: {},
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
