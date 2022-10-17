import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

YupPassword(Yup); //Extender Yup

export const Login = () => {
  //Context
  const { iniciarSesion } = useContext(AuthContext);

  //Fomik
  const formik = useFormik({
    initialValues: {
      correo: "",
      contraseña: "",
    },
    validationSchema: Yup.object({
      correo: Yup.string().email("Correo inválido").required("Requerido"),
      contraseña: Yup.string().required("Requerido"),
    }),
    onSubmit: ({ correo, contraseña }) => {
      iniciarSesion({ correo, contraseña });
    },
  });
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Ingresa con tu cuenta</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            ¡Bienvenido de vuelta!
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack>
              <FormControl
                isInvalid={formik.errors.correo && formik.touched.correo}
              >
                <FormLabel htmlFor="correo">Correo</FormLabel>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.correo}
                />
                <FormErrorMessage>{formik.errors.correo}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.errors.contraseña && formik.touched.contraseña
                }
              >
                <FormLabel htmlFor="contraseña">Contraseña</FormLabel>
                <Input
                  id="contraseña"
                  name="contraseña"
                  type="password"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contraseña}
                />
                <FormErrorMessage>{formik.errors.contraseña}</FormErrorMessage>
              </FormControl>
              <Box h={"18px"} />
              <Button type="submit" colorScheme="purple" width="full">
                Iniciar sesión
              </Button>
              <HStack pt={6}>
                <Text align={"center"}>No tienes una cuenta?</Text>
                <Text color={"purple"}>
                  <Link to={"/register"}>Registrate</Link>
                </Text>
              </HStack>
            </VStack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
