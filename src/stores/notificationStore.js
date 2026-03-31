import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', () => {
  // STATES
  const notifications = ref([])

  // GETTERS
  const lastNotification = computed(() => notifications.value[0])

  // ACTIONS
  const addNotification = (messageKey, type = 'info', duration = 5000) => {
    const id = Date.now()

    notifications.value.unshift({
      id,
      messageKey: messageKey || { key: 'default.error', params:{} },
      type
    })

    if (notifications.value.length >= 5) {
      notifications.value.pop()
    }

    setTimeout(() => {
        removeNotification(id)
    }, duration)
  }

  const removeNotification = ((id) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  })

  return {
    notifications,
    lastNotification,
    addNotification
  }
})
