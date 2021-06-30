<template>
  <div class="registerbox">
    <input type="text" name="name" id="name" :value="name" placeholder="name"
           @input="name = $event.target.value"/><br/>
    <input type="text" name="email" id="email" :value="email" placeholder="email"
           @input="email = $event.target.value"/><br/>
    <input type="password" name="password" id="password" :value="password" placeholder="password"
           @input="password = $event.target.value"/><br/>
    <input type="password" name="password_confirmation" id="password_confirmation"
           placeholder="confirm password"
           :value="password_confirmation"
           @input="password_confirmation = $event.target.value"/><br/>
    <input type="button" value="Register" @click="register" />
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    register() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      console.log(this.password_confirmation);
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
    },
  },
};
</script>

<style scoped>
.registerbox input {
  width: 100px;
}
</style>
