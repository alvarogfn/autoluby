import React from "react";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [isAuth, setAuth] = React.useState(false);

  const state = {
    isAuth,
    setAuth,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
