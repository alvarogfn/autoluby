import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import Input from "./Input";

const LoginForm = () => {
  const email = useInput("email");
  const password = useInput("password");

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
      <div>
        <input type="checkbox" /> Lembrar minha Senha
      </div>
      <Link to="/home">Esqueceu a senha?</Link>
      <button type="submit">Entrar</button>
      <p>
        Ainda não tem uma conta? <Link to="/create-account">Criar Conta</Link>
      </p>
    </form>
  );
};

export default LoginForm;
