import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Nabunga/fake-api/main/'
})