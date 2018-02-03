<template>
  <div>
    bird list
    <ListDetail
      v-for="bird in birds"
      :key="bird.rfid"
      :bird="bird"/>
  </div>
</template>

<script>
import ListDetail from './ListDetail';

export default {
  components: {
    ListDetail,
  },
  name: 'List',
  data() {
    return {
      birds: [
        { rfid: 'hi' },
        { rfid: 'hii' },
        { rfid: 'hiii' },
        { rfid: 'hiiii' },
      ],
    };
  },
};
</script>

<style scoped></style>
