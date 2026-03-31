<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    details: Object
})
</script>

<template>
    <p>
        {{ t('singleItem.shadow') }} : {{ t('shadow.' + details.shadow_size) }}
    </p>
    <p>
        {{ t('singleItem.rarity') }} : {{ t("rarity." + (details.rarity || "Common")) }}
    </p>
</template>

<style scoped>
</style>