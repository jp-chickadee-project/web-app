<template>
  <div>
    <input
      placeholder="rfid"
      v-on:input="filter($event.target.value)">
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
      visits: [],
      selectedVisits: [],
    };
  },

  created() {
    Api.get('/visits/')
      .then((visits) => {
        this.visits = visits;
        console.log(this.visits);
      })
      .catch(() => {});
  },

  methods: {
    filter: function(targetRfid) {
      this.selectedVisits = this.visits.filter((v) => {
        return v.rfid.includes(targetRfid);
      });
      console.log(this.selectedVisits);
      this.$emit('input', targetRfid);
    }
  },

  shouldInclude(aVisit) {
    return aVisit.rfid.includes(this.targetRfid);
  },
};
</script>

<style scoped></style>
