import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notificationStore'
import i18n from '@/i18n'

export const useWishlistStore = defineStore('wishlist', () => {
  const { t } = i18n.global

  // STATES
  const wishlist = ref([])
  const notificationStore = useNotificationStore()

  // GETTERS
  const numberOfWishes = computed(() => wishlist.value.length)

  // ACTIONS
  const isInWishlist = (name) => wishlist.value.some(favori => favori.name === name)

  const addToWishlist = (name, type, imgUrl) => {
    console.log(name, type)
    wishlist.value.push({"name": name, "type": type, "image": imgUrl})
    notificationStore.addNotification(`${t(type + "." + name)} ${t("wishlist.added")}`)
  }

  const removeFromWishlist = (name, type) => {
    wishlist.value = wishlist.value.filter((currentElement) => !(currentElement.name == name && currentElement.type == type))
    notificationStore.addNotification(`${t(type + "." + name)} ${t("wishlist.removed")}`)
  }

  const toggleWishlist = (name, type, imgUrl) => {
    console.log(name, type)
    console.log(wishlist.value)
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
