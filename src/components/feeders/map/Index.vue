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
    const map = L.map('idmap', {
      minZoom: ZOOM,
      maxZoom: ZOOM
    });
    map.removeControl(map.zoomControl);

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
                  .bindPopup('<VisitProfile></VisitProfile>')
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
