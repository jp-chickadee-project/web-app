<template>
<v-flex>
  <v-card>
    <span class="headline over" style="width: 100%">friends</span>
    <li v-for="friend in friends" v-bind:key="friend.id">
      <router-link :to='"/birds/" + friend.id'>{{friend.id}}</router-link>
    </li>
  </v-card>
</v-flex>
</template>

<script>
import _ from 'lodash';

import Analytics from '@/Analytics';

import { getColorForFeeder } from '@/defaults/colors';

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
          };
        });
        this.friends = _.slice(_.reverse(_.sortBy(birds, ['count'])), 0, 5);
      });
  },
};
</script>

<style scoped>

</style>
