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
    Analytics.subscribe('TOTAL_VISITS', (total) => {
      console.log(`total is ${total}`);
      this.count = total;
    });
  },
  destoryed() {
    // TODO
    console.log('destory');
    Analytics.unsubscribe('TOTAL_VISITS');
  }
};
</script>

<style scoped>
</style>
