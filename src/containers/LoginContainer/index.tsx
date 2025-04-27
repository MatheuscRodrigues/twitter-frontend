import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./styles";

function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("accounts/login/", {
        username: email,
        password: password,
      });

      const { access } = response.data;
      localStorage.setItem("accessToken", access);
      navigate("/feed");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>

        <S.LinksArea>
          <p>
            New here? <Link to="/register">Register</Link>
          </p>
          <p>
            Forgot your password? <Link to="/forgot-password">Reset Password</Link>
          </p>
        </S.LinksArea>
      </S.Form>
    </S.Container>
  );
}

export default LoginContainer;
