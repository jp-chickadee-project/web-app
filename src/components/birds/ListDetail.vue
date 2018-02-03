<template>
  <div>{{bird.rfid}}</div>
</template>

<script>
export default {
  name: 'list-detail',
  props: {
    bird: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
