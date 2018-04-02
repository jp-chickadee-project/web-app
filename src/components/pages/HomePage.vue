<template lang="pug">
div(id="container")
  <v-container grid-list-md>
    <v-layout row wrap>
      FeederCheckinsMap(class='xs12' style='height: 400px')
      <v-container>
            span This website is under development.
      h1 Code for dinosaurs
      h4 Meetings are Tuesday at noon in the CS lab (JXJ 2311).
      a(href="https://sites.google.com/view/alecrlindsay/research/jp-chickadee-project") check out the biology website for more information <br>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import Api from '@/api';
import FeederCheckinsMap from '@/components/molecules/FeederCheckinsMap';

export default {
  name: 'HelloWorld',
  components: {
    FeederCheckinsMap,
  },
  data() {
    return {};
  },
  created() {
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
