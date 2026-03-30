<script setup>
import itemCard from './itemCard.vue'
import CardContainer from './CardContainer.vue'
import ListContainer from './ListContainer.vue'
import CardActions from './CardActions.vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
	items: Array,
	endpoint: String,
})

const { t } = useI18n()

</script>

<template>
	<h2>{{ t("nav." + endpoint.split("/")[0]) }}</h2>
	<ListContainer>
		<div v-for="item in items" :key="item.name" v-bind="item" :type="props.endpoint">
		<CardContainer>
			<itemCard
			:name="item.name"
			:image-url="item.image"
			:type="props.endpoint"
			:details="item.details"
			>
			</itemCard>
			<CardActions :name="item.name" :image="item.image" :endpoint="props.endpoint"></CardActions>
		</CardContainer>
		</div>
	</ListContainer>
</template>

<style scoped>
</style>
