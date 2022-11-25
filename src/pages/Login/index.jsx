import React from 'react';
import { useState } from "react";
import { post } from "../../services"
import TextField from '@mui/material/TextField';
import Swal from "sweetalert2"
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Grid,
    Paper,
    Container
  } from "@mui/material";

const Login = () => {
    const [values, setValues] = useState({
        password: "",
        email: ""
      })
      
      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
          ...values,
          [name]: value
        })
      }
      
      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        const response = await post("users/login", values);
      
        if(response.ok){
          Swal.fire({
            text: "Ususario logeado correctamente",
            icon: "success",
          })
        } else {
          Swal.fire({
            text: "Usuario o contraseña incorrecto",
            icon: "error",
          });
        }
      }

  return (
    <Container>
        <form  noValidate autoComplete="off">
        <TextField 
          name="email" 
          
          label="Email" 
          value={values.email}
          onChange={handleInputChange}
           />
        <TextField 
          name="password" 
          value={values.password}
          onChange={handleInputChange}
          id="outlined-basic" 
          label="Password" 
           />
        <Box my={2}>
            <Button  size="large" variant="contained"
            onClick={handleSubmit}>
                Ingresar
            </Button>
            <Button size="large" variant="contained">
                Registrarse
            </Button>
        </Box>
        </form>
    </Container>
    
  );
}

export default Login;