<template>
    <form
      action="https://vuejs.org/"
      method="post"
      @submit.prevent="submit"
    >
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
            <label class="form__label" for="name">Name</label>
            <input
                class="form__input"
                id="name"
                v-model.trim="$v.name.$model"
                type="text"
                name="name"
            >
            <div class="error" v-show="$v.name.$dirty" v-if="!$v.name.required">Name is required</div>
            <div class="error" v-show="$v.name.$dirty" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }}</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
            <label for="age">Age</label>
            <input
                id="age"
                v-model="age"
                type="number"
                name="age"
                min="0"
            >
            <div class="error" v-if="!$v.age.required">Age is required</div>
            <div class="error" v-if="!$v.age.numeric">Age must be a number</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.movie.$error }">
            <label for="movie">Favorite Movie</label>
            <select
                id="movie"
                v-model="movie"
                name="movie"
            >
                <option>Star Wars</option>
                <option>Vanilla Sky</option>
                <option>Atomic Blonde</option>
            </select>
            <div class="error" v-if="!$v.movie.required">Movie is required</div>
        </div>

        <p>
            <input
                type="submit"
                value="Submit"
            >
        </p>
    </form>
</template>

<script lang="ts">
    import Vue from "vue";
    import { required, minLength, numeric } from 'vuelidate/lib/validators';

    export default Vue.extend({
        name: 'form-validation',
        data() {
            return {
                name: null,
                age: null,
                movie: null,
                submitStatus: null
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(4)
            },
            age: {
                required,
                numeric
            },
            movie: {
                required
            }
        },
        methods: {
            submit: function() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR';
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING'

                }
            }
        }
    });
</script>

<style scoped>
input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}
</style>
