<template>
    <div class="fb-basic-info">
        <h2>Basic info</h2>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" v-model="model.firstName" />
            <div class="error" v-if="!$v.model.firstName.required">First Name required</div>
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" v-model="model.lastName" />
            <div class="error" v-if="!$v.model.lastName.required">Last Name required</div>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" v-model="model.email" />
            <div class="error" v-if="!$v.model.email.required">Email required</div>
            <div class="error" v-if="!$v.model.email.email">Email invalid</div>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="text" v-model="model.password" />
            <div class="error" v-if="!$v.model.password.required">Password required</div>
            <div class="error" v-if="!$v.model.password.minLength">Password must have at least {{ $v.model.password.$params.minLength.min }} characters</div>
            <div class="error" v-if="!$v.model.password.alphaNum">Password must only contains alphabet and numeric</div>
        </div>
        <div class="form-group">
            <label>Confirm Password</label>
            <input type="text" v-model="model.confirmPassword" />
            <div class="error" v-if="!$v.model.confirmPassword.sameAs">Password not match</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { required, email, minLength, alphaNum, sameAs } from 'vuelidate/lib/validators'
    import CheckValidationMixins from '../../mixins/check-validation-mixins';

    export default Vue.extend({
        mixins: [CheckValidationMixins],
        data() {
            return {
                model: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    password: null,
                    confirmPassword: null,
                }
            }
        },
        validations: {
            model: {
                firstName: {
                    required,
                },
                lastName: {
                    required,
                },
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                    minLength: minLength(6),
                    alphaNum,
                },
                confirmPassword: {
                    sameAs: sameAs('password')
                }
            }
        }
    })
</script>

<style scoped>
</style>