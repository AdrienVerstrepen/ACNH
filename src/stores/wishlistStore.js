import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notificationStore'

export const useWishlistStore = defineStore('wishlist', () => {
  // STATES
  const wishlist = ref([])
  const notificationStore = useNotificationStore()

  // GETTERS
  const numberOfWishes = computed(() => wishlist.value.length)

  // ACTIONS
  const isInWishlist = (name) => wishlist.value.some(favori => favori.name === name)

  const addToWishlist = (name, type, imgUrl) => {
    wishlist.value.push({"name": name, "type": type, "image": imgUrl})
    notificationStore.addNotification(`${name} added to your wishlist !`)
  }

  const removeFromWishlist = (name) => {
    wishlist.value = wishlist.value.filter((currentElement) => currentElement.name != name)
    notificationStore.addNotification(`${name} removed from your wishlist !`)
  }

  const toggleWishlist = (name, type, imgUrl) => {
    if (isInWishlist(name)) {
      removeFromWishlist(name)
    } else {
      addToWishlist(name, type, imgUrl)
    }
  }
  
  return {
    wishlist,
    numberOfWishes,
    toggleWishlist,
    isInWishlist
  }
})
