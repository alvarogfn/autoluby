import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const LoginForm = () => {
  return (
    <form>
      <Input
        label={"Endereço de email"}
        name={"password"}
        type={"email"}
        placeholder={"@mail.com"}
      />
      <Input
        label={"Senha"}
        name={"password"}
        type={"password"}
        placeholder={"Senha"}
      />
      <div>
        <input type="checkbox" /> Lembrar minha Senha
      </div>
      <Link to="/home">Esqueceu a senha?</Link>
      <button>Entrar</button>
      <p>
        Ainda não tem uma conta? <Link to="/create-account">Criar Conta</Link>
      </p>
    </form>
  );
};

export default LoginForm;
