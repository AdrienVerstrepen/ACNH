<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOneItem } from '@/api/itemApiEndpoint';
import { standardize } from '@/utils/standardize';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const route = useRoute();

const endpoint = ref("")

const item = ref({})

onMounted(async () => {
    endpoint.value = route.path.split("/")[1]
    const name = route.path.split('/')[2]
    const data = await getOneItem(endpoint.value, name)
    item.value = standardize(data)
})

</script>

<template>
    <div>
        <img :src="item.image" class="image">
    </div>
    <span><strong> {{ t(endpoint + "." + item.name)}} </strong></span>
    <p v-for="(detail) in item.details" :key="detail.key">
        {{ detail }}
    </p>
    <slot></slot>
    <p></p>
</template>

<style scoped></style>
