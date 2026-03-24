<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

defineProps({
    name: String,
    imageUrl: String,
    details: Object,
    type: String
})

</script>

<template>
    <div>
        <img :src="imageUrl" class="image">
    </div>
    <span><strong> {{ t(type + '.' +  name) }} </strong></span>
    <!-- <p v-for="(detail) in details" :key="detail.key">
        {{ detail }}
    </p> -->
    <slot></slot>
</template>

<style scoped>
.image {
    width: clamp(150px, 1em, 400px);
    height: clamp(150px, 1em, 200px);
}
</style>