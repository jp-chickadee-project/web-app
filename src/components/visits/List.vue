<template lang="pug">
div
  list-detail(
    v-for="aVisit in visits"
    :key="aVisit.rfid + aVisit.visitTimestamp"
    :visit="aVisit")
</template>

<script>
import Api from './../../api';
import ListDetail from './ListDetail';

export default {
  components: {
    ListDetail,
  },
  name: 'visit-list',
  props: {
    visits: {
      type: Array,
      required: true
    }
  },

  created() {

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
