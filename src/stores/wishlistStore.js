import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notificationStore'
import i18n from '@/i18n'

export const useWishlistStore = defineStore('wishlist', () => {

  // STATES
  const wishlist = ref([])
  const notificationStore = useNotificationStore()

  // GETTERS
  const wishlistNames = computed(() => new Set(wishlist.value.map(element => element.name)))
  const numberOfWishes = computed(() => wishlist.value.length)

  // ACTIONS
  const isInWishlist = (name) => wishlistNames.value.has(name)

  const addToWishlist = (name, type, imgUrl) => {
    wishlist.value.push({"name": name, "type": type, "image": imgUrl})
    notificationStore.addNotification({
      key: "wishlist.added",
      params: { name: `${type}.${name}`}
    }, 'success')
  }

  const removeFromWishlist = (name, type) => {
    wishlist.value = wishlist.value.filter((currentElement) => !(currentElement.name == name && currentElement.type == type))
    notificationStore.addNotification({
      key: 'wishlist.removed',
      params: { name: `${type}.${name}` }
    }, 'info')
  }

  const toggleWishlist = (name, type, imgUrl) => {
    if (isInWishlist(name)) {
      removeFromWishlist(name, type)
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
