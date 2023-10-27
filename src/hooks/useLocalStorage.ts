import { useEffect, useState } from "react";

export type User = {
   username: string;
   email: string;
   password: string;
};

export function useLocalStorage(name: string) {
   const [value, setValue] = useState(localStorage.getItem(name));

   function set(authToken: string) {
      setValue(authToken);
      localStorage.setItem(name, authToken);
   }
   function remove() {
      setValue(null);
      localStorage.removeItem(name);
   }

   return {
      value,
      set,
      remove,
   };
}
