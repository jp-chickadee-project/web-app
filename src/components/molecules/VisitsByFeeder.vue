<template lang='pug'>
v-flex
  v-card
    v-card-title(class='primary-title')
      div
        h3(class='headline mb-0') Visits by feeder
    canvas(ref='chart')
</template>

<script>
import Chart from 'chart.js';

import Analytics from '@/Analytics';

import { getColorsForFeeders } from '@/defaults/colors';

export default {
  name: 'VisitsByFeeder',
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
      }
    }
  },

  data() {
    return {
      relation: {},
      data: {},
    };
  },

  mounted() {
    Analytics.getVisitsByFeederForIndividual(this.rfid, this.duration)
      .then((response) => {
        this.relation = response;
        const ctx = this.$refs.chart;
        const keys = Object.keys(this.relation);
        this.data = {
          datasets: [{
            data: Object.values(this.relation),
            backgroundColor: getColorsForFeeders(keys),
          }],
          labels: keys,
        };
        const options = {
          responsive: true,
          legend: {
            position: 'bottom',
          },
        };
        this.chart = new Chart(ctx, {
          type: 'pie',
          data: this.data,
          options,
        });
      })
      .catch(() => {});
  },

  methods: {
    refresh() {
      Analytics.getVisitsByFeederForIndividual(this.rfid, this.duration)
        .then((response) => {
          const keys = Object.keys(response)
          this.chart.data.labels = keys
          this.chart.data.datasets[0].data = Object.values(response);
          this.chart.data.datasets[0].backgroundColor = getColorsForFeeders(keys)
          this.chart.update();
        });
    }
  }
};
</script>

<style scoped></style>
