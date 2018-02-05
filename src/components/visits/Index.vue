<template>
  <div>
    <input
      placeholder="rfid"
      v-model="targetRfidString"
      v-on:input="filter">
    <list-detail
      v-for="aVisit in aListOfSelectedVisits"
      :key="aVisit.rfid"
      :visit="aVisit"/>
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
      targetRfidString: '',
      aListOfVisits: [],
      aListOfSelectedVisits: [],
    };
  },

  created() {
    Api.get('/visits/')
      .then((aListOfVisits) => {
        this.aListOfVisits = aListOfVisits;
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

<style scoped></style>
