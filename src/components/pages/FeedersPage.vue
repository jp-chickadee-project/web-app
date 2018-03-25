<template lang="pug">
div
  FeederList(:feeders="feeders")
</template>

<script>
import Api from '@/api';
import FeederList from '@/components/organisms/FeederList.vue';

export default {
  components: {
    FeederList,
  },
  name: 'FeedersPage',

  data() {
    return {
      feeders: [],
    };
  },

  created() {
    Api.get('/feeders')
      .then((feeders) => {
        this.feeders = feeders;
      })
      .catch(() => {});
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
