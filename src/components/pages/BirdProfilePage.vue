<template lang='pug'>
div
  BirdProfile(:bird='bird' :rfid='rfid' :duration='duration')
  VisitList(:visits='visits' :isLoading='isLoadingVisits')
</template>

<script>
import Api from '@/api';
import DefaultBird from '@/defaults/Bird';

import VisitList from '@/components/organisms/VisitList';
import BirdProfile from '@/components/organisms/BirdProfile';

export default {
  components: {
    BirdProfile,
    VisitList,
  },
  name: 'BirdPage',

  props: {
    duration: {
      type: String,
      required: true,
    },
    rfid: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      bird: DefaultBird,
      visits: [],
    };
  },

  created() {
    this.isLoadingVisits = true;
    Api.get('/visits/latest', {
      params: {
        rfid: this.rfid,
        limit: 50,
      },
    })
      .then((visits) => {
        this.isLoadingVisits = false;
        this.visits = visits;
      })
      .catch(() => {});

    Api.getBird(this.rfid)
      .then((bird) => {
        this.bird = bird;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
