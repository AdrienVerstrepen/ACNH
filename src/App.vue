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

	header {
		position: sticky;
		top: 0;
		z-index: 1;
		background: var(--navbar-bg-image);
		background-size: auto 80%;
  		background-repeat: repeat-x;
	}
</style>