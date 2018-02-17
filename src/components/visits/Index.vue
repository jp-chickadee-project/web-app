<template lang="pug">
div
  form(id="form")
    div(class="row")
      div(class="col")
        label(for="filterByRfid") filter by rfid
        input(
          class="form-control"
          id="filterByRfid"
          placeholder="rfid"
          v-model="targetRfidString"
          v-on:input="filter")
      div(class="col")
  visit-list(:visits="aListOfSelectedVisits")
</template>

<script>
import Api from './../../api';
import ListDetail from './ListDetail';

export default {
  components: {
    ListDetail,
  },
  name: 'visit-page',

  data() {
    return {
      targetRfidString: '',
      aListOfVisits: [],
      aListOfSelectedVisits: [],
    };
  },

  created() {
    Api.get('/visits/?start=1492873308&end=1492879900')
      .then((response) => {
        this.aListOfVisits = response.data;
        console.log(this.aListOfVisits);
        this.filter();
      })
      .catch(() => {});
  },

  methods: {
    filter() {
      this.aListOfSelectedVisits = this.aListOfVisits.filter(this.shouldIncludeVisit);
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
