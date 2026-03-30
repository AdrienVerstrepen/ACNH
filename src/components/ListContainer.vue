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
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        justify-content: center;
        justify-items: center;
        text-align: center;
        gap: 5.3em;
        padding: 20px;
    }
</style>