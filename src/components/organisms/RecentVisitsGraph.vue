<template lang="pug">
v-flex
  v-card
    v-card-text(id="count" ) the total visits is: {{count}}
</template>

<script>
import Analytics from '@/Analytics';

export default {
  components: {},
  name: 'RecentVisitsGraph',
  data() {
    return {
      count: 'loading...'
    };
  },
  created() {
    Analytics.get('/visits/total')
      .then((response) => {
        console.log(`total is ${response}`);
        this.count = response.visits;
      });
  }
};
</script>

<style scoped>
</style>
