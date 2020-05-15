<template>
    <div class="my-slot">
        <slot name="title"></slot>
        <h3>fsdfsdfsdfds</h3>
        <slot name="value"></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'my-slot',
        
    })
</script>

<style scoped>

</style>