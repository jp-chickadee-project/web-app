<template lang='pug'>
  <v-flex xs12 sm4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Visits per feeder</h3>
        </div>
      </v-card-title>
      canvas(id="my_chart")
    </v-card>
  </v-flex>
</template>

<script>
import Chart from 'chart.js';

import Analytics from '@/Analytics';
import DefaultBird from '@/defaults/Bird';

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
        let ctx = document.getElementById("my_chart").getContext("2d");
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
