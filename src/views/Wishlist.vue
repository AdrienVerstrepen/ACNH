<script setup>
import { useWishlistStore } from '@/stores/wishlistStore'
import ItemCard from '@/components/itemCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'

const store = useWishlistStore()
</script>

<template>
  <div class="wishlist">
    <ListContainer>
        <CardContainer class="item" v-for="element in store.wishlist" :key="element.name">
          <ItemCard :name="element.name" :type="element.type" :image-url="element.image">
            <button @click="store.toggleWishlist(element.name, element.type, element.image)">
              {{ store.isInWishlist ? 'Retirer des favs' : 'ajouter aux fav' }}
            </button>
          </ItemCard>
        </CardContainer>
    </ListContainer>
  </div>
</template>

<style scoped>
</style>
