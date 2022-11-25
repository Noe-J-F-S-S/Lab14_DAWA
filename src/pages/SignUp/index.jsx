import React from 'react';
import TextField from '@mui/material/TextField';
import { post } from "../../services"
import Swal from "sweetalert2"
import { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Grid,
  } from "@mui/material";

const SignUp = () => {

const [values, setValues] = useState({
  name: "",
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
  const response = await post("users/signup", values);

  if(response.ok){
    Swal.fire({
      text: "Ususario creado correctamente",
      icon: "success",
    })
  } else {
    Swal.fire({
      text: "Usuario ya existe",
      icon: "error",
    });
  }
}
  return (
    <Box>
        <form  noValidate autoComplete="off">
        <TextField 
          name="nombre" 
          value={values.name}
          onChange={handleInputChange}
           
          label="Name" />
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
            <Button  size="large" variant="contained" onClick={handleSubmit}>
                Registrarse
            </Button>
        </Box>
        </form>
    </Box>
    
  );
}

export default SignUp;
