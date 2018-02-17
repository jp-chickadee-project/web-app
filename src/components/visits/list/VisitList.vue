<template lang="pug">
div(v-if="isLoading === true")
  visit-list-detail-loading
div(v-else-if="visits.length === 0")
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
import VisitListDetailLoading from './VisitListDetailLoading';

export default {
  components: {
    VisitListDetail,
    VisitListDetailNull,
    VisitListDetailLoading,
  },
  name: 'visit-list',
  props: {
    visits: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped></style>
