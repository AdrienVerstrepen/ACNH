<script setup>
import { computed } from 'vue'
import { useWishlistStore } from '@/stores/wishlistStore'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const store = useWishlistStore()

const props = defineProps({
  name: String,
  endpoint: String,
  image: String,
})

const { t } = useI18n()

const router = useRouter()

const getItemDetail = (itemType, itemName) => {
  router.push({
    name: itemType.split('/')[0] + '-detail',
    params: { name: itemName },
  })
}

const wishlistStatus = computed(() => {
  return t('wishlist.' + store.isInWishlist(props.name))
})
</script>

<template>
  <div class="card-actions">
    <button
      @click="store.toggleWishlist(props.name, props.endpoint, props.image)"
      class="btn-action btn-wishlist"
    >
      <span class="emoji">✨</span>
      <span class="text">{{ wishlistStatus }}</span>
      <span class="emoji">✨</span>
    </button>
    <button @click="getItemDetail(props.endpoint, props.name)" class="btn-action btn-info">
      <span class="emoji">🙀</span>
      <span class="text">{{ t('items.infos') }}</span>
      <span class="emoji">🙀</span>
    </button>
  </div>
</template>

<style scoped>
.card-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 15px 20px 15px;
}

.btn-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  border: none;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
}

.btn-wishlist {
  background-color: #fdf6e3;
  color: #8b5e3c;
  border: 2px solid #e2d1b3;
}

.btn-info {
  background-color: #e3f2fd;
  color: #4a90e2;
  border: 2px solid #bcdffb;
}

.btn-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.05);
  filter: brightness(1.02);
}

.btn-action:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

.emoji {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.text {
  flex-grow: 1;
  text-align: center;
}
</style>
