import axios from 'axios'
import { getAccessToken } from '../services/auth.service'

const axiosWithAuth = axios.create()

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})
