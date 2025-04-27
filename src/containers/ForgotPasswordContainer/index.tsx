import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./styles";

function ForgotPasswordContainer() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post("accounts/password-reset/", {
        email,
        new_password: newPassword,
      });

      alert("Password reset successfully. Please login.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Password reset failed. Please check your data.");
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleResetPassword}>
        <h1>Reset Password</h1>

        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <Button type="submit">Reset Password</Button>

        <S.LinksArea>
          <p>
            Remembered your password? <Link to="/">Login</Link>
          </p>
        </S.LinksArea>
      </S.Form>
    </S.Container>
  );
}

export default ForgotPasswordContainer;
