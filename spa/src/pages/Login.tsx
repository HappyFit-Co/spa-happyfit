import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import backgroundImage from '../assets/images/fundo_academia.png';
import logoImage from '../assets/images/logo_happy.png';
import {Lock, Person } from '@mui/icons-material';

const Login = () => {
  return (
    <Grid container bgcolor="#38383A" sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}>
      <Grid item xs={5}>
        <Box
          height="100vh"
          bgcolor="#F7F7F7"
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRadius='0 0 3% 0'
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
            <Typography variant="h1" color='#38383A' fontSize='5vh' fontWeight='200'>Login</Typography>
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
            <FormControlLabel
              control={
                <Checkbox name="rememberMe" />
              }
              label="Lembre de mim"
            />
            <Button variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width:'100%' }}>Entrar</Button>
            <Typography variant="body1" color="textSecondary" fontWeight='500' mt={2}>
              Novo por aqui?{' '}
              <Link href="register" underline="none">
                Crie uma conta
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box height="100vh" bgcolor="transparent">
          {
            <Box display='flex' flexDirection='row' alignItems='flex-end' height='100%'>
              <Typography margin='0 0 20vh 5vh' variant="h1" color='#e6e6e6' fontSize='3vh' fontWeight='10'>Seja bem-vindo ao HappyFit, seu parceiro para uma vida saudável e cheia de energia! Aqui, você encontrará tudo o que precisa para cuidar do seu corpo e mente através de uma alimentação equilibrada, hidratação adequada e exercícios regulares.</Typography>
            </Box>
          }
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
