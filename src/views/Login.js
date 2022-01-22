import React from "react";
import { UserContext } from "../UserContext";
import Autoluby from "../components/Autoluby";
import styles from "./styles/Login.module.css";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth } = React.useContext(UserContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Autoluby />
      </header>
      <div className={styles.loginForm}>
        <div className={styles.welcome}>
          <h2 className={styles.welcomeMessage}>Bem-vindo à AutoLuby</h2>
          <p className={styles.paragraphMessage}>Faça o login para acessar sua conta.</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
