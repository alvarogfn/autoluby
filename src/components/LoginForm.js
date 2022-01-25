import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import useInput from "../hooks/useInput";
import Input from "./Input";
import Checkbox from "./Checkbox";
import styles from "./styles/LoginForm.module.css";

const LoginForm = () => {
  const email = useInput("email");
  const password = useInput("password");
  const navigate = useNavigate();

  const { saveToken, handleSaveToken, login } = React.useContext(UserContext);

  async function onSubmit(e) {
    e.preventDefault();

    const isValid = (await email.validate()) && (await password.validate());
    if (isValid) {
      const result = await login(email.value, password.value);
      if (!result) {
        email.setError("Email inválido");
        password.setError("Senha inválida");
      } else {
        navigate("/");
      }
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        label={"Endereço de email"}
        name={"password"}
        placeholder={"@mail.com"}
        required
        {...email}
      />
      <Input
        label={"Senha"}
        name={"password"}
        type={"password"}
        placeholder={"Senha"}
        required
        {...password}
      />
      <div className={styles.rememberPassword}>
        <Checkbox
          onChange={handleSaveToken}
          value={saveToken}
          label={"Lembrar minha senha"}
          id={"rememberPassword"}
        />
        <Link className={styles.link} to="/lost-password">
          Esqueceu a senha?
        </Link>
      </div>
      <button className={styles.button} type="submit">
        Entrar
      </button>
      <p className={styles.createAccount}>
        Ainda não tem uma conta?{" "}
        <Link className={styles.link} to="/create-account">
          Criar Conta
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
