<template lang="pug">
div
  visit-list-detail(
    v-for="aVisit in visits"
    :key="aVisit.rfid + aVisit.visitTimestamp"
    :visit="aVisit")
</template>

<script>
import VisitListDetail from './VisitListDetail';

export default {
  components: {
    VisitListDetail,
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
