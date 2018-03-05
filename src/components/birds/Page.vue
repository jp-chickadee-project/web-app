<template lang='pug'>
div
  BirdsList(:birds='birds')
</template>

<script>
import Api from '@/api';
import BirdsList from './list';

export default {
  name: 'BirdsPage',
  components: {
    BirdsList,
  },
  data() {
    return {
      birds: [],
    };
  },
  created() {
    Api.get('/birds')
      .then((birds) => {
        this.birds = birds;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
