import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { UserContext, UserStorage } from "./UserContext";
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
