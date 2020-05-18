<template>
    <div class="fb-sign-up">
        <h1>FACEBOOK SIGN UP</h1>
        <validation-observer v-slot="{ invalid }">
            <facebook-basic-info v-on:validation="getValidationBasicInfo"/>
            <facebook-other-info v-on:validation="getValidationOtherInfo"/>
            <button :disabled="invalid === true">Submit</button>
        </validation-observer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import FacebookBasicInfo from './FacebookBasicInfo.vue'
    import FacebookOtherInfo from './FacebookOtherInfo.vue'
    import { required } from 'vuelidate/lib/validators'
    import { ValidationObserver } from 'vee-validate';

    export default Vue.extend({
        components: {
            FacebookBasicInfo,
            FacebookOtherInfo,
            ValidationObserver,
        },
        data() {
            return {
                model: {
                    fbInfo: null,
                    otherInfo: null,
                },
            }
        },
        validations: {
            model: {
                fbInfo: {
                    required
                },
                otherInfo: {
                    required
                }
            }
        },
        methods: {
            getValidationBasicInfo: function({ model }) {
                this.model.fbInfo = model;
            },
            getValidationOtherInfo: function({ model }) {
                this.model.otherInfo = model;
            }
        },
    })
</script>

<style>
.error {
    color: red;
}
</style>