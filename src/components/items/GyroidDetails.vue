<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    details: Object
})
</script>

<template>
    <p>
        {{ t("singleItem.variation_total") }} : {{ details.variation_total }} 
    </p>
    <p>
        {{ t("singleItem.sound") }} : {{ details.sound }}
    </p>
    <p>
        {{ details.customizable ? t("singleItem.customizable") : "" }}
    </p>
    <p>
        {{ t("singleItem.location") }} : {{ t("location." + details.availability[0].from) }}
    </p>
</template>

<style scoped>
</style>