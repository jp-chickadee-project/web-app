<template lang="pug">
div(class="card")
  div(class="card-header")
    h5(class="mb-0")
      button(
        class="btn btn-link"
        data-toggle="collapse"
        aria-expanded="true"
        :aria-controls="bird.rfid"
        :data-target="'#' + bird.rfid") {{bird.bandCombo}}
    div(
      class="collapse"
      :id="bird.rfid")
      div(class="card-body")
        div rfid: {{bird.rfid}}
        div species: {{bird.species}}
        div suspected sex: {{bird.suspectedSex}}
</template>

<script>
export default {
  name: 'bird-list-detail',
  props: {
    bird: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
