<template>
  <div id="app">
    <facebook-sign-up/>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from 'vuelidate';
import FacebookSignUp from './components/form-validations/FacebookSignUp.vue';
import { joinRules } from './filters';

Vue.use(Vuelidate);
Vue.filter('joinRules', joinRules);

export default {
  name: 'App',
  components: {
    FacebookSignUp,
  }
}
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
