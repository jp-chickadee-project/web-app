<template lang="pug">
div
  canvas(id="b")
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';

export default {
  components: {
  },
  name: 'VisitsGraph',
  props: {
    visits: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    const ctx = document.getElementById('b');
    const labels = this.makeLabels();
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }],
        },
      },
    });
  },

  methods: {
    makeLabels() {
      const LIMIT = moment('2000', 'hhmm');
      let time = moment('1000', 'hhmm');
      let times = [];
      while (time < LIMIT) {
        times.push(time.format('h:mma'));
        time.add(15, 'm');
      }
      return times;
    },
  },
};
</script>

<style scoped>
#form {
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
