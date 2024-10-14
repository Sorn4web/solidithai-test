import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    
    <Route path="/" element={<PrivateRoute element={<DashboardPage />} />} />
  </Routes>
);

export default AppRoutes;
