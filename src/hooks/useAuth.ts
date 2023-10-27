import useAxios from "./useAxios";
import { useUserContext } from "../contexts/UserContext";

export type User = {
   username: string;
   email: string;
   password: string;
};

export function useAuth() {
   const { authToken, userName } = useUserContext();
   const axios = useAxios();

   function login(username: string, password: string) {
      return axios
         .post("/login/", {
            username,
            password,
         })
         .then((res) => {
            authToken.set(res.data.authToken);
            userName.set(username);
         });
   }

   function logout() {
      authToken.remove();
      userName.remove();
   }

   function register(username: string, email: string, password: string) {
      return axios
         .post("/register/", {
            username: username,
            email: email,
            password: password,
         })
         .then(() => login(username, password));
   }

   return {
      login,
      logout,
      register,
      authToken,
   };
}
