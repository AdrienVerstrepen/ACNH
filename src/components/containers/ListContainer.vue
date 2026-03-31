<script setup>
</script>

<template>
    <div class="grid-container">
        <slot></slot>
    </div>
</template>

<style scoped>
    .grid-container {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
        /* justify-items: center; */
        text-align: center;
        gap: 2em;
        padding: 20px;
    }
</style>