<template>
  <div>
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/birds">Birds</router-link><br/>
    <router-link to="/login">Login</router-link><br/>
    <img alt="Vue logo" src="./assets/logo.png"><br/>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
