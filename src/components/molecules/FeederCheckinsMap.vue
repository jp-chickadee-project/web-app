<template>
<v-flex>
  <v-card>
    <div ref='map' class='map'></div>
    <v-card-actions>
      <h3 class='headline mb-0'>Feeder visits for the last:</h3>
      <v-flex xs3>
        <v-select :items="items" v-model="item" label="Select" single-line></v-select>
      </v-flex>
    </v-card-actions>
  </v-card>
</v-flex>
</template>

<script>
import * as _ from 'lodash';

import Analytics from '@/Analytics';
import Api from '@/api';

import { getColorForFeeder } from '@/defaults/colors';
import buildStudyAreaMap from '@/helpers/map';

export default {
  components: {},
  name: 'FeederCheckinsMap',

  data() {
    return {
      items: ['day', 'week', 'month', 'year', 'all'],
      item: 'month',
      feeders: {},
    };
  },

  watch: {
    item: {
      handler(value, oldValue) {
        this.refresh(value);
      }
    }
  },

  methods: {
    refresh(timespan) {
      // TODO clear layer
      Analytics.get(`/feeders/checkins?=${timespan}`)
        .then((checkins) => {
          _.each(checkins, (value, feederId) => {
          const feeder = this.feeders[feederId];
          console.log(`value: ${value}`);
          L.circleMarker([feeder.latitude, feeder.longitude], {
            color: getColorForFeeder(feeder.id),
            radius: value + 5,
          }).bindPopup(`feeder: ${feeder.id} </br> visits: ${value}`).addTo(this.map);
        });
      });
    }
  },

  mounted() {
    const container = this.$refs['map'];
    this.map = buildStudyAreaMap(container);
    Api.getFeeders()
      .then((feeders) => {
        this.feeders = feeders;
        this.refresh();
      });
  },

  refresh() {

  }
};
</script>

<style scoped>

.map {
  height: 100%;
  min-height: 350px;
  z-index: 1;
}
</style>
