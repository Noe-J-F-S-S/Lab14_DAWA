import React from 'react';
import TextField from '@mui/material/TextField';
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

  return (
    <Box>
        <form  noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" />
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="outlined-basic" label="Passwiord" variant="outlined" />
        <Box my={2}>
            <Button  size="large" variant="contained">
                Registrarse
            </Button>
        </Box>
        </form>
    </Box>
    
  );
}

export default SignUp;
