import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./context/AuthContext";

import { Navigator } from "./navigator/Navigator";

const AppState = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppState>
          <Navigator />
        </AppState>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
