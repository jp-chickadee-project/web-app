<template>
<v-flex>
  <v-card height='100%'>
    <v-list>
      <v-list-tile>{{title}}</v-list-tile>
      <v-list-tile avatar v-for="bird in birds" :key="bird.name" @click="" :to="'/birds/' + bird.rfid">
        <v-list-tile-avatar>
          <img src="./../../assets/bird.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="bird.bandCombo" />
          <v-list-tile-sub-title v-if='bird.value' v-html="bird.value"/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</v-flex>
</template>

<script>


export default {
  components: {},
  name: 'BirdAvatarList',
  props: {
    birds: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      friends: [],
    };
  }
}
</script>

<style scoped>
</style>
