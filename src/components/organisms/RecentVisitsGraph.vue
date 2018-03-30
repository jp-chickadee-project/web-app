<template lang='pug'>
v-flex
  v-card
    canvas(ref='chart')
</template>

<script>
import * as _ from 'lodash';

import Analytics from '@/Analytics';

export default {
  components: {},
  name: 'RecentVisitsGraph',
  data() {
    return {
      count: 'loading...'
    };
  },
  mounted() {
    const ctx = this.$refs['chart'];
    Analytics.get('/visits/summary')
      .then((summary) => {
        const data = [];
        _.map(summary, (count, timestamp) => {
          data.push({
            y: count,
            t: new Date(timestamp * 1000)
          });
        });
        console.log(data);
        let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                data,
                backgroundColor: '#46CDCF',
            }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Visits over the past hour',
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'series',
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function(value) {
                  if (value % 1 === 0) {
                    return value;
                  }
                }
              }
            }]
          }
        }
    });
  });
  }
};
</script>

<style scoped></style>
