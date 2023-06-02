import { Avatar, Box, Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import backgroundImage from '../assets/images/fundo_academia.png';
import logoImage from '../assets/images/logo_happy.png';
import {Lock, Mail, Person } from '@mui/icons-material';

const Registro = () => {
  return (
    <Grid container bgcolor="#38383A" sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}>
      <Grid item xs={4}>
        <Box height="100vh" bgcolor="transparent">
          { }
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
         height="100vh"
          bgcolor="#F7F7F7"
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRadius='0 0 3% 3%'
        >
          <Box margin='0 0 10vh 0' display='flex' flexDirection='column' alignItems='center'>
            <Avatar
              alt="Logo"
              src= {logoImage}
              variant="rounded"
              sx={{
                width: '35vh',
                height:'30vh',
              }}
            />
            <Typography variant="h1" color='#38383A' fontSize='5vh' fontWeight='200'>Cadastrar</Typography>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              margin='normal'
              type='required'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin='normal'
              type='required'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
              }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              margin='normal'
              type='password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
              }}
            />
            <Button variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width:'100%' }}>Próximo</Button>
            <Typography variant="body1" color="textSecondary" fontWeight='500' mt={2}>
              Já possui uma conta?{' '}
              <Link href="login" underline="none">
                Faça Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box height="100vh" bgcolor="transparent">
          { }
        </Box>
      </Grid>
    </Grid>
  );
};

export default Registro;