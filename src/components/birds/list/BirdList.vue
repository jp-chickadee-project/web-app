<template lang="pug">
div
  BirdItem(
    v-for="bird in birds"
    :key="bird.rfid"
    :bird="bird")
</template>

<script>
import Api from '@/api';
import BirdItem from './BirdItem';

export default {
  components: {
    BirdItem,
  },
  name: 'BirdList',
  data() {
    return {
      birds: [],
    };
  },
  created() {
    Api.get('/birds')
      .then((response) => {
        console.log(response.data);
        this.birds = response.data;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
