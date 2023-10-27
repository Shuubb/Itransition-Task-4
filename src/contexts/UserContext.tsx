import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext<null | User>(null);

export function useUserContext() {
   return useContext(UserContext) as User;
}

type Props = {
   children: string | JSX.Element | JSX.Element[];
};

type User = {
   authToken: ReturnType<typeof useLocalStorage>;
   userName: ReturnType<typeof useLocalStorage>;
};

export default function UserProvider({ children }: Props) {
   const authToken = useLocalStorage("authToken");
   const username = useLocalStorage("userName");

   const user: User = {
      authToken: authToken,
      userName: username,
   };

   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
