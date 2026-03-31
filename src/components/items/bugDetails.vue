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
        {{ t("singleItem.rarity") }} : {{ t("rarity." + (details.rarity || "Common")) }}
    </p>
    <p>
        {{ t("singleItem.weather") }} : {{ t("weather." + (details.weather)) }}
    </p>
</template>

<style scoped>
</style>