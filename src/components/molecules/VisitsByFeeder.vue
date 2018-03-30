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
        const data = {
          datasets: [{
            data: Object.values(this.relation),
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
              'rgba(70, 70, 64)',
              'rgba(23, 159, 64)',
            ],
          }],
          labels: Object.keys(this.relation),
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
