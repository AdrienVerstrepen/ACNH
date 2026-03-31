<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    details: Object
})
</script>

<template>
    <p>
        {{ t('singleItem.has_fake') }} : {{ t('boolean.' + details.has_fake) }}
    </p>
    <p>
        {{ t('singleItem.author') }} : {{ details.author }}
    </p>
    <p>
        {{ t('singleItem.year') }} : {{ details.year }}
    </p>
    <p>
        {{ t('singleItem.buy') }} : {{ details.buy }}
    </p>
    <p>
        {{ t('singleItem.availability') }} : {{ details.availability }}
    </p>
    <div v-if="details.has_fake" class="image">
        {{ t('sentences.fake') }}
        <br><br>
        <img :src="details.fake_info.image_url">
    </div>
</template>

<style scoped>
    .image {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>