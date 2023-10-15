import { Form, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth"; // Import your authentication hook as needed

type Props = {};

export default function Login({}: Props) {
   const { login } = useAuth; // Assuming you have a login function from your authentication hook

   function loginUser(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault();

      const email = (event.target as HTMLFormElement).elements.namedItem(
         "formBasicEmail"
      ) as HTMLInputElement;
      const password = (event.target as HTMLFormElement).elements.namedItem(
         "formBasicPassword"
      ) as HTMLInputElement;

      login(email.value, password.value); // Assuming you have a login function that takes user credentials
      location.reload();
   }

   return (
      <Form onSubmit={loginUser}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
               type="email"
               placeholder="Enter email"
               autoComplete="username"
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
               type="password"
               placeholder="Password"
               autoComplete="current-password"
            />
         </Form.Group>
         <Button variant="primary" type="submit">
            Login
         </Button>
      </Form>
   );
}
