<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
    name: String,
    imgUrl: String,
})

</script>
<template>
    <div>
        <div>
            <img :src="imgUrl">
        </div>
        <strong> {{ t('gyroids.' + name ) }} </strong>
    </div>
</template>
<style scoped>
</style>