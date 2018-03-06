<template lang="pug">
div(id="idmap")
</template>

<script>
import Api from '@/api';
import VisitProfile from '@/components/visits/profile/Index';

export default {
  components: {
    VisitProfile,
  },
  name: 'FeedersMap',

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

    Api.get('/feeders')
      .then((feeders) => {
        for (let i = 0; i < feeders.length; i++) {
          const feeder = feeders[i];
          if (feeder.id !== "TEST") {
            Api.get(`/visits/latest?feederID=${feeder.id}&limit=1`)
              .then((visit) => {
                L.marker([feeder.latitude, feeder.longitude]).addTo(map)
                  .bindPopup(`feeder: ${feeder.fullName}<br> last visit: ${visit.bandCombo}`)
                  .openPopup();
              })
              .catch(() => {});
          }
        }
        map.setView([46.554064, -87.428646], ZOOM);
      });
  },
};
</script>

<style scoped>
#idmap {
  height: 400px;
}
</style>
