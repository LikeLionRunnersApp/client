import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://49.50.166.65:8080',
})

instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.get['Content-Type'] = 'application/json'

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = {
        Authorization: `Bearer ${process.env.REACT_APP_API}`,
      }
    } else {
      config.headers = {
        Authorization: '',
      }
    }
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
  },
)

export default instance
