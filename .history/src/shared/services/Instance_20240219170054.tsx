import axios from 'axios'

export const axiosInstanceDummyApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DUMMY_URL
})

export const axiosInstanceGoogleSignInApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_GOOGLE_URL
})

axiosInstanceGoogleSignInApi.interceptors.request.use(
  (config) => {
    const currentUser = localStorage.getItem('access_token') ?? ''
    if (currentUser) {
      config.headers.Authorization = `Bearer ${currentUser}`
    }
    return config
  }, async (error) => await Promise.reject(error)
)

axiosInstanceGoogleSignInApi.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    return await new Promise((_resolve, reject) => {
      reject(err.response.data)
    })
  }
)

axiosInstanceDummyApi.interceptors.request.use(
  (config) => {
    config.headers['app-id'] = import.meta.env.VITE_USER_ID

    return config
  }, async (error) => await Promise.reject(error)
)

axiosInstanceDummyApi.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    return await new Promise((_resolve, reject) => {
      reject(err.response.data)
    })
  }
)
