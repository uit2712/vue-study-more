<template>
    <div>
        <p>Selected: {{ selected }}</p>
        <select2 :options="options" v-model="selected">
            <option disabled value="0">Select one</option>
        </select2>
        <demo-select-address/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Select2 from "./Select2.vue";
    import DemoSelectAddress from "./DemoSelectAddress.vue";

    export default Vue.extend({
        components: {
            Select2,
            DemoSelectAddress
        },
        data() {
            return {
                selected: 2,
                selectedOption: null,
                options: [{ id: 1, text: "Hello" }, { id: 2, text: "World" }]
            }
        },
        created() {
            if (this.selected > 0 && this.selected <= this.options.length) {
                this.selectedOption = this.options[this.selected - 1];
            }
        },
        watch: {
            selected: function() {
                if (this.selected > 0 && this.selected <= this.options.length) {
                    this.selectedOption = this.options[this.selected - 1];
                }
            }
        }
    });
</script>

<style scoped></style>
