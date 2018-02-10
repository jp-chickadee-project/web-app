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
      div(class="card-body") words
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
