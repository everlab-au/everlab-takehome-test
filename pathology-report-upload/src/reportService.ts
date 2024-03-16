import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000' // replace with your Node.js app's URL
})

export default api
