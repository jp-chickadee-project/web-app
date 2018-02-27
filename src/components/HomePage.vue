<template lang="pug">
div(id="container")
  VisitsGraph(id="x" :visits="visits")
  br
  br
  br
  br
  span This website is under development.
  h1 Code for dinosaurs
  h4 Meetings are Tuesday at noon in the CS lab (JXJ 2214).
  a(href="https://sites.google.com/view/alecrlindsay/research/jp-chickadee-project") check out the biology website for more information <br>
  a(href="http://euclid.nmu.edu/~chickadee/birds.csv") birds.csv
</template>

<script>
import Api from '@/api';
import VisitsGraph from '@/components/visits/graph/Index';

export default {
  name: 'HelloWorld',
  components: {
    VisitsGraph,
  },
  data() {
    return {
      visits: this.visits,
    };
  },
  created() {
    this.visits = [];
    Api.get('/visits/latest?limit=1000000&rfid=0300034C3E')
      .then((response) => {
        this.visits = response.data;
        console.log(`visits loaded`);
      })
      .catch(() => {});
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#container {
  margin-top: 5px;
  margin-left: 5px;
}

#x {
  width: 50%;
}
</style>
