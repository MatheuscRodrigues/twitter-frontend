import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./styles";

function RegisterContainer() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post("accounts/register/", {
        email,
        username,
        password,
      });

      alert("Account created successfully. Please login.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please check your data.");
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleRegister}>
        <h1>Register</h1>

        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Register</Button>

        <S.LinksArea>
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </S.LinksArea>
      </S.Form>
    </S.Container>
  );
}

export default RegisterContainer;
