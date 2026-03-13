<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
    name: String,
    number: Number,
    location: String,
    rarity: String,
    imgUrl: String,
})

</script>
<template>
    <div>
        <div>
            <img :src="imgUrl">
        </div>
        <span><strong> {{ t('bugs.' + name.toLocaleLowerCase().replace("'", "")) }} </strong></span>
        <p>
            #{{ number }}
            {{ location }}
            {{  rarity }}
        </p>
    </div>
</template>
<style scoped>
</style>