import axios from 'axios'

const ACNHMusicClient = axios.create({
  baseURL: 'http://acnh-mini-api.herokuapp.com/api/music',
  timeout: 5000,
})

export default ACNHMusicClient