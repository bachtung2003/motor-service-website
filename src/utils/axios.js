import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5734'
})

export default instance
