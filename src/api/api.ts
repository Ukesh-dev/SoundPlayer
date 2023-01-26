import axios, { AxiosInstance } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5050',
})

const axiosapi = (api: AxiosInstance) => ({
  get: <T>(url: string, config = {}) => api.get<T>(url, config),
  post: <T>(url: string, data: string) => api.post<T>(url, data),
})

export default axiosapi(axiosInstance)
