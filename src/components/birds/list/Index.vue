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
  name: 'BirdList',
  components: {
    BirdItem,
  },
  props: {
    birds: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped></style>
