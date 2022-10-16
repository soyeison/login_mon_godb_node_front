import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Admin } from "./routes/Admin/Admin";
import { Home } from "./routes/Home/Home";
import { Login } from "./routes/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>Aquí no hay nada</h1>} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
