<template>
<BirdAvatarList :title='title' :birds='birds'/>
</template>

<script>
import _ from 'lodash';

import Analytics from '@/Analytics';
import BirdAvatarList from '@/components/atoms/BirdAvatarList';

import Bird from '@/models/Bird';

export default {
  components: {
    BirdAvatarList,
  },
  name: 'Leaderboard',
  props: {
    duration: {
      type: String,
      required: true,
    },
  },

  watch: {
    duration: {
      handler() {
        this.refresh();
      },
    },
  },

  data() {
    return {
      title: `Leaderboard for the past ${this.duration}`,
      birds: [],
      limit: 30
    };
  },

  mounted() {
    this.refresh();
  },

  methods: {

    refresh() {
      this.birds = [];
      this.title = `Leaderboard for the past ${this.duration}`;
      Analytics.getLeaderboardForBirds(this.duration, this.limit)
      .then((leaders) => {
        Bird.get()
          .then((birdMap) => {
            _.each(leaders, (leader) => {
              const bird = birdMap[leader.id];
              const value = leader.count + ' visits';
              this.birds.push({ ...bird, value });
            });
          });
      }); 
    }
  }
};
</script>

<style scoped>
</style>
