<template lang='pug'>
v-flex
  v-card(height='100%')
    div(id='idmap' style='height: 100%')
</template>

<script>
import * as _ from 'lodash';

import Analytics from '@/Analytics';
import Api from '@/api';

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
    const map = L.map('idmap', {
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

        Api.get('/feeders')
          .then((feeders) => {
            _.map(feeders, (feeder) => {
              if (_.includes(visitedFeeders, feeder.id)) {
                L.marker([feeder.latitude, feeder.longitude]).addTo(map);
              }
            });
            map.setView([46.554064, -87.428646], ZOOM);
          });
      });
  },
};
</script>

<style scoped></style>
