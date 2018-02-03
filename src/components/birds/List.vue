<template>
  <div>
    bird list
    <ListDetail
      v-for="bird in birds"
      :key="bird.rfid"
      :bird="bird"/>
  </div>
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
    Api.getBirds((birds) => {
      this.birds = birds;
    })
      .catch(() => {
      });
    return {
      birds: [],
    };
  },
};
</script>

<style scoped></style>
