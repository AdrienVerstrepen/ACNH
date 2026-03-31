<script setup>
import { useWishlistStore } from '@/stores/wishlistStore'
import ItemCard from '@/components/card/itemCard.vue'
import CardContainer from '@/components/containers/CardContainer.vue'
import ListContainer from '@/components/containers/ListContainer.vue'
import CardActions from '@/components/card/CardActions.vue'

const store = useWishlistStore()
</script>

<template>
  <div class="wishlist">
    <ListContainer>
        <CardContainer class="item" v-for="element in store.wishlist" :key="element.name">
          <ItemCard :name="element.name" :type="element.type" :image-url="element.image">
          </ItemCard>
          <CardActions :name="element.name" :image="element.image" :endpoint="element.type"></CardActions>
        </CardContainer>
    </ListContainer>
  </div>
</template>

<style scoped>
</style>