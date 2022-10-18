import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const { user, cerrarSesion } = useContext(AuthContext);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Button colorScheme="purple" onClick={cerrarSesion}>
          Cerrar sesión
        </Button>
        {user.rol === "ADMIN_ROLE" && (
          <Button colorScheme="purple" ml={15}>
            Panel de administrador
          </Button>
        )}
      </Box>
    </Flex>
  );
};
