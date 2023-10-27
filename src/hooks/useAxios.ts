import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

export default function useAxios() {
   const { authToken } = useUserContext();

   const axiosInstance = axios.create({
      baseURL: "/api",
   });

   axiosInstance.interceptors.request.use(
      (config) => {
         if (authToken.value) {
            config.headers.Authorization = `Basic ${authToken.value}`;
         }
         return config;
      },
      (error) => {
         return Promise.reject(error);
      }
   );

   axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
         if (error.response && error.response.status === 401) {
            authToken.remove();
         }
         return Promise.reject(error);
      }
   );

   return axiosInstance;
}
