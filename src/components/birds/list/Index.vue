<template lang="pug">
div(v-if='isLoading === true')
  div loading
div(v-else)
  BirdItem(
    v-for='bird in birds'
    :key='bird.rfid'
    :bird='bird')
</template>

<script>
import Api from '@/api';
import BirdItem from './Item';

export default {
  name: 'BirdList',
  components: {
    BirdItem,
  },
  props: {
    birds: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped></style>
