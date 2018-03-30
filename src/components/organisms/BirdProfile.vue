<template lang='pug'>
div
  div {{bird.bandCombo}}
  div rfid: {{bird.rfid}}
  div species: {{bird.species}}
  div suspected sex: {{bird.suspectedSex}}
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      VisitsByFeeder(:rfid='rfid')
      VisitsByFeeder(:rfid='rfid')
      VisitsByFeeder(:rfid='rfid')
    </v-layout>
  </v-container>
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
