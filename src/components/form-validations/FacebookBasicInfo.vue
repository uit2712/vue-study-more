<template>
    <div class="fb-basic-info">
        <h2>Basic info</h2>
        <validation-provider class="form-group" :rules="[REQUIRED_RULE] | joinRules" v-slot="{ errors }">
            <label>First Name</label>
            <input type="text" v-model="model.firstName" name="First name" />
            <div class="error">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider class="form-group" rules="required" v-slot="{ errors }">
            <label>Last Name</label>
            <input type="text" v-model="model.lastName" name="Last name" />
            <div class="error">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider class="form-group" :rules="[REQUIRED_RULE, EMAIL_RULE] | joinRules" v-slot="{ errors }">
            <label>Email</label>
            <input type="text" v-model="model.email" name="Email" />
            <div class="error">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider class="form-group" :rules="[REQUIRED_RULE, MIN_LENGTH_RULE(6)] | joinRules" v-slot="{ errors }">
            <label>Password</label>
            <input type="text" v-model="model.password" name="Password" />
            <div class="error">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider class="form-group" :rules="[REQUIRED_RULE, SAME_PASSWORD_RULE(model.password) ] | joinRules" v-slot="{ errors }">
            <label>Confirm Password</label>
            <input type="text" v-model="model.confirmPassword" name="Confirm password" />
            <div class="error">{{ errors[0] }}</div>
        </validation-provider>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { ValidationProvider } from 'vee-validate';
    import CheckValidationMixins from '../../mixins/check-validation-mixins';
    import ruleNames from '../../validations/vee-validate';

    export default Vue.extend({
        mixins: [CheckValidationMixins],
        components: {
            ValidationProvider,
        },
        data() {
            return {
                model: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    password: null,
                    confirmPassword: null,
                },
            }
        },
        computed: {
            ...ruleNames,
        }
    })
</script>

<style scoped>
</style>