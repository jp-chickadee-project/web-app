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
    Analytics.on('total', (total) => {
      console.log(`total is ${total}`);
      this.count = total;
    });
  }
};
</script>

<style scoped>
</style>
