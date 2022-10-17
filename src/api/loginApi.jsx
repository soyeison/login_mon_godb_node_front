import axios from "axios";

const baseURL = "http://localhost:8080/api";

const loginApi = axios.create({ baseURL });

loginApi.interceptors.request.use((config) => {
  //Va a mandar el token en las peticiones
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-token"] = token;
  }
  return config;
});

export default loginApi;
