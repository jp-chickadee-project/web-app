<template lang="pug">
div
  FeederItem(
    v-for="feeder in feeders"
    :key="feeder.id"
    :feeder="feeder")
</template>

<script>
import FeederItem from './FeederItem';

export default {
  components: {
    FeederItem,
  },
  props: {
    feeders: {
      type: Array,
      required: true,
    },
  },
  name: 'FeederList',
};
</script>

<style scoped></style>
