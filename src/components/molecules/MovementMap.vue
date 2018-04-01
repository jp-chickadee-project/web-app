<template lang='pug'>
v-flex
  v-card(height='100%')
    div(ref='map' style='height: 100%')      
</template>

<script>
import * as _ from 'lodash';

import Analytics from '@/Analytics';
import Api from '@/api';

import { getColorForFeeder } from '@/defaults/colors';

export default {
  components: {},
  name: 'MovementMap',
  props: {
    rfid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    const ZOOM = 15;
    const bounds = new L.LatLngBounds(
      new L.LatLng(46.558923, -87.440042),
      new L.LatLng(46.547893, -87.418094)
    );
    const container = this.$refs['map'];
    const map = L.map(container, {
      center: bounds.getCenter(),
      minZoom: ZOOM,
      maxZoom: ZOOM,
      maxBounds: bounds,
			maxBoundsViscosity: 0.75,
    });
    map.removeControl(map.zoomControl);
    map.dragging.disable();
    map.scrollWheelZoom.disable();
    map.touchZoom.disable();

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    Analytics.get(`/birds/${this.rfid}/movements`)
      .then((movements) => {
        const visitedFeeders = Object.keys(movements);
        
        let max = 0;
        _.each(movements, (value, key) => {
          _.each(value, (v, k) => {
            if (v > max) {
              max = v;
            }
          });
        });

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
            const averageLat = _.mean(_.map(feeders, (f) => {
              return f.latitude;
            }));
            const averageLong = _.mean(_.map(feeders, (f) => {
              return f.longitude;
            }));
            const feederMap = _.keyBy(feeders, 'id');
            _.each(movements, (destinations, s) => {
              const start = feederMap[s];
              _.each(destinations, (frequency, d) => {
                const destination = feederMap[d];
                const points = [
                  [start.latitude, start.longitude],
                  [destination.latitude, destination.longitude],
                ];
                let percent = frequency / 300;
                console.log(percent);
                L.polyline(points, {
                  color: '#000000',
                  opacity: percent + 0.05,
                  weight: 15,
                }).bindPopup(frequency + '').addTo(map);
              });
            });
            map.setView([averageLat, averageLong], ZOOM);
          });
      });
  },
};
</script>

<style scoped></style>
