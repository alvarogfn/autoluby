import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import Login from "./views/Login";
import Home from "./views/Home";
import Employees from "./views/Employees";
import AllVehicles from "./views/AllVehicles";
import YourVehicles from "./views/YourVehicles";

const MyRoutes = () => {
  const { isAuth } = React.useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuth ? <Login /> : <Navigate to="/" />}
      />
      <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />

      <Route
        path="/funcionarios"
        element={isAuth ? <Employees /> : <Navigate to="/login" />}
      />
      <Route
        path="/todos-veiculos"
        element={isAuth ? <AllVehicles /> : <Navigate to="/login" />}
      />
      <Route
        path="/seus-veiculos"
        element={isAuth ? <YourVehicles /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MyRoutes;
