<template>
  <div class="loginbox">
    <input type="text" name="email" id="email" :value="email"
           @input="email = $event.target.value"/><br/>
    <input type="password" name="password" id="password" :value="password"
           @input="password = $event.target.value"/>
    <input type="button" value="Login" @click="login" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
      this.$store.dispatch('login', { email: this.email, password: this.password });
    },
  },
};
</script>

<style scoped>
.loginbox input {
  width: 100px;
}
</style>
