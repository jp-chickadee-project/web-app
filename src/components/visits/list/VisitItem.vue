<template lang="pug">
div(class="card")
  div(class="card-block")
    h4(class="card-title")
      a(:href="'/birds/' + visit.rfid") {{visit.bandCombo}}
    div feeder: {{visit.feederID}}
    div time: {{new Date(visit.visitTimestamp * 1000).toGMTString()}}
</template>

<script>
export default {
  name: 'VisitItem',
  props: {
    visit: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
