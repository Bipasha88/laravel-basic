<template>
  <img :src="birdImages.birds[currentIndex].image"
       class="bridImage"
       @click="changeBird"  alt="birds"/>
</template>

<script>

import birdImages from '../data/birdImages';

export default {
  name: 'Birds',
  data() {
    return {
      birdImages,
      currentIndex: 0,
    };
  },
  methods: {
    changeBird() {
      this.currentIndex = (this.currentIndex + 1) % 4;
      console.log(this.$store.state.token);
      this.$store.dispatch('business');
      this.$store.dispatch('closed');
    },
  },
};
</script>

<style>
.bridImage{
  border:solid red 1px;
  width:200px;
  height:200px;
}
</style>
