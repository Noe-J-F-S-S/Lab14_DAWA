import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
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

  return (
    <Container>
        <form  noValidate autoComplete="off">
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Box my={2}>
            <Button  size="large" variant="contained">
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