import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

YupPassword(Yup); //Extender Yup

export const FormularioLogin = () => {
  const formik = useFormik({
    initialValues: {
      correo: "",
      contraseña: "",
    },
    validationSchema: Yup.object({
      correo: Yup.string().email("Correo inválido").required("Requerido"),
      contraseña: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack>
        <FormControl isInvalid={formik.errors.correo && formik.touched.correo}>
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
          isInvalid={formik.errors.contraseña && formik.touched.contraseña}
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
      </VStack>
    </form>
  );
};
