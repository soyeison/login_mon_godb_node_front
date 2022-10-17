import { createContext, useEffect, useReducer } from "react";

import loginApi from "../api/loginApi";
import { AuthReducer } from "./AuthReducer";

//Estado inicial
const AuthInitialState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //Reducer
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  useEffect(() => {
    //Leer el localStorage
    verificarToken();
  }, []);

  const verificarToken = async () => {
    const token = await localStorage.getItem("token");
    //No hay token, no se puede autenticar
    if (!token) return dispatch({ type: "no-autenticado" });

    const resp = await loginApi.get("/auth", {
      headers: {
        "x-token": token,
      },
    });
    if (resp.status !== 200) {
      return dispatch({ type: "no-autenticado" });
    }

    await localStorage.setItem("token", resp.data.token);
    dispatch({
      type: "iniciarSesion",
      payload: {
        token: resp.data.token,
        user: resp.data.usuario,
      },
    });
  };

  const iniciarSesion = async ({ correo, contraseña }) => {
    try {
      const { data } = await loginApi.post("/auth/login", {
        correo,
        contraseña,
      });
      dispatch({
        type: "iniciarSesion",
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });
      localStorage.setItem("token", data.token);
    } catch (error) {
      //TODO: Organizar
      console.log(error);
    }
  };

  const cerrarSesion = () => {
    //TODO: log
    localStorage.removeItem("token");
    dispatch({ type: "cerrarSesion" });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
