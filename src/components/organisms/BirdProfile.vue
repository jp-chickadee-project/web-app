<template>
<v-container grid-list-md>
  <v-layout>
    <v-flex md2>
      <v-avatar :size='168' :tile='true'>
        <img src="./../../assets/bird.jpg">
      </v-avatar>
    </v-flex>
    <v-flex>
      <h1>{{bird.bandCombo}}</h1>
      <div>{{bird.speciesDisplay}}</div>
      <div>suspected sex: {{bird.suspectedSex}}</div>
      <div>capture date: {{new Date(bird.captureTimestamp * 1000).toGMTString()}}</div>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <VisitsByFeeder :rfid='rfid' :duration='duration' class='xs12 | sm6 | md4'/>
    <MovementMap :rfid='rfid' :duration='duration' class='xs12 | sm6 | md4'/>
    <AssociationsList :rfid='rfid' class='xs12 | sm6 | md4'/>
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
    duration: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
