<template>
  <div id="app">
    <!-- <my-slot>
      <template v-slot:title><form-input-binding /></template>
      <template v-slot:value><form-validation /></template>
    </my-slot> -->
    <facebook-sign-up/>
    <test/>
  </div>
</template>

<script>
import Vue from "vue";
// import FormValidation from './components/form-validations/FormValidation.vue'
// import FormInputBinding from './components/FormInputBinding.vue'
// import MySlot from './components/MySlot.vue'
import Vuelidate from 'vuelidate';
import FacebookSignUp from './components/form-validations/FacebookSignUp.vue';

Vue.use(Vuelidate);

export default {
  name: 'App',
  components: {
    // FormInputBinding,
    // FormValidation,
    // MySlot,
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
