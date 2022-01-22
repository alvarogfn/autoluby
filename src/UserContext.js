import React from "react";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [isAuth, setAuth] = React.useState(false);
  const [saveToken, setSaveToken] = React.useState(false);

  function handleSaveToken() {
    setSaveToken((token) => !token);
  }

  const state = {
    isAuth,
    setAuth,
    handleSaveToken,
    saveToken,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
