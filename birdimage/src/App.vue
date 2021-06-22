<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  <Birds />
</template>

<script>
import Birds from './birds/Birds.vue';
export default {
  name: 'App',
  components: {
    Birds,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
