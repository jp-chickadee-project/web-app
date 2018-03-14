<template lang="pug">
div
  span(id="count" ) the total visits is: {{count}}
</template>

<script>
import Api from '@/api';

export default {
  components: {},
  name: 'VisitsCount',
  data() {
    return {
      count: 'loading...'
    };
  },
  mounted() {
    Api.get(`visits?start=0&end=1000000000000000`)
      .then((visits) => {
        console.log(visits);
        this.count = visits.length;
      })
      .catch(() => {});
  }
};
</script>

<style scoped>
</style>
