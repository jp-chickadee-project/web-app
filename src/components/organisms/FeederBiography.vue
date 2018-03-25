<template lang="pug">
div
  div Name: {{feeder.fullName}}
  div id: {{feeder.id}}
  div Latitude: {{feeder.latitude}}
  div Longitude: {{feeder.longitude}}
</template>

<script>
export default {
  name: 'FeederBiography',
  props: {
    feeder: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
