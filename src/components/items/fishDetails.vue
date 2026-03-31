<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    details: Object
})
</script>

<template>
    <p class="location">
        {{ t("singleItem.location") }} {{ t("location." + details.location) }}
    </p>
    <p class="rarity">
        {{ t("singleItem.rarity") }} : {{ t("rarity." + details.rarity) }}
    </p>
    <p class="shadow">
        {{ t("singleItem.shadow") }} : {{ t("shadow." + details.shadow_size) }}
    </p>
</template>

<style scoped>
</style>