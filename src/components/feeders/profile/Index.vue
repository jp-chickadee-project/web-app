<template lang="pug">
div
  FeederBiography(:feeder="feeder")
  VisitList(:visits="visits" :isLoading="isLoadingVisits")
</template>

<script>
import Api from '@/api';
import VisitList from '@/components/visits/list/VisitList';
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
    const URL = `/visits?feederID=${this.id}&start=1492863308&end=1492879900`;
    this.isLoadingVisits = true;
    Api.get(URL)
      .then((response) => {
        this.isLoadingVisits = false;
        this.visits = response.data;
        console.log(this.visits);
      })
      .catch(() => {});

    Api.get(`/feeders/${this.id}`)
      .then((response) => {
        this.feeder = response.data;
        console.log(this.feeder);
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
