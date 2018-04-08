<template>
  <v-app>
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
        <router-link to="/" class="navbar-brand">
          <img src="./assets/logo1.png"
            class="d-inline-block align-top"
            width="30"
            height="30"
            style="margin-right:5px"
            alt="">JPCP
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/birds">Birds</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/visits">Visits</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/feeders">Feeders</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <v-content>
        <v-alert color="orange" value="true">
          This version of the website uses some test data. Head over to <a href="http://jpcp.nmu.edu/#/">www.jpcp.nmu.edu</a> for the current website
        </v-alert>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs5>
              <h4>{{total}} visits over the past {{duration}} ready for seaching.</h4>
            </v-flex>
            <v-flex xs2>
              <v-select :items="items" v-model="duration" label="Select" single-line></v-select>
            </v-flex>
          </v-layout>
          <router-view :key="$route.fullPath" :duration='duration'></router-view>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>

import Analytics from '@/Analytics';

export default {
  name: 'App',

  data() {
    return {
      items: ['day', 'week', 'month', 'year', 'all'],
      duration: 'month',
      total: 0,
    };
  },

  watch: {
    duration: {
      handler() {
        this.refresh();
      }
    }
  },

  created() {
    this.refresh(this.duration);
  },

  methods: {
    refresh() {
      Analytics.getTotalVisitsForPopulation(this.duration)
        .then((total) => {
          this.total = total;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eeeeee;
}
</style>
