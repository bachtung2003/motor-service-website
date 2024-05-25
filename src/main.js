import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'

const app = createApp(App)

app.use(PrimeVue).use(router)
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    console.log('Access Token:', accessToken)

    if (accessToken) {
      config.headers['authorization'] = 'Bearer ' + data.accessToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

app.mount('#app')
