<template lang="pug">
div(v-if="visits.length === 0")
  visit-list-detail-null
div(v-else)
  visit-list-detail(
    v-for="visit in visits"
    :key="visit.rfid + visit.visitTimestamp"
    :visit="visit")
</template>

<script>
import VisitListDetail from './VisitListDetail';
import VisitListDetailNull from './VisitListDetailNull';

export default {
  components: {
    VisitListDetail,
    VisitListDetailNull,
  },
  name: 'visit-list',
  props: {
    visits: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
