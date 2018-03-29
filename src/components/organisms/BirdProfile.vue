<template lang='pug'>
div
  div {{bird.bandCombo}}
  div rfid: {{bird.rfid}}
  div species: {{bird.species}}
  div suspected sex: {{bird.suspectedSex}}
  VisitsByFeeder(:rfid='rfid')
</template>

<script>
import VisitsByFeeder from '@/components/organisms/VisitsByFeeder';

export default {
  name: 'BirdProfile',
  components: {
    VisitsByFeeder,
  },
  props: {
    rfid: {
      type: String,
      required: true,
    },
    bird: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
