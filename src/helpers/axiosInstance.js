import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import env from '../config/env'
import { LOGOUT } from '../constants/actionTypes'
import { navigate } from '../navigations/SideMenu/RootNavigator'

let headers = {}

const axiosInstance = axios.create({
  baseURL: env.BACKEND_URL,
  headers,
})

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    if (!error.message) {
      Promise.reject(error)
    }
    if (error.response.status === 403) {
      navigate(LOGOUT, { tokenExpired: true })
    } else {
      Promise.reject(error)
    }
  }
)

export default axiosInstance
