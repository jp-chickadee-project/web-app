<template lang="pug">
div(id="container") This website is under development.
  br
  br
  br
  br
  p Join bird club!
  p Meetings are Tuesday at noon in the CS lab.
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {};
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
</style>
