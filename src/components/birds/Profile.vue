<template lang="pug">
div reee
</template>

<script>
import Api from '@/api';

export default {
  props: ['rfid'],
  components: {},
  name: 'bird-profile',
  data() {
    return {
      birds: [],
    };
  },
  created() {
    Api.get('/birds/')
      .then((response) => {
        console.log(response.data);
        console.log(this.rfid);
        this.birds = response.data;
      })
      .catch(() => {});
  },
};
</script>

<style scoped></style>
