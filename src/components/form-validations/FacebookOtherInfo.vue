<template>
    <div class="fb-other-info">
        <div class="form-group">
            <label>Birthday</label>
            <input type="date" v-model="model.birthday" />
            <div class="error" v-if="!$v.model.birthday.required">Birthday required</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { required } from 'vuelidate/lib/validators'
    import CheckValidationMixins from '../../mixins/check-validation-mixins'

    export default Vue.extend({
        mixins: [CheckValidationMixins],
        data() {
            return {
                model: {
                    birthday: null,
                }
            }
        },
        validations: {
            model: {
                birthday: {
                    required
                }
            }
        },
    })
</script>

<style scoped>

</style>