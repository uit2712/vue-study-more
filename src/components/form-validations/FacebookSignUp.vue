<template>
    <div class="fb-sign-up">
        <h1>FACEBOOK SIGN UP</h1>
        <facebook-basic-info v-on:validation="getValidationBasicInfo"/>
        <facebook-other-info v-on:validation="getValidationOtherInfo"/>
        <button :disabled="valid === false">Submit</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import FacebookBasicInfo from './FacebookBasicInfo.vue'
    import FacebookOtherInfo from './FacebookOtherInfo.vue'
    import { required } from 'vuelidate/lib/validators'

    export default Vue.extend({
        components: {
            FacebookBasicInfo,
            FacebookOtherInfo,
        },
        data() {
            return {
                model: {
                    fbInfo: null,
                    otherInfo: null,
                },
                valid: false,
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
            getValidationBasicInfo: function({ model, valid }) {
                if (valid)
                    this.model.fbInfo = model;
                else this.model.fbInfo = null;
            },
            getValidationOtherInfo: function({ model, valid }) {
                if (valid)
                    this.model.otherInfo = model;
                else this.model.otherInfo = null;
            }
        },
        watch: {
            '$v.$invalid': function() {
                this.valid = !this.$v.$invalid;
            }
        },
        created() {
            this.valid = !this.$v.$invalid;
        }
    })
</script>

<style>
.error {
    color: red;
}
</style>