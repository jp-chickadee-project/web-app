<template>
<div>{{visit.rfid}}</div>
</template>

<script>
export default {
  name: 'list-detail',
  props: {
    visit: {
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
