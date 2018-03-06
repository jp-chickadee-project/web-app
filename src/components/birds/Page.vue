<template lang='pug'>
div
  BirdsList(:birds='birds' :isLoading='isLoadingBirds')
</template>

<script>
import Api from '@/api';
import BirdsList from './list/Index';

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
    this.isLoadingBirds = true;
    Api.get('/birds')
      .then((birds) => {
        this.birds = birds;
        this.isLoadingBirds = false;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
