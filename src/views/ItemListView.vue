<script setup>
import { ref, computed } from 'vue';
import { getAllItems } from '@/api/itemApiEndpoint';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useWishlistStore } from '@/stores/wishlistStore';
import { standardize } from '@/utils/standardize';
import SearchBar from '@/components/SearchBar.vue';
import { useI18n } from 'vue-i18n';
import ItemList from '@/components/ItemList.vue';
const { t } = useI18n()

const items = ref([])

const loading = ref(true)

const props = defineProps({
    endpoint: String
})

onMounted(async () => {
    const data = await getAllItems(props.endpoint)
    if (data) {
        items.value = data.map(item => {
            return standardize(item)
        })
        loading.value = false
    }
})

const search = ref("")

const filteredItems = computed(() => {
    if (search.value == "") {
        return items.value
    }
    const query = search.value.trim().toLowerCase()
    return items.value.filter((element) => {
        const name = t(props.endpoint + "." + element.name.toLowerCase()).toLowerCase()
        return name.trim().includes(query)
    })
})

</script>

<template>
    <div v-if="loading">
        Loading ...
    </div>
    <div v-else>
        <SearchBar v-model="search"></SearchBar>
        <ItemList :items="filteredItems" :endpoint="props.endpoint"></ItemList>
    </div>
</template>

<style scoped>
</style>