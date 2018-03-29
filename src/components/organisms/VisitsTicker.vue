<template lang="pug">
div
  span(id="count" ) the total visits is: {{count}}
</template>

<script>
import Analytics from '@/Analytics';

export default {
  components: {},
  name: 'VisitsTicker',
  data() {
    return {
      count: 'loading...'
    };
  },
  created() {
    Analytics.get('/total')
      .then((response) => {
        console.log(`total is ${response}`);
        this.count = response.visits;
      });
  }
};
</script>

<style scoped>
</style>
