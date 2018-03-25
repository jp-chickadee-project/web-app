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
    Analytics.totalVisits()
      .then((total) => {
        this.count = total;
      })
      .catch(() => {
        // TODO 
      });
  }
};
</script>

<style scoped>
</style>
