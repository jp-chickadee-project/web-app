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
      .then((data) => {
        console.log(data);
        this.birds = data;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
