import MyNavbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import MyTable from "./components/Table";
import { useAuth } from "./hooks/useAuth";

export default function IndexPage() {
   const { isAuth } = useAuth;

   return (
      <div className="bg-light w-100 h-100 position-absolute">
         <MyNavbar usersName="Davit Shubitidze" />

         <MyTable
            users={(() => {
               if (isAuth) return dummyUsers;
               else return [];
            })()}
         />

         {!isAuth && <AuthModal />}
      </div>
   );
}

const dummyUsers = [
   {
      id: "1",
      fullName: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
      lastLogin: new Date("2023-10-10T08:00:00Z"),
      registerTime: new Date("2023-01-15T12:30:00Z"),
   },
   {
      id: "2",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Blocked",
      lastLogin: new Date("2023-09-20T15:45:00Z"),
      registerTime: new Date("2022-03-05T09:15:00Z"),
   },
   {
      id: "3",
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
      lastLogin: new Date("2023-10-12T14:20:00Z"),
      registerTime: new Date("2023-05-18T17:10:00Z"),
   },
   {
      id: "4",
      fullName: "Bob Williams",
      email: "bob.williams@example.com",
      status: "Blocked",
      lastLogin: new Date("2023-08-30T10:55:00Z"),
      registerTime: new Date("2021-11-22T20:45:00Z"),
   },
   {
      id: "5",
      fullName: "Eva Davis",
      email: "eva.davis@example.com",
      status: "Active",
      lastLogin: new Date("2023-10-14T11:30:00Z"),
      registerTime: new Date("2023-06-29T16:05:00Z"),
   },
];
