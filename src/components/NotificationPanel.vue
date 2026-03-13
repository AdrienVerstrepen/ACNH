<script setup>
import { useNotificationStore } from '@/stores/notificationStore'
import { TransitionGroup } from 'vue';

const store = useNotificationStore()

</script>

<template>
    <div class="notifications">
        <TransitionGroup name="notifications">
            <div class="notification-card" v-for="(notification) in store.notifications" :key="notification.id">
                <div class="icone">
                    
                </div>
                <span :class="notification.type">
                    {{ notification.message }}
                </span>
            </div> 
        </TransitionGroup>
    </div>

</template>

<style scoped>
    .notifications-move {
        transition: all 0.4s ease;
    }

    .notifications-enter-active, .notifications-leave-active {
        transition: all 0.6s ease;
    }

    .notifications-leave-active {
        transition: all 0.4s ease;
    }
    
    .notifications-enter-from {
        opacity: 0;
        transform: translateX(100px);
    }

    .notifications-leave-to  {
        opacity: 0;
        transform: translateX(100px);
    }

    .notifications{
        position: fixed;
        top: 7vh;
        right: 2vw;

        z-index:999;

        max-height: 90vh;
        overflow-y: auto;
        padding: 10px;

        scrollbar-width: none;
        pointer-events: none;
    }

    .notification-card {
        pointer-events: auto;
        padding: 20px;
        border-radius:45px;
        background-color: oklch(from var(--card-bg-color) calc(l + 0.2) c h);
        margin-bottom: 10px;

        width: fit-content;
        max-width: 300px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
</style>