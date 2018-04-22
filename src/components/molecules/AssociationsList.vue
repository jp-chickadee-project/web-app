<template>
<BirdAvatarList :title='title' :birds='friends'/>
</template>

<script>
import _ from 'lodash';

import Api from '@/api';
import Analytics from '@/Analytics';

import { getColorForFeeder } from '@/defaults/colors';
import { getDisplayNameFromRfid } from '@/defaults/names';
import Bird from '@/models/Bird';

import BirdAvatarList from '@/components/atoms/BirdAvatarList';

export default {
  components: {
    BirdAvatarList,
  },
  name: 'AssociationsList',
  props: {
    rfid: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      title: 'Associated birds',
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
