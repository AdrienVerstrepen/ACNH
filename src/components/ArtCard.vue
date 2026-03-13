<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


defineProps({
    name: String,
    author: String,
    artType: String,
    year: String,
    imgUrl: String,
})

</script>
<template>
    <div>
        <div>
            <img :src="imgUrl">
        </div>
        <span><strong> {{ t('art.' + name) }} </strong></span>
        <p>
            by {{ author }}
            in {{  year }}
            type : {{ artType }}
        </p>
    </div>
</template>
<style scoped>
</style>