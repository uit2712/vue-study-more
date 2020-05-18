<template>
    <div class="form-group">
        <label class="form__label">Birthday</label>
        <validation-provider
            :rules="[REQUIRED_RULE] | joinRules"
            v-slot="{ errors, classes }"
            :bails="false"
        >
            <input type="date" v-model="model.birthday" :class="classes" name="birthday" />
            <div class="error" v-for="(error, index) in errors" :key="index">{{ error }}</div>
        </validation-provider >
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { ValidationProvider, } from 'vee-validate';
    import CheckValidationMixins from '../../mixins/check-validation-mixins';
    import ruleNames from '../../validations/vee-validate';

    export default Vue.extend({
        components: {
            ValidationProvider,
        },
        mixins: [CheckValidationMixins],
        data() {
            return {
                model: {
                    birthday: null,
                }
            }
        },
        computed: {
            ...ruleNames,
        }
    })
</script>

<style scoped>
.is-invalid {
    border-width: 2px;
    border-color: red;
}
</style>