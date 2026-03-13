import { useNotificationStore } from '@/stores/notificationStore'
import axios from 'axios'

const nookipediaClient = axios.create({
  baseURL: 'https://api.nookipedia.com',
  timeout: 5000,
  headers: { 'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_TOKEN },
})

nookipediaClient.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const store = useNotificationStore()
		if (error.response) {
			store.addNotification("Oh oh... Le serveur à rencontrée une erreur", "error")
		} else if (error.request) {
			store.addNotification("Aïe aïe aïe, aucune réponse...", "error")
		} else { 
			store.addNotification("Quelque chose s'est mal passé...", "error")
		}
})

export default nookipediaClient