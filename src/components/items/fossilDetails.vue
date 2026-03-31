<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    details: Object
})

</script>

<template>
    <p>
        {{ t('singleItem.fossil_group') }} : {{ details.fossil_group }}
    </p>
    <p>
        {{ t('singleItem.interactable') }} : {{ t('boolean.' + details.interactable) }}
    </p>
</template>

<style scoped>
</style>