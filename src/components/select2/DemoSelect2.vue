<template>
    <div>
        <p>Selected: {{ selected }}</p>
        <select2 :options="options" v-model="selected">
            <option disabled value="0">Select one</option>
        </select2>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
import Select2 from "./Select2.vue";

    export default Vue.extend({
        components: {
            Select2
        },
        data() {
            return {
                selected: 2,
                options: [{ id: 1, text: "Hello" }, { id: 2, text: "World" }]
            }
        },
    });
</script>

<style scoped></style>
