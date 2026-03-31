<script setup>
import { ref, computed, onMounted, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SearchBar from '@/components/SearchBar.vue'
import { getAllItems } from '@/api/itemApiEndpoint'
import { standardize } from '@/utils/standardize'
import { endpoints } from '@/utils/endpoints'
import ItemList from '@/components/ItemList.vue'
import gsap from 'gsap'
import Loading from '@/components/Loading.vue'

const { t } = useI18n()

const items = ref({})

const search = ref("")

const loading = ref(true)

onMounted(async () => {
    try {
        const promises = endpoints.map(async (endpoint) => {
            const data = await getAllItems(endpoint)
            if (data) {
                items.value[endpoint] = data.map(item => {
                    const currentItem = standardize(item)
                    return {
                        ...currentItem,
                        searchName: t(`${endpoint}.${currentItem.name}`).replace("'", "").replace(".", "").toLowerCase()
                    }
                })
            }
            if (items.value[endpoint]?.length != undefined) {
                numberOfItems.value += items.value[endpoint]?.length
            }
        })
        await Promise.all(promises)
    } finally {
        loading.value = false
    }
})

const filteredItems = computed(() => {
    if (search.value == "") {
        return items.value
    }
    const query = search.value.trim().toLowerCase()
    let result = {}
    endpoints.forEach((endpoint) => {
        if (!items.value[endpoint]) {
            return
        }
        result[endpoint] = items.value[endpoint].filter((element) => element.searchName.trim().includes(query))
    })
    return result
})

const numberOfItems = ref(0)
const tweened = reactive({
    number: 0
})

watch(numberOfItems, (n) => {
    console.log(numberOfItems.value)
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0})
})

</script>

<template>
    <div v-if="loading">
        <Loading></Loading>
    </div>
    <div v-else>
        <SearchBar v-model="search"></SearchBar>
        {{ tweened.number.toFixed(0) }} éléments...
        <div v-for="endpoint in endpoints" :key="endpoint">
            <div v-if="filteredItems[endpoint]">
                <ItemList :items="filteredItems[endpoint]" :endpoint="endpoint"></ItemList>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>