import { Cake, CakeOutlined, Lock, Mail, MonitorWeightOutlined, Person, StraightenOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material';
import backgroundImage from '../assets/images/fundo_academia.png';
import logoImage from '../assets/images/logo_happy.png';

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1, margin: '4vh 0 0 0' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, margin: '4vh 0 0 1vh' }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


const Informacoes = () => {
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
         height="98vh"
          bgcolor="#F7F7F7"
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRadius='0 0 3% 3%'
          marginBottom='2vh'
        >
          <Box margin='0 0 10vh 0' display='flex' flexDirection='column'>
            <Avatar
              alt="Logo"
              src= {logoImage}
              variant="rounded"
              sx={{
                width: 'fit-content',
                height:'20vh',
                alignSelf: 'center'
              }}
            />
            <Typography variant="h1" color='#666666' fontSize='3vh' fontWeight='600' paddingTop="2vh">Informações</Typography>
            <TextField
              id="outlined-basic"
              label="Data de Aniversário"
              variant="outlined"
              margin='normal'
              type='required'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CakeOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
              }}
            />
            <TextField
              id="outlined-basic"
              label="Altura"
              variant="outlined"
              margin='normal'
              type='required'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StraightenOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
              }}
            />
            <TextField
              id="outlined-basic"
              label="Peso"
              variant="outlined"
              margin='normal'
              type='password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MonitorWeightOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
              }}
            />
            <Box display="flex" flexDirection="row" gap="1vh">
              <Button href="/register" variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width:'100%','&:hover': {color: 'white'} }}>Voltar</Button>
              <Button variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width:'100%', '&:hover': {color: 'white'} }}>Finalizar</Button>
            </Box>
            
            <Typography variant="body1" color="textSecondary" fontWeight='500' mt={2}>
              Já possui uma conta?{' '}
              <Link href="login" underline="none">
                Faça Login
              </Link>
            </Typography>
            <LinearProgressWithLabel variant='determinate' value={99}/>
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

export default Informacoes;