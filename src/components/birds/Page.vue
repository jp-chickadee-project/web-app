<template lang='pug'>
div test
</template>

<script>
import Api from '@/api';

export default {
  components: {},
  name: 'BirdsPage',
  data() {
    return {
      birds: [],
    };
  },
  created() {
    Api.get('/birds')
      .then((birds) => {
        console.log(birds);
        this.birds = birds;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
