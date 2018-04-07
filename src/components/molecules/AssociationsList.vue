<template>
  <v-flex>
    <v-card height='100%'>
      <v-list>
        <v-list-tile>Associated birds</v-list-tile>
        <v-list-tile avatar v-for="item in friends" :key="item.name" @click="" :to="'/birds/' + item.id">
          <v-list-tile-avatar>
            <img src="./../../assets/bird.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import _ from 'lodash';

import Analytics from '@/Analytics';

import { getColorForFeeder } from '@/defaults/colors';
import { getDisplayNameFromRfid } from '@/defaults/names';

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
      .then((assos) => {
        const birds = _.map(assos, (n, bird) => {
          return {
            id: bird,
            count: n,
            name: getDisplayNameFromRfid(bird),
          };
        });
        this.friends = _.slice(_.reverse(_.sortBy(birds, ['count'])), 0, 3);
      });
  },
};
</script>

<style scoped>
</style>
