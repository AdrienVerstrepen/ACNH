<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOneFossil } from '@/api/fossilApiEndpoint'
import FossilCard from '@/components/FossilCard.vue'

const route = useRoute();

const fossil = ref({})

onMounted(async () => {
    fossil.value = await getOneFossil(route.params.name)
})
</script>

<template>
    <FossilCard :name="fossil.name" :imgUrl="fossil.image_url"></FossilCard>
</template>

<style scoped></style>
