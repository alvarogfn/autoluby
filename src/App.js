import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";
import Login from "./views/Login";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
