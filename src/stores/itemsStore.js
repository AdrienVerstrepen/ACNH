import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemStore = defineStore('items', () => {
  // STATES
  const items = ref({})

  // GETTERS
  const filteredItems = computed((filter) => {
    
    Object.keys(items.value).forEach((type) => {

    })
  })
  

  // ACTIONS

  return {
    filteredItems
  }
})