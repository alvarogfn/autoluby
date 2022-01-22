import React from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [isAuth, setAuth] = React.useState(false);
  const [saveToken, setSaveToken] = React.useState(false);

  function handleSaveToken() {
    setSaveToken((token) => !token);
  }

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate, isAuth]);

  const state = {
    isAuth,
    setAuth,
    handleSaveToken,
    saveToken,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
