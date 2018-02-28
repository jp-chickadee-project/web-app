<template lang="pug">
div
  canvas(id="b")
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';
import * as _ from 'lodash';

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
  watch: {
    visits: function(v) {
      console.log(`watch ${v.length}`);
      this.visits = v;
      const chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: this.makeDatesets(this.labels),
        },
      });
    }
  },
  data() {
    console.log('data');
    return {};
  },
  mounted() {
    console.log(`mounted ${this.visits.length}`);
    this.ctx = document.getElementById('b');
    this.labels = this.makeLabels();
  },

  methods: {
    makeLabels() {
      const LIMIT = moment('2100', 'hhmm');
      let time = moment('0600', 'hhmm');
      console.log(time);
      let times = [];
      while (time < LIMIT) {
        times.push(time.format('h:mma'));
        time.add(1, 'm');
      }
      return times;
    },

    setupDatasets(labels) {
      let occurrences = {};
      for (let i = 0; i < labels.length; i++) {
        let label = labels[i];
        occurrences[label] = 0;
      }
      console.log('empty occurrences');
      console.log(this.occurrences);
      return occurrences;
    },

    makeDatesets(labels) {
      let datasets = this.setupDatasets(labels);
      for (let i = 0; i < this.visits.length; i++) {
        let visit = this.visits[i];
        let timestamp = visit.visitTimestamp;
        let time = moment.unix(timestamp).format('h:mma');
        if (datasets[time] === undefined) {
          datasets[time] = 0;
        }
        datasets[time]++;
      }

      console.log(datasets);

      return [{
        label: `All ${this.visits.length} visits for Ray (#R/ay)`,
        data: Object.values(datasets),
        backgroundColor: 'rgb(66, 134, 244)'
      }];
    },

    zero(count) {
      const DEFAULT_VALUE = 0;
      let list = [];
      for (let i = 0; i < count; i++) {
        list.push(DEFAULT_VALUE);
      }
      return list;
    }
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
