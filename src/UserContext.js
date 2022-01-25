import React from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [isAuth, setAuth] = React.useState();
  const [userData, setUserData] = React.useState(null);
  const [saveToken, setSaveToken] = React.useState(false);
  const [token, setToken] = React.useState();
  const navigate = useNavigate();

  const login = React.useCallback(async (email, password) => {
    const response = await fetch("https://autoluby.dev.luby.com.br/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status !== 200) return false;
    const jsonBody = await response.json();
    setToken(jsonBody.token);
    setUserData(
      Object.assign(
        {},
        jsonBody.user,
        { totalEmployees: jsonBody.totalEmployees },
        { totalVehicles: jsonBody.totalVehicles },
        { totalVehiclesLoggedUser: jsonBody.totalVehiclesLoggedUser }
      )
    );
    setAuth(true);
    return true;
  }, []);

  // React.useEffect(() => {
  //   async function autoLogin() {
  //     const worked = await login();
  //   }
  //   autoLogin();
  // }, [login]);

  function handleSaveToken() {
    setSaveToken((token) => !token);
  }

  async function logout() {
    setAuth(false);
    setToken(null);
    setUserData(null);
    navigate("/login");
  }

  const state = {
    isAuth,
    setAuth,
    handleSaveToken,
    saveToken,
    login,
    logout,
    token,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
