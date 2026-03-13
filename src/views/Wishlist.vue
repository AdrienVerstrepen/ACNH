<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { useWishlistStore } from '@/stores/wishlistStore';

const wishlist = useWishlistStore()

</script>

<template>
    <div class="wishlist">
        <div class="item" v-for="(element) in wishlist" :key="element.id">
            
        </div>
    </div>
</template>

<style scoped>

</style>
