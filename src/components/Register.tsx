import { Form, Button } from "react-bootstrap";
import { User, useAuth } from "../hooks/useAuth";

type Props = {};

export default function Register({}: Props) {
   const { register } = useAuth;

   function registerUser(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault();

      const fullName = (event.target as HTMLFormElement).elements.namedItem(
         "formBasicFullName"
      ) as HTMLInputElement;
      const email = (event.target as HTMLFormElement).elements.namedItem(
         "formBasicEmail"
      ) as HTMLInputElement;
      const password = (event.target as HTMLFormElement).elements.namedItem(
         "formBasicPassword"
      ) as HTMLInputElement;

      let user: User = {
         name: fullName.value,
         email: email.value,
         password: password.value,
      };

      register(user);
      location.reload();
   }

   return (
      <Form onSubmit={registerUser}>
         <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Full Name" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Button variant="primary" type="submit">
            Register
         </Button>
      </Form>
   );
}
