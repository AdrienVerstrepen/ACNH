import { useNotificationStore } from '@/stores/notificationStore'
import axios from 'axios'

const nookipediaClient = axios.create({
  baseURL: 'https://api.nookipedia.com',
  // baseURL: 'http://127.0.0.1:5000',
  timeout: 5000,
  headers: { 'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_TOKEN },
})

export default nookipediaClient