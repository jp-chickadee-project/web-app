<template lang="pug">
div(v-if="isLoading === true")
  VisitItemLoading
div(v-else-if="visits.length === 0")
  VisitItemNone
div(v-else)
  VisitItem(
    v-for="visit in visits"
    :key="visit.rfid + visit.visitTimestamp"
    :visit="visit")
</template>

<script>
import VisitItem from './VisitItem';
import VisitItemNone from './VisitItemNone';
import VisitItemLoading from './VisitItemLoading';

export default {
  components: {
    VisitItem,
    VisitItemNone,
    VisitItemLoading,
  },
  name: 'VisitList',
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
