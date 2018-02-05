<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
      <router-link to="/"
        class="navbar-toggler navbar-toggler-right"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </router-link>
      <a class="navbar-brand" href="/">
        <img src="./assets/logo.jpg"
          class="d-inline-block align-top"
          width="30"
          height="30"
          style="margin-right:5px"
          alt="">JP Chickadee Project
      </a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/birds">Birds</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
