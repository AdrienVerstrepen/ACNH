<script setup>
import NotificationPanel from './components/NotificationPanel.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
	<header>
		<Navbar></Navbar>
	</header>
	<main>
		<router-view :key="$route.fullPath"/>
		<NotificationPanel></NotificationPanel>
  	</main>
	<!-- footer -->
</template>

<style scoped>
	main {
		margin: 1em 15vw 0 15vw;
	}
</style>