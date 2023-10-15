export type User = {
   name: string;
   email: string;
   password: string;
};

export const useAuth = {
   login: (email: string, password: string): boolean => {
      const userJSON = localStorage.getItem(email);
      if (userJSON) {
         const user = JSON.parse(userJSON);
         if (password === user.password) {
            localStorage.setItem("userToken", "someToken");
            return true;
         }
      }
      return false;
   },
   logout: () => {
      localStorage.removeItem("userToken");
      location.reload();
   },
   register: (user: User) => {
      if (user) localStorage.setItem(user.email, JSON.stringify(user));
   },
   isAuth: (() => {
      return localStorage.getItem("userToken") ? true : false;
   })(),
};
