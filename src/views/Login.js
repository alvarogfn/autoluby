import React from "react";
import { UserContext } from "../UserContext";
import Autoluby from "../components/Autoluby";

const Login = () => {
  const { isAuth } = React.useContext(UserContext);

  return (
    <div>
      <Autoluby />
      {isAuth ? "Logado" : "Não logado"}
    </div>
  );
};

export default Login;
