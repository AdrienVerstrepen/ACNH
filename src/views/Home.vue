<script setup>
import router from '@/router';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <h1>{{ t('home.title') }}</h1>
  This super duper website is here to help you complete your ACNH collections.
  <br>
  <br>
  Feel free to star the project on <a href="https://github.com/AdrienVerstrepen/ACNH">GitHub</a>.
</template>

<style scoped>

</style>
