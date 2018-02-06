<template lang="pug">
div
  list-detail(
    v-for="bird in birds"
    :key="bird.rfid"
    :bird="bird")
</template>

<script>
import Api from './../../api';
import ListDetail from './ListDetail';

export default {
  components: {
    ListDetail,
  },
  name: 'List',
  data() {
    return {
      birds: [],
    };
  },
  created() {
    Api.get('/birds/')
      .then((response) => {
        console.log(response.data);
        this.birds = response.data;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
