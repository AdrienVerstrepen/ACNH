import { useNotificationStore } from '@/stores/notificationStore'
import nookipediaClient from '@/api/NookipediaApi'

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
  		const store = useNotificationStore()
		if (error.response) {
			store.addNotification("Oh oh... Le serveur à rencontrée une erreur", "error")
		} else if (error.request) {
			store.addNotification("Aïe aïe aïe, aucune réponse...", "error")
		} else { 
			store.addNotification("Quelque chose s'est mal passé...", "error")
		}
	}
}

export const getOneItem = async (endpoint, name) => {
	try {
		const response = await nookipediaClient.get(`/nh/${endpoint}/${name}`);
		return response.data
	} catch (error) {
		const store = useNotificationStore()
		if (error.response) {
			store.addNotification("Oh oh... Le serveur à rencontrée une erreur", "error")
		} else if (error.request) {
			store.addNotification("Aïe aïe aïe, aucune réponse...", "error")
		} else { 
			store.addNotification("Quelque chose s'est mal passé...", "error")
		}
	}
}