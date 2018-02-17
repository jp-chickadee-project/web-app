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
  VisitList(:visits="selectedVisits" :isLoading="isLoading")
</template>

<script>
import Api from '@/api';
import VisitList from './VisitList';

export default {
  components: {
    VisitList,
  },
  name: 'VisitsPage',

  data() {
    return {
      targetRfidString: '',
      selectedVisits: [],
    };
  },

  created() {
    this.isLoading = true;
    Api.get('/visits/?start=1492873308&end=1492879900')
      .then((response) => {
        this.isLoading = false;
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
