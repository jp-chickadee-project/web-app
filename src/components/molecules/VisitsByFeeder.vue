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
  },
  data() {
    return {
      relation: {},
    };
  },
  mounted() {
    Analytics.get(`/birds/${this.rfid}/feeders`)
      .then((response) => {
        this.relation = response;
        let ctx = this.$refs['chart'];
        const keys = Object.keys(this.relation);
        const data = {
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
        let myPieChart = new Chart(ctx,{
            type: 'pie',
            data: data,
            options: options
        });
      })
      .catch(() => {});
  }
};
</script>

<style scoped></style>
