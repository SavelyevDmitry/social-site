import axios from "axios"

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    "API-KEY": "00b192b0-5645-499a-930c-6e7d85f6b78e"
  },
})