<script setup>
const search = defineModel()

</script>

<template>
    <input 
        type="text" 
        v-model="search"
        placeholder="Search"
    >
</template>

<style>
    input {
        width: 100%;
        height: 2.5em;
        font-size: 20px;
        text-align: center;
    }
</style>