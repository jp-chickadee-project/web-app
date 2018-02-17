<template lang="pug">
div(class="card")
  div(class="card-block")
    h4(class="card-title")
      a(:href="'/feeders/' + feeder.id") {{feeder.id}}
</template>

<script>
export default {
  name: 'FeederItem',
  props: {
    feeder: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
