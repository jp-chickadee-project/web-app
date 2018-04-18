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
        <h3 class="headline mb-0">visits to feeders</h3>
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

  props: {
    duration: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      feeders: {},
    };
  },

  mounted() {
    const container = this.$refs.map;
    this.map = buildStudyAreaMap(container);
    this.layer = L.layerGroup().addTo(this.map);
    var legend = L.control({position: 'bottomright'});

  legend.onAdd = (map) => {

      var div = L.DomUtil.create('div', 'legend'),
          grades = [0, 10, 20, 50, 100, 200, 500, 1000],
          labels = [];

      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
        console.log(grades[i] / 1000);
          div.innerHTML +=
              '<div style="margin-right:8px; float:left; width:100%; height:20px; background:' + this.getColor(grades[i] / 1000) + '">' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+' + '</div>');
      }

      return div;
  };

  legend.addTo(this.map);
    Api.getFeeders()
      .then((feeders) => {
        this.feeders = feeders;
        this.refresh();
      });
  },

  watch: {
    duration: {
      handler() {
        this.refresh();
      },
    },
  },

  methods: {
    
    refresh() {
      Analytics.getVisitsByFeederForPopulation(this.duration)
        .then((checkins) => {
          this.layer.clearLayers();
          const max = _.max(_.values(checkins));
          
          _.each(this.feeders, (feeder, feederId) => {
            const value = checkins[feederId] || 0;
            L.circleMarker([feeder.latitude, feeder.longitude], {
              color: this.getColor(value / max),
              radius: 5,
              weight: 10,
            }).bindPopup(`feeder: ${feeder.id} </br> visits: ${value}`).addTo(this.layer);
          });
        });
    },

    getColor(d) {
      //http://leafletjs.com/examples/choropleth/
      return d > .90 ? '#800026' :
              d > .80  ? '#BD0026' :
              d > .70  ? '#E31A1C' :
              d > .60  ? '#FC4E2A' :
              d > .50   ? '#FD8D3C' :
              d > .20   ? '#FEB24C' :
              d > .10   ? '#FED976' :
                          '#FFEDA0';
    }
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

.legend {
    line-height: 18px;
    color: #555;
    width: 100px;
}
</style>
