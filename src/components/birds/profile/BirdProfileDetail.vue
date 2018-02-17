<template lang="pug">
div
  div {{bird.bandCombo}}
  div rfid: {{bird.rfid}}
  div species: {{bird.species}}
  div suspected sex: {{bird.suspectedSex}}
</template>

<script>
export default {
  name: 'bird-profile-detail',
  props: {
    bird: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
