<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BugCard from '@/components/BugCard.vue'
import { getOneBug } from '@/api/bugApiEndpoint'

const route = useRoute();

const bug = ref({})

onMounted(async () => {
    bug.value = await getOneBug(route.params.name)
})
</script>

<template>
    <BugCard :name="bug.name" :number="bug.number" :rarity="bug.rarity" :location="bug.location" :imgUrl="bug.image_url"></BugCard>
</template>

<style scoped></style>
