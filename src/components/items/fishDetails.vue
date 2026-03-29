<script setup>

const props = defineProps({
    details: Object
})
</script>

<template>
    <div class="location">
        {{ details.location }}
    </div>
    <div class="rarity">
        {{ details.rarity }}
    </div>

    <div v-for="detail in details">
        <p>{{ detail }}</p>
    </div>
</template>

<style scoped>
</style>