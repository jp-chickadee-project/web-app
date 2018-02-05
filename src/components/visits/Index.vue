<template>
  <div>
    <input
      placeholder="rfid"
      v-model="targetRfid"
      v-on:input="filter">
    <list-detail
      v-for="visit in selectedVisits"
      :key="visit.rfid"
      :visit="visit"/>
  </div>
</template>

<script>
import Api from './../../api';
import ListDetail from './ListDetail';

export default {
  components: {
    ListDetail,
  },
  name: 'visits-table',

  data() {
    return {
      targetRfid: '',
      visits: [],
      selectedVisits: [],
    };
  },

  created() {
    Api.get('/visits/')
      .then((visits) => {
        this.visits = visits;
      })
      .catch(() => {});
  },

  methods: {
    filter() {
      this.selectedVisits = this.visits.filter(this.shouldIncludeVisit);
    },

    shouldIncludeVisit(aVisit) {
      return aVisit.rfid.includes(this.targetRfid);
    },
  },
};
</script>

<style scoped></style>
