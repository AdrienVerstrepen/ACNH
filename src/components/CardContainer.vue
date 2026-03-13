<script setup>
</script>
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
    .card {
        border-radius: 45px;
        background-color: var(--card-bg-color);
        height:100%;
        display:grid;
        grid-template-rows: 1fr auto;
        transform-origin: center;
        transition:
          transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
          box-shadow 0.3s ease;
    }

    .card:hover{
        transform: scale(1.05);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
    }
</style>