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
    console.log(`token`, token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return new Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => new Promise.resolve(response),
  error => {
    if (!error.message) {
      new Promise.reject(error)
    }
    if (error.response.status === 403) {
      navigate(LOGOUT, { tokenExpired: true })
    } else {
      new Promise.reject(error)
    }
  }
)

export default axiosInstance
