import axios from "axios"
import { useAuthStore } from "../store/auth";


const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})



axiosInstance.interceptors.request.use(config => {

    const token = useAuthStore.getState().token;

  config.headers.Authorization = `Bearer ${token}`

  return config;

},
async(error) => {
    return await Promise.reject(error)
}

)
export default axiosInstance