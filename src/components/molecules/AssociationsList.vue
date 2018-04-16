<template>
  <v-flex>
    <v-card height='100%'>
      <v-list>
        <v-list-tile>Associated birds</v-list-tile>
        <v-list-tile avatar v-for="item in friends" :key="item.name" @click="" :to="'/birds/' + item.rfid">
          <v-list-tile-avatar>
            <img src="./../../assets/bird.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.bandCombo"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import _ from 'lodash';

import Api from '@/api';
import Analytics from '@/Analytics';

import { getColorForFeeder } from '@/defaults/colors';
import { getDisplayNameFromRfid } from '@/defaults/names';
import Bird from '@/models/bird';

export default {
  components: {},
  name: 'AssociationsList',
  props: {
    rfid: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      friends: [],
    };
  },

  mounted() {
    Analytics.get(`/birds/${this.rfid}/associations`)
      .then((associations) => {
        const top = _(associations)
          .map((count, rfid) => {
            return {
              rfid,
              count,
            };
          })
          .sortBy(['count'])
          .reverse()
          .slice(0, 3)
          .value();
        console.log(`length: ${top.length}`)

        Bird.get()
          .then((birdMap) => {
            _.each(top, (statsBird) => {
              this.friends.push(birdMap[statsBird.rfid]);
            });
          });
      });
  },
};
</script>

<style scoped>
</style>
