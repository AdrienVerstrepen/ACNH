import { useNotificationStore } from '@/stores/notificationStore'
import axios from 'axios'

const nookipediaClient = axios.create({
  baseURL: 'https://api.nookipedia.com',
  timeout: 5000,
  headers: { 'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_TOKEN },
})

// nookipediaClient.interceptors.response.use(function (response) {
//   return response
// }, function (error) {

// })

export default nookipediaClient