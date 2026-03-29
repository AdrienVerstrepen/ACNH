<script setup>
import { useWishlistStore } from '@/stores/wishlistStore';
import ItemCard from '@/components/itemCard.vue';
import CardContainer from '@/components/CardContainer.vue';

const store = useWishlistStore()

</script>

<template>
    <div class="wishlist">
        <div class="item" v-for="(element) in store.wishlist" :key="element.name">
            <CardContainer>
                <ItemCard :name="element.name" :type="element.type" :image-url="element.image">
                    <button @click="store.toggleWishlist(element.name, element.type, element.image)">{{ store.isInWishlist ? "Retirer des favs" : "ajouter aux fav"}}</button>
                </ItemCard>
            </CardContainer>
        </div>
    </div>
</template>

<style scoped>
    .wishlist {
        margin: 20px;
        display:flex;
        gap: 25px;
    }
</style>
