<template lang="pug">
div(class="card")
  div(class="card-block")
    div
      a(:href="'/birds/' + visit.rfid") bird: {{visit.bandCombo}}
    div
      a(:href="'/feeders/' + visit.feederID") feeder: {{visit.feederID}}
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
