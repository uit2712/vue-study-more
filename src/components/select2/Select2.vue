<template>
    <validation-provider :rules="rules" v-slot="{ errors }">
        <select v-model="value" :name="name">
            <slot></slot>
        </select>
        <div class="error">{{ errors[0] }}</div>
    </validation-provider>
</template>

<script lang="ts">
    import Vue from "vue";
    import $ from "jquery";
    import "select2";
    import { ValidationProvider } from 'vee-validate';

    export default Vue.extend({
        components: {
            ValidationProvider,
        },
        props: ["options", "value", "placeholder", "searchInputPlaceholder", "rules", "name"],
        mounted: function() {
            var vm = this;
            $(this.$el)
                .find('select')
                // init select2
                .select2({
                    data: this.options,
                    placeholder: this.placeholder,
                })
                .val(this.value)
                .trigger("change")
                // emit event on change.
                .on("change", function() {
                    vm.$emit("input", Number(this.value));
                });

            this.setSearchInputPlaceholder();
        },
        watch: {
            value: function(value) {
                // update value
                $(this.$el)
                    .find('select')
                    .val(value)
                    .trigger("change");
            },
            options: function(options) {
                // update options
                $(this.$el)
                    .find('select')
                    .empty()
                    .select2({
                        data: options,
                        placeholder: this.placeholder,
                    })

                this.deselectAll();
                this.setSearchInputPlaceholder();
            },
        },
        methods: {
            setSearchInputPlaceholder() {
                $(this.$el)
                    .find('select')
                    .data('select2')
                    .$dropdown
                    .find(':input.select2-search__field')
                    .attr('placeholder', this.searchInputPlaceholder || '');
            },
            deselectAll() {
                $(this.$el)
                    .find('select')
                    .val('')
                    .change();
            },
            custom() {
                return { on: ['search:blur', 'input'] };
            },
            onBlur() {
                console.log('yes');
            }
        },
        destroyed: function() {
            $(this.$el)
                .off()
                .select2("destroy");
        },
    });
</script>

<style scoped>
select {
    width: 200px;
    height: 500px;
}
</style>
