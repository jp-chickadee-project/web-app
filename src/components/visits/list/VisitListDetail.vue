<template lang="pug">
div(class="card")
  div(class="card-block")
    h4(class="card-title") rfid: {{visit.rfid}}
    div feeder: {{visit.feederID}}
    div time: {{new Date(visit.visitTimestamp * 1000).toGMTString()}}
</template>

<script>
export default {
  name: 'visit-list-detail',
  props: {
    visit: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
