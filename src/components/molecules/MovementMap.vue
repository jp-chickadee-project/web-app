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
  
  watch: {
    duration: {
      handler() {
        this.refresh();
      },
    },
  },

  data() {
    return {};
  },

  mounted() {
    const container = this.$refs.map;
    this.map = buildStudyAreaMap(container)
      .setZoom(15);
    this.layer = L.layerGroup().addTo(this.map);
    Api.getFeeders()
      .then((feeders) => {
        this.feeders = feeders;
        this.refresh();
      });
  },

  methods: {

    refresh() {
      Analytics.getMovementsForBird(this.rfid, this.duration)
        .then((movements) => {
          this.layer.clearLayers();
          const visitedFeederIds = _.keys(movements);
          _.each(this.feeders, (feeder) => {
            if (_.includes(visitedFeederIds, feeder.id)) {
              const circle = this.makeCircle(feeder);
              circle.addTo(this.layer);
            }
          });

          _.each(movements, (destinations, start) => {
            const startFeeder = this.feeders[start];
            _.each(destinations, (count, destination) => {
              const destinationFeeder = this.feeders[destination];
              const line = this.makeLine(startFeeder, destinationFeeder, count);
              line.addTo(this.layer);
            });
          });   
        });
    },

    makeLine(start, destination, count) {
      const points = [
        [start.latitude, start.longitude],
        [destination.latitude, destination.longitude],
      ];
      const percent = count / 300;
      return L.polyline(points, {
        color: '#000000',
        opacity: percent + 0.05,
        weight: 15,
      }).bindPopup(`Moved between ${start.id} and ${destination.id} ${count} times`);
    },

    makeCircle(feeder) {
      return L.circleMarker([feeder.latitude, feeder.longitude], {
        color: getColorForFeeder(feeder.id),
      });
    }
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
