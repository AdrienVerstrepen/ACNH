<script setup>
import { computed } from 'vue';
import itemCard from './itemCard.vue';
import CardContainer from './CardContainer.vue';
import { useWishlistStore } from '@/stores/wishlistStore';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const router = useRouter()

const store = useWishlistStore()

const props = defineProps({
    items: Array,
    endpoint: String
})

const getItemDetail = (itemType, itemName) => {
    router.push({
        name: itemType.split("/")[0] + "-detail",
        params: { name: itemName },
    })  
}

const wishlistButtonText = (name) => {
    return t("wishlist." + store.isInWishlist(name))
}

</script>

<template>
    <div class="grid-container">
        <div v-for="item in items" :key="item.name" v-bind="item" :type="props.endpoint">
            <CardContainer>
                <itemCard :name="item.name" :image-url="item.image" :type="props.endpoint" :details="item.details">
                    <button @click="store.toggleWishlist(item.name, props.endpoint, item.image)">{{ wishlistButtonText(item.name) }}</button>
                </itemCard>
                <button @click="getItemDetail(props.endpoint, item.name)">More informations !</button>
            </CardContainer>
        </div>
    </div>
</template>

<style scoped>
    .grid-container {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-content: center;
        text-align: center;
        gap: 1em;
    }
</style>