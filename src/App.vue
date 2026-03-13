<script setup>
import NotificationPanel from './components/NotificationPanel.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar></Navbar>
  <router-view/>
  <NotificationPanel></NotificationPanel>
</template>

<style scoped>
</style>
