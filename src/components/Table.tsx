import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

type UserInfo = {
   id: string;
   fullName: string;
   email: string;
   status: string;
   lastLogin: Date;
   registerTime: Date;
};

type checkedUser = {
   [key: string]: boolean;
};

type Props = {
   users: UserInfo[];
};

export default function MyTable({ users }: Props) {
   const [selectedUsers, setSelectedUsers] = useState<checkedUser>(() => {
      let usersChecked: checkedUser = {};
      users.forEach((user) => (usersChecked[user.id] = false));
      return usersChecked;
   });

   return (
      <form className="mx-5 d-flex flex-column justify-content-center h-75">
         <div className="m-2 mt-5">
            <Button>
               <AiFillLock /> Block
            </Button>{" "}
            <Button>
               <AiFillUnlock /> Unblock
            </Button>{" "}
            <Button variant="danger">
               <BsFillTrash3Fill /> Delete
            </Button>{" "}
         </div>

         <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="shadow"
         >
            <thead>
               <tr>
                  <th>
                     <input
                        type="checkbox"
                        onChange={(event) =>
                           setSelectedUsers(
                              Object.fromEntries(
                                 Object.keys(selectedUsers).map((key) => [
                                    key,
                                    event.currentTarget.checked,
                                 ])
                              )
                           )
                        }
                     />
                  </th>
                  <th>User ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Last Login</th>
                  <th>Register Time</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr>
                     <td>
                        <input
                           type="checkbox"
                           checked={selectedUsers[user.id]}
                           onChange={() => {
                              setSelectedUsers({
                                 ...selectedUsers,
                                 [user.id]: !selectedUsers[user.id],
                              });
                           }}
                        />
                     </td>
                     <td>{user.id}</td>
                     <td>{user.fullName}</td>
                     <td>{user.email}</td>
                     <td>{user.lastLogin.toUTCString()}</td>
                     <td>{user.registerTime.toUTCString()}</td>
                     <td>{user.status}</td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </form>
   );
}
