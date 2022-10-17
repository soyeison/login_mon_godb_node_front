export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "agregarError":
      return {
        ...state,
        user: null,
        status: "no-autenticado",
        token: null,
        errorMessage: action.payload,
      };
    case "removerError":
      return {
        ...state,
        errorMessage: "",
      };
    case "iniciarSesion":
      return {
        ...state,
        errorMessage: "",
        status: "autenticado",
        token: action.payload.token,
        user: action.payload.user,
      };
    case "cerrarSesion":
      return {
        ...state,
        status: "no-autenticado",
        token: null,
        user: null,
      };
    case "noAutenticado":
      return {
        ...state,
        status: "no-autenticado",
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
