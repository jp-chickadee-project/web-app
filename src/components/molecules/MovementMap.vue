<template lang='pug'>
v-flex
  v-card(height='100%')
    <div class="black--text map" ref='map'></div>
    span(class="headline over") movement between feeders
</template>

<script>
import * as _ from 'lodash';

import Analytics from '@/Analytics';
import Api from '@/api';

import { getColorForFeeder } from '@/defaults/colors';

import buildStudyAreaMap from '@/helpers/map';

export default {
  components: {},
  name: 'MovementMap',
  props: {
    rfid: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    const container = this.$refs.map;
    const map = buildStudyAreaMap(container);
    map.setZoom(15)
    Analytics.getMovementsForBird(this.rfid, this.duration)
      .then((movements) => {
        const visitedFeeders = Object.keys(movements);

        Api.get('/feeders')
          .then((feeders) => {
            _.map(feeders, (feeder) => {
              if (_.includes(visitedFeeders, feeder.id)) {
                L.circleMarker([feeder.latitude, feeder.longitude],
                  {
                    color: getColorForFeeder(feeder.id),
                  }).addTo(map);
              }
            });
            const averageLat = _.mean(_.map(feeders, f => f.latitude));
            const averageLong = _.mean(_.map(feeders, f => f.longitude));
            const feederMap = _.keyBy(feeders, 'id');
            _.each(movements, (destinations, s) => {
              const start = feederMap[s];
              _.each(destinations, (frequency, d) => {
                const destination = feederMap[d];
                const points = [
                  [start.latitude, start.longitude],
                  [destination.latitude, destination.longitude],
                ];
                const percent = frequency / 300;
                L.polyline(points, {
                  color: '#000000',
                  opacity: percent + 0.05,
                  weight: 15,
                }).bindPopup(`Moved between ${start.id} and ${destination.id} ${frequency} times`).addTo(map);
              });
            });
          });
      });
  },
};
</script>

<style scoped>

.map {
  min-width: 300px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.over {
  z-index:2;
  position:absolute;
  top: 10px;
  left: 10px;
}
</style>
