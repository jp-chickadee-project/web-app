<template lang="pug">
div
  FeederBiography(:feeder="feeder")
  VisitList(:visits="visits" :isLoading="isLoadingVisits")
</template>

<script>
import Api from '@/api';
import VisitList from '@/components/organisms/VisitList';
import FeederBiography from './FeederBiography';

export default {
  props: ['id'],
  components: {
    FeederBiography,
    VisitList,
  },
  name: 'FeederProfile',
  data() {
    return {
      feeder: {},
      visits: [],
    };
  },
  created() {
    const URL = `/visits/latest?limit=50&feederID=${this.id}`;
    this.isLoadingVisits = true;
    Api.get(URL)
      .then((visits) => {
        this.isLoadingVisits = false;
        this.visits = visits;
      })
      .catch(() => {});

    Api.get(`/feeders/${this.id}`)
      .then((feeder) => {
        this.feeder = feeder;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
