<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOneGyroid } from '@/api/gyroidApiEndpoint'
import GyroidCard from '@/components/GyroidCard.vue'

const route = useRoute();

const gyroid = ref({})

onMounted(async () => {
    gyroid.value = await getOneGyroid(route.params.name)
})
</script>

<template>
	<GyroidCard :name="gyroid.name" :number="gyroid.number" :rarity="gyroid.rarity" :location="gyroid.location" :imgUrl="gyroid.variations?.[0]?.image_url"></GyroidCard>
</template>

<style scoped></style>
