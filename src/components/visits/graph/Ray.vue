<template lang="pug">
div(id="container")
  VisitsGraph(id="x" :visits="visits")
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
        this.visits = response;
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