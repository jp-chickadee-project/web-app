<template lang="pug">
div
  form(id="form")
    div
      label(for="filterByRfid") filter by rfid
      input(
        class="form-control"
        id="filterByRfid"
        placeholder="rfid"
        v-model="targetRfidString"
        v-on:input="filter")
  visit-list(:visits="selectedVisits")
</template>

<script>
import Api from '@/api';
import VisitList from './VisitList';

export default {
  components: {
    VisitList,
  },
  name: 'visit-page',

  data() {
    return {
      targetRfidString: '',
      selectedVisits: [],
      visits: [],
    };
  },

  created() {
    Api.get('/visits/?start=1492873308&end=1492879900')
      .then((response) => {
        this.visits = response.data;
        console.log(this.visits);
        this.filter();
      })
      .catch(() => {});
  },

  methods: {
    filter() {
      this.selectedVisits = this.visits.filter(this.shouldIncludeVisit);
    },

    shouldIncludeVisit(aVisit) {
      return aVisit.rfid.includes(this.targetRfidString);
    },
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
