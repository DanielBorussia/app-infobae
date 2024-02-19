import axios from 'axios'

export const axiosInstanceDummyApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DUMMY_URL
})

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
