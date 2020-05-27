<template>
  <div id="app">
    <!-- <facebook-sign-up/> -->
    <!-- <demo-select2/> -->
    <simple-cart/>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from 'vuelidate';
// import FacebookSignUp from './components/form-validations/FacebookSignUp.vue';
import { joinRules } from './filters';
import SimpleCart from './components/form-validations/SimpleCart.vue';
// import DemoSelect2 from './components/select2/DemoSelect2.vue';
// import { getAllWards } from './api';

Vue.use(Vuelidate);
Vue.filter('joinRules', joinRules);

export default {
  name: 'App',
  components: {
    // FacebookSignUp,
    // DemoSelect2,
    SimpleCart
  },
  created() {
    // getAllDistricts().then(result => console.log(JSON.stringify(result)));
    // getAllWards().then(result => console.log(JSON.stringify(result)));
  },
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
