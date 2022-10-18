import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import { Admin } from "../routes/Admin/Admin";
import { Home } from "../routes/Home/Home";
import { Login } from "../routes/Login/Login";
import { Register } from "../routes/Register/Register";

export const Navigator = () => {
  const { status } = useContext(AuthContext);
  return (
    <Routes>
      {status !== "autenticado" ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Aquí no hay nada</h1>} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>Aquí no hay nada</h1>} />
        </>
      )}
    </Routes>
  );
};
