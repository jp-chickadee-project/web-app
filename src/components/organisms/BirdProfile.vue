<template lang='pug'>
div
  div {{bird.bandCombo}}
  div rfid: {{bird.rfid}}
  div species: {{bird.species}}
  div suspected sex: {{bird.suspectedSex}}
  div capture date: {{new Date(bird.captureTimestamp * 1000).toGMTString()}}
  <v-container grid-list-md>
    <v-layout row wrap>
      VisitsByFeeder(:rfid='rfid' class='xs12 | sm6 | md4')
      MovementMap(:rfid='rfid' class='xs12 | sm6 | md4')
      AssociationsList(:rfid='rfid' class='xs12')
    </v-layout>
  </v-container>
</template>

<script>
import VisitsByFeeder from '@/components/molecules/VisitsByFeeder';
import MovementMap from '@/components/molecules/MovementMap';
import AssociationsList from '@/components/molecules/AssociationsList';

export default {
  name: 'BirdProfile',
  components: {
    VisitsByFeeder,
    MovementMap,
    AssociationsList,
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
