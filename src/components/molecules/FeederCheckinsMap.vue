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
          if (this.legend) {
            this.map.removeControl(this.legend);
          }
          this.legend = this.makeLegend(max);
          this.legend.addTo(this.map);
        });
    },

    makeLegend(max) {
      const count = 8;
      if (max === undefined || max < count) {
        max = count;
      }
      var legend = L.control({ position: 'bottomright' });
      legend.onAdd = (map) => {
        let div = L.DomUtil.create('div', 'legend');
        const step = Math.floor(max / count);
        for (var i = 0; i < count; i++) {
          let current = step * i;
          let next = step * (i + 1); 
          let range = Number(current).toLocaleString() + (next > max ? '+' : `-${Number(next).toLocaleString()}`);
          let color = this.getColor(current / max);
          div.innerHTML += `<div class='holder'><i style="background:${color}"></i><span>${range}</span></div>`;
        }
        return div;
      };
      return legend;
    },

    getColor(d) {
      //http://leafletjs.com/examples/choropleth/
      return d > .70 ? '#800026' :
              d > .60  ? '#BD0026' :
              d > .50  ? '#E31A1C' :
              d > .40  ? '#FC4E2A' :
              d > .30   ? '#FD8D3C' :
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
</style>
<style>
.legend {
  line-height: 18px;
  width: auto;
  color: #555;
  background-color: azure;
}

.legend span {
  font-size: 16px;
  padding-right: 5px;
}

.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin-left: 5px;
  margin-right: 5px;
}

.legend holder {
  width: 100%;
}
</style>
