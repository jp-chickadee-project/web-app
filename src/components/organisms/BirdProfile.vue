<template lang='pug'>
div
  div {{bird.bandCombo}}
  div rfid: {{bird.rfid}}
  div species: {{bird.species}}
  div suspected sex: {{bird.suspectedSex}}
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      VisitsByFeeder(:rfid='rfid' class='xs4')
      MovementMap(:rfid='rfid' class='xs8')
    </v-layout>
  </v-container>
</template>

<script>
import VisitsByFeeder from '@/components/molecules/VisitsByFeeder';
import MovementMap from '@/components/molecules/MovementMap';

export default {
  name: 'BirdProfile',
  components: {
    VisitsByFeeder,
    MovementMap,
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
