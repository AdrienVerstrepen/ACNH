<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOneFish } from '@/api/fishApiEndpoint'
import FishCard from '@/components/FishCard.vue'

const route = useRoute();

const fish = ref({})

onMounted(async () => {
    fish.value = await getOneFish(route.params.name)
})
</script>

<template>
    <FishCard :name="fish.name" :number="fish.number" :rarity="fish.rarity" :location="fish.location" :imgUrl="fish.image_url"></FishCard>
</template>

<style scoped></style>
