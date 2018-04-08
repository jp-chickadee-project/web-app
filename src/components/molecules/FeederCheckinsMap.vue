<template>
<v-flex>
  <v-card>
    <v-card-media>
      <v-container fill-height fluid ref='map' class='map'>
        <v-layout fill-height>
          <v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title>
      <div>
        <span>visits to feeders</span>
      </div>
    </v-card-title>
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
      d: 'visits to feeders',
      feeders: {},
    };
  },

  watch: {
    item: {
      handler() {
        this.refresh();
      },
    },
  },

  methods: {
    refresh() {
      // TODO clear layer
      Analytics.get(`/feeders/checkins?timespan=${this.item}`)
        .then((checkins) => {
          _.each(checkins, (value, feederId) => {
            const feeder = this.feeders[feederId];
            console.log(`value: ${value}`);
            L.circleMarker([feeder.latitude, feeder.longitude], {
              color: getColorForFeeder(feeder.id),
              radius: 5,
            }).bindPopup(`feeder: ${feeder.id} </br> visits: ${value}`).addTo(this.map);
          });
        });
    },
  },

  mounted() {
    const container = this.$refs.map;
    this.map = buildStudyAreaMap(container);
    Api.getFeeders()
      .then((feeders) => {
        this.feeders = feeders;
        this.refresh();
      });
  },

  refresh() {

  },
};
</script>

<style scoped>

.map {
  height: 100%;
  width: 100%;
  min-height: 350px;
  z-index: 1;
}

.title {
  z-index: 999;
  position:absolute;
}
</style>
