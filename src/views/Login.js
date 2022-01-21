import React from "react";
import { UserContext } from "../UserContext";

const Login = () => {
  const { isAuth } = React.useContext(UserContext);

  return <div>{isAuth ? "Logado" : "Não logado"}</div>;
};

export default Login;
