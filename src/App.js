import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserStorage } from "./UserContext";
import "./styles.css";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <MyRoutes />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
