import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { useUserContext } from "../contexts/UserContext";

type UserInfo = {
   id: string;
   username: string;
   email: string;
   is_active: string;
   last_login: string;
   date_joined: string;
};

export default function useUserActions() {
   const [userList, setUserList] = useState<UserInfo[]>([]);
   const { authToken } = useUserContext();
   const axios = useAxios();

   useEffect(() => {
      if (authToken.value) updateList();
   }, [authToken.value]);

   function updateList(): void {
      axios.get("/userlist/").then((res) => {
         const userList = res.data;
         setUserList(userList);
      });
   }
   async function changeStatus(id: string, status: boolean) {
      try {
         const res = await axios.put(`/user/blockswitch/${id}/`, {
            blocked: status,
         });
         console.log(res);
         updateList();
      } catch (err) {
         console.log(err);
      }
   }
   async function remove(id: string) {
      await axios.delete(`/user/delete/${id}/`);
      updateList();
   }

   return { changeStatus, remove, userList };
}
