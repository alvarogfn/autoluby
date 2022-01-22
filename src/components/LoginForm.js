import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import useInput from "../hooks/useInput";
import Input from "./Input";
import Checkbox from "./Checkbox";
import styles from "./styles/LoginForm.module.css";

const LoginForm = () => {
  const email = useInput("email");
  const password = useInput("password");

  const { saveToken, handleSaveToken } = React.useContext(UserContext);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.error && !password.error) {
      console.log("oi");
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        label={"Endereço de email"}
        name={"password"}
        placeholder={"@mail.com"}
        {...email}
      />
      <Input
        label={"Senha"}
        name={"password"}
        type={"password"}
        placeholder={"Senha"}
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
        Ainda não tem uma conta? <Link className={styles.link} to="/create-account">Criar Conta</Link>
      </p>
    </form>
  );
};

export default LoginForm;
