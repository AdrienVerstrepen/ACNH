import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', () => {
  // STATES
  const notifications = ref([])

  // GETTERS
  const lastNotification = computed(() => notifications.findLast())

  // ACTIONS
  const addNotification = ((message, type, duration = 5000) => {
    const id = Date.now()
    const notification = {id, message, type}
    if (notifications.value.length > 5) {
      notifications.value.pop()
    }
    notifications.value.unshift(notification)

    setTimeout(() => {
        removeNotification(id)
    }, duration)
  })

  const removeNotification = ((id) => {
    notifications.value = notifications.value.filter(notification => notification.id != id)
  })

  return {
    notifications,
    lastNotification,
    addNotification
  }
})
