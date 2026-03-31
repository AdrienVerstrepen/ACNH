<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
	<div class="content">{{ t("sentences.loading") }}</div>
</template>

<style scoped>
    .content {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>