<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import SearchBar from '@/components/SearchBar.vue';
import { getAllItems } from '@/api/itemApiEndpoint';
import { standardize } from '@/utils/standardize';

const { t } = useI18n()

import { endpoints } from '@/utils/endpoints';
import ItemList from '@/components/ItemList.vue';

const items = ref({})

const search = ref("")

const loading = ref(true)

onMounted(async () => {
    try {
        const promises = endpoints.map(async (endpoint) => {
        const data = await getAllItems(endpoint)
        if (data) {
            items.value[endpoint] = data.map(item => standardize(item))
            loading.value = false
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
        result[endpoint] = items.value[endpoint].filter((element) => {
            const name = t(endpoint + "." + element.name.toLowerCase()).toLowerCase()
            return name.trim().includes(query)
        })
    })
    return result
})

</script>

<template>
    <SearchBar v-model="search"></SearchBar>
    <div v-for="endpoint in endpoints" :key="endpoint">
        <div v-if="filteredItems[endpoint]">
            <h2>{{ t("nav." + endpoint.split("/")[0]) }}</h2>
            <ItemList :items="filteredItems[endpoint]" :endpoint="endpoint"></ItemList>
        </div>
    </div>
</template>

<style scoped>
</style>