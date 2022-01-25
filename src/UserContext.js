import React from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [isAuth, setAuth] = React.useState(true);
  const [userData, setUserData] = React.useState(() => {
    return JSON.parse(
      '{"name":"Administrador","email":"admin@luby.com.br","cpf":"06365448180","salary":100000,"bio":"Vendedor oficial de veículos automotores","vehicles":[{"brand":"Volkswagen","model":"Gol","yer":"2004","km":150000,"color":"Vermelho","status":"Vendido","chassi":"KNDPBCA25B7076883","value":13000},{"brand":"Fiat","model":"Marea","yer":"1994","km":2400000,"color":"Prata","status":"Reservado","chassi":"3B7KF23Z91G223647","value":8000},{"brand":"KIA","model":"Sorento","yer":"2014","km":50000,"color":"preto","status":"Vendido","chassi":"5XYKUDA21DG367493","value":20000}],"totalEmployees":9,"totalVehicles":8,"totalVehiclesLoggedUser":3}'
    );
  });
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
    userData,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
