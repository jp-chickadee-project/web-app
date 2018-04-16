<template lang='pug'>
div
  BirdsList(:birds='birds' :isLoading='isLoadingBirds')
</template>

<script>

import _ from 'lodash';

import Bird from '@/models/Bird';
import BirdsList from '@/components/organisms/BirdList';

export default {
  name: 'BirdsPage',
  components: {
    BirdsList,
  },
  data() {
    return {
      birds: [],
    };
  },
  created() {
    this.isLoadingBirds = true;
    Bird.get()
      .then((birds) => {
        this.birds = _.values(birds);
        this.isLoadingBirds = false;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
