<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FossilCard from '@/components/FossilCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'
import { getAllFossils } from '@/api/fossilApiEndpoint'

const router = useRouter();

const fossils = ref([])

onMounted(async () => {
    fossils.value = await getAllFossils()
})

const getFossilDetails = (fossilName) => {
    router.push({
        name: 'fossil',
		params: { name: fossilName },
    })
}

</script>

<template>
    <ListContainer>
        <div v-for="fossil in fossils" :key="fossil.number">
            <CardContainer>
                <FossilCard :name="fossil.name" :imgUrl="fossil.image_url"></FossilCard>
                <button @click="getFossilDetails(fossil.name)">More informations !</button>
            </CardContainer>
        </div>
    </ListContainer>
</template>

<style scoped></style>
