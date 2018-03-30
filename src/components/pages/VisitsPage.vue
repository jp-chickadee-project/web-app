<template lang="pug">
<v-container>
  <v-layout row wrap>
    RecentVisitsGraph
  </v-layout>
  VisitList(:visits="visits" :isLoading="isLoading")
</v-container>
</template>

<script>
import Api from '@/api';
import VisitList from '@/components/organisms/VisitList';
import RecentVisitsGraph from '@/components/organisms/RecentVisitsGraph';

export default {
  components: {
    VisitList,
    RecentVisitsGraph,
  },
  name: 'VisitsPage',

  data() {
    return {
      visits: [],
    };
  },

  created() {
    this.isLoading = true;
    Api.get('/visits/latest?limit=30')
      .then((visits) => {
        this.isLoading = false;
        this.visits = visits;
      })
      .catch(() => {});
  },
};
</script>

<style scoped>
#form {
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
