import { Lock, Mail } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/fundo_academia.png';
import logoImage from '../assets/images/logo_happy.png';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const [error, setError] = useState('');

  const { register } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function hadleLogin() {
    if (email === '' || pwd === '') {
      setError('Preencha os campos email / senha')
      return
    }

    try {
      const response = await register({  "name": "Teste",
      "email": "tamili@gmail.com",
      "pwd": "12345678",
      "weight": 70.5,
      "height": 1.75,
      "birthday": "2022-12-12",
      "sex": "Masculino",
      "activity_level": "active" }) as any
      if (response) {
        navigate('/dashboard')
      }
    } catch (err: any) {
      setError(err.message)
    }
  }


  return (
    <Grid container bgcolor="#38383A" sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}>
      <Grid item xs={5}>
        <Box
          height="98vh"
          bgcolor="#F7F7F7"
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRadius='0 0 3% 0'
          marginBottom='2vh'
        >
          <Box margin='0 0 10vh 0' display='flex' flexDirection='column' >
            <Avatar
              alt="Logo"
              src={logoImage}
              variant="rounded"
              sx={{
                width: 'fit-content',
                height: '20vh',
                alignSelf: "center"
              }}
            />
            <Typography variant="h1" color='#666666' fontSize='4vh' fontWeight='600' paddingTop="2vh" alignSelf="left">Login</Typography>
            <TextField
              error={!!error}
              onChange={handleEmailChange}
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
              error={!!error}
              onChange={handlePasswordChange}
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
            <Typography color='red'>{error}</Typography>
            <Button onClick={hadleLogin} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white' } }}>Entrar</Button>
            <Typography variant="body1" color="textSecondary" fontWeight='500' mt={2} alignSelf="center">
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
