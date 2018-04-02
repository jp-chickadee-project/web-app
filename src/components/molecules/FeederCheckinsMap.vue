<template lang="pug">
v-flex
  v-card(height='100%')
    div(id='idmap' style='height: 100%')   
</template>

<script>
import * as _ from 'lodash';

import Analytics from '@/Analytics';
import Api from '@/api';

import { getColorForFeeder } from '@/defaults/colors';

export default {
  components: {},
  name: 'FeederCheckinsMap',

  data() {
    return {};
  },

  created() {
  },
  mounted() {
    const ZOOM = 15.5;
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

    Analytics.get(`/feeders/checkins`)
      .then((checkins) => {
        Api.get('/feeders')
          .then((feeders) => {
            feeders = _.keyBy(feeders, 'id');
            _.each(checkins, (value, feederId) => {
              const feeder = feeders[feederId];
              console.log(`value: ${value}`);
              L.circleMarker([feeder.latitude, feeder.longitude], {
                color: getColorForFeeder(feeder.id),
                radius: value + 5,
              }).bindPopup(`feeder: ${feeder.id} </br> visits: ${value}`).addTo(map);
            });
            map.setView([46.554064, -87.428646], ZOOM);
          });
      });
  },
};
</script>

<style scoped>
#idmap {
  height: 400px;
}
</style>
