<template lang='pug'>
v-flex
  v-card(height='100%')
    canvas(ref='chart')
</template>

<script>
import * as _ from 'lodash';
import Analytics from '@/Analytics';
import Rx from 'rxjs/Rx';

export default {
  components: {},
  name: 'RecentVisitsGraph',
  data() {
    return {
      count: 'loading...',
    };
  },
  mounted() {
    const container = this.$refs.chart;
    this.chart = this.create(container);
    Analytics.get('/visits/summary')
      .then((summary) => {
        this.update(summary);
      });

    setInterval(() => {
      Analytics.get('/visits/summary')
        .then((summary) => {
          this.update(summary);
        });
    }, 60000);
  },

  methods: {

    create(container) {
      return new Chart(container, {
        type: 'bar',
        data: {
          datasets: [{
            data: [],
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
                callback(value) {
                  if (value % 1 === 0) {
                    return value;
                  }
                },
              },
            }],
          },
        },
      });
    },

    update(summary) {
      this.chart.data.datasets[0].data = _.map(summary, (count, timestamp) => {
        return {
          y: count,
          t: new Date(timestamp * 1000),
        }
      });
      this.chart.update();
    }
  }
};
</script>

<style scoped></style>
