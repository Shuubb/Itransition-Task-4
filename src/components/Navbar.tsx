import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../hooks/useAuth";

type Props = {
   usersName: string;
};

export default function MyNavbar({ usersName }: Props) {
   const { logout } = useAuth;

   return (
      <Navbar expand="lg" className="bg-dark text-light shadow">
         <Container className="justify-content-end">
            <p className="m-0">
               Hello, {usersName}!{" "}
               <a href="#" onClick={logout}>
                  Log Out
               </a>
            </p>
         </Container>
      </Navbar>
   );
}
