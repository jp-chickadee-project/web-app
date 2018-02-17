<template lang="pug">
div
  bird-list-detail(
    v-for="bird in birds"
    :key="bird.rfid"
    :bird="bird")
</template>

<script>
import Api from '@/api';
import BirdListDetail from './BirdListDetail';

export default {
  components: {
    BirdListDetail,
  },
  name: 'bird-list',
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
