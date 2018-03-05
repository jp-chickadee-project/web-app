<template lang="pug">
div(id="idmap")
</template>

<script>
import Api from '@/api';
import VisitProfile from '@/components/visits/profile/Index.vue';

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
    let map = L.map('idmap').setView([46.5534264, -87.4287414], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    Api.get('/feeders')
      .then((feeders) => {
        for (let i = 0; i < feeders.length; i++) {
          let feeder = feeders[i];
          Api.get(`/visits/latest?feederID=${feeder.id}&limit=1`)
          .then((visit) => {
            L.marker([feeder.latitude, feeder.longitude]).addTo(map)
            .bindPopup(`<VisitProfile></VisitProfile>`)
            .openPopup();
          })
        }
      });
  }
};
</script>

<style scoped>
#idmap {
  height: 400px;
}
</style>
