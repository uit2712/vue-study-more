<template>
    <div id="form-input-binding">
        <h1>Form Input Binding</h1>
        <form id="demo">
            <!-- text -->
            <p>
                <input type="text" v-model.number="msg">
                {{msg}}
            </p>
            <!-- checkbox -->
            <p>
                <input type="checkbox" v-model="checked">
                {{checked ? "yes" : "no"}}
            </p>
            <!-- radio buttons -->
            <p>
                <input type="radio" name="picked" value="one" v-model="picked">
                <input type="radio" name="picked" value="two" v-model="picked">
                {{picked}}
            </p>
            <!-- select -->
            <p>
                <select v-model="selected">
                <option>one</option>
                <option>two</option>
                </select>
                {{selected}}
            </p>
            <!-- multiple select -->
            <p>
                <select v-model="multiSelect" multiple>
                <option>one</option>
                <option>two</option>
                <option>three</option>
                </select>
                {{multiSelect}}
            </p>
            <p><pre>data: {{$data}}</pre></p>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "form-input-binding",
    data: function() {
        return {
            msg: "hi!",
            checked: true,
            picked: "one",
            selected: "two",
            multiSelect: ["one", "three"]
        };
    }
});
</script>

<style>
</style>