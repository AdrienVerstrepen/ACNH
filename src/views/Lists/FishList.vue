<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllFishes } from '@/api/fishApiEndpoint'
import FishCard from '@/components/FishCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'

const router = useRouter();

const fishes = ref([])

onMounted(async () => {
    fishes.value = await getAllFishes()
})

const getFishDetails = (fishName) => {
    router.push({
        name: 'fish',
		params: { name: fishName },
    })  
}
</script>

<template>
    <ListContainer>
        <div v-for="fish in fishes" :key="fish.number">
            <CardContainer>
                <FishCard :name="fish.name" :number="fish.number" :rarity="fish.rarity" :location="fish.location" :imgUrl="fish.image_url"></FishCard>
                <button @click="getFishDetails(fish.name)">More informations !</button>
            </CardContainer>
        </div>
    </ListContainer>

</template>

<style scoped>
</style>
