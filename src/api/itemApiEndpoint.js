import { useNotificationStore } from '@/stores/notificationStore'
import nookipediaClient from '@/api/NookipediaApi'
import i18n from '@/i18n'

const handleError = (error, endpoint) => {
	const store = useNotificationStore()
	const t = i18n.global.t
	endpoint = endpoint.trim().split('/')[0].toLowerCase()
	if (error.response) {
		store.addNotification(`Oh oh... Le serveur à rencontrée une erreur.\n Les données concernant les ${ t('nav.' + endpoint).toLowerCase() } n'ont pas été récupérées`, "error")
	} else if (error.request) {
		store.addNotification(`Aïe aïe aïe, aucune réponse...\n Les données concernant les ${ t('nav.' + endpoint).toLowerCase()} n'ont pas été récupérées`, "error")
	} else { 
		store.addNotification(`Quelque chose s'est mal passé...\n Les données concernant les ${ t('nav.' + endpoint).toLowerCase()} n'ont pas été récupérées`, "error")
	}
}

export const getAllItems = async (endpoint) => {
	try {
		if (endpoint !== "villagers") {
			const response = await nookipediaClient.get(`/nh/${endpoint}`);
			return response.data
		} else {
			const response = await nookipediaClient.get(`/${endpoint}`);
			return response.data
		}
	} catch (error) {
  		handleError(error, endpoint)
	}
}

export const getOneItem = async (endpoint, name) => {
	try {
		const response = await nookipediaClient.get(`/nh/${endpoint}/${name}`);
		return response.data
	} catch (error) {
		handleError(error, endpoint)
	}
}