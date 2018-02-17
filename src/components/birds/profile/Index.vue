<template lang="pug">
div
  bird-profile-detail(:bird="bird")
  visit-list(:visits="visits" :isLoading="isLoadingVisits")
</template>

<script>
import Api from '@/api';
import VisitList from '@/components/visits/list/VisitList';
import BirdProfileDetail from './BirdProfileDetail';

export default {
  props: ['rfid'],
  components: {
    BirdProfileDetail,
    VisitList,
  },
  name: 'bird-profile',
  data() {
    return {
      bird: {},
      visits: [],
    };
  },
  created() {
    const URL = `/birds/${this.rfid}?start=1492863308&end=1492879900`;
    this.isLoadingVisits = true;
    Api.get(URL)
      .then((response) => {
        this.isLoadingVisits = false;
        console.log(response.data);
        this.visits = response.data;
      })
      .catch(() => {});

    Api.get(`/birds/${this.rfid}`)
      .then((response) => {
        console.log(response.data);
        this.bird = response.data;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
