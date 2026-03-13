<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import GyroidCard from '@/components/GyroidCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'
import { getAllGyroids } from '@/api/gyroidApiEndpoint'

const router = useRouter();

const gyroids = ref([])

onMounted(async () => {
    gyroids.value = await getAllGyroids()
})

const getGyroidDetails = (gyroidName) => {
    router.push({
        name: 'gyroid',
		params: { name: gyroidName },
    })
}

</script>

<template>
    <ListContainer>
        <div v-for="gyroid in gyroids" :key="gyroid.number">
            <CardContainer>
                <GyroidCard :name="gyroid.name" :imgUrl="gyroid.variations[0].image_url"></GyroidCard>
                <button @click="getGyroidDetails(gyroid.name)">More informations !</button>
            </CardContainer>
        </div>
    </ListContainer>
</template>

<style scoped></style>
