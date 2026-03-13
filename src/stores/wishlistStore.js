import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', () => {
  // STATES
  const wishlist = ref([])

  // GETTERS
  const numberOfWishes = computed(() => wishlist.value.length())

  // ACTIONS
  const addToWishlist = (item) => {
    wishlist.value.push(item.name)
  }
  
  return {
    wishlist,
    numberOfWishes,
    addToWishlist
  }
})
