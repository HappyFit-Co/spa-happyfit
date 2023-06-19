import { CakeOutlined, Lock, Mail, MonitorWeightOutlined, Padding, Person, StraightenOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Link, Radio, RadioGroup, Slider, TextField, Typography } from '@mui/material';
import backgroundImage from '../assets/images/fundo_academia.png';
import logoImage from '../assets/images/logo_happy.png';


import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

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


const Registro = () => {
  const TITULO_PAGINA = "HappyFit - Registre-se agora"

  useEffect(() => {
    document.title = TITULO_PAGINA
  }, []);

  const [error, setError] = useState('')
  const [etapa, setEtapa] = useState(1)

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const [sliderValue, setSliderValue] = useState(2); // 0: Baixo, 1: Médio, 2: Alto
  const sliderLabels = ['inativo', 'baixo', 'moderado', 'ativo', 'Alto'];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  function handleNextStep() {
    if (nome === '' || email === '' || pwd === '') {
      setError("Preencha todos os campos")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Email inválido")
      return
    }

    if (pwd.length < 8 || !/[a-zA-Z]/.test(pwd)) {
      setError("Senha inválida. A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra.")
      return
    }

    setEtapa(2)
    setError('')
  }

  function handleBackStep() {
    setError('')
    setEtapa(1)
  }

  function handleRegisterUser() {
    // ADICIONAR VERIFICAÇÃO DOS OUTROS 2 CAMPOS (SEXO e NIVEL DE ATIVIDADE)
    if (birthday === '' || weight === '' || height === '') {
      setError("Preencha todos os campos")
      return
    }
    console.log({ nome, email, pwd, weight, height, birthday, sex, activityLevel });
  }
  return (
    etapa === 1 ? (
      // ETAPA 1
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
            <Box margin='0 0 10vh 0' display='flex' flexDirection='column'>
              <Avatar
                alt="Logo"
                src={logoImage}
                variant="rounded"
                sx={{
                  width: 'fit-content',
                  height: '20vh',
                  alignSelf: 'center'
                }}
              />
              <Typography variant="h1" color='#666666' fontSize='4vh' fontWeight='600' paddingTop="2vh">Cadastrar</Typography>
              <FormControl sx={{ paddingTop:"3vh"}}>
                <FormLabel>Sexo</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                  <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                </RadioGroup>
              </FormControl>
              <TextField
                id="nome-field"
                label="Nome"
                variant="outlined"
                margin='normal'
                type='required'
                value={nome}
                onChange={handleNomeChange}
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
                id="email-field"
                label="Email"
                variant="outlined"
                margin='normal'
                type='required'
                value={email}
                onChange={handleEmailChange}
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
                id="senha-field"
                label="Senha"
                variant="outlined"
                margin='normal'
                type='password'
                value={pwd}
                onChange={handlePwdChange}
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
              <Typography width="18vw" textAlign="center" color='red'>{error}</Typography>
              <Button onClick={handleNextStep} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white' } }}>Próximo</Button>
              <Typography variant="body1" color="textSecondary" fontWeight='500' mt={2}>
                Já possui uma conta?{' '}
                <Link href="login" underline="none">
                  Faça Login
                </Link>
              </Typography>
              <LinearProgressWithLabel variant='determinate' value={50} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box height="100vh" bgcolor="transparent">
            { }
          </Box>
        </Grid>
      </Grid>
    ) : (
      // ETAPA 2
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
                src={logoImage}
                variant="rounded"
                sx={{
                  width: 'fit-content',
                  height: '20vh',
                  alignSelf: 'center'
                }}
              />
              <Typography variant="h1" color='#666666' fontSize='3vh' fontWeight='600' paddingTop="4vh">Informações</Typography>
              <Typography paddingTop="3vh" variant="body1" color="textSecondary">
                Nível de atividade:
              </Typography>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                min={0}
                max={4}
                step={1}
                sx={{
                  alignSelf: 'center'
                }}
                marks={sliderLabels.map((label, index) => ({
                  value: index,
                  label: label,
                }))}
              />
              <TextField
                id="birthday-field"
                key="birthday"
                label="Data de Nascimento"
                variant="outlined"
                margin='normal'
                type='required'
                value={birthday}
                onChange={handleBirthdayChange}
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
                id="altura-field"
                label="Altura"
                variant="outlined"
                margin='normal'
                type='required'
                value={height}
                onChange={handleHeightChange}
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
                id="peso-field"
                label="Peso"
                variant="outlined"
                margin='normal'
                type='password'
                value={weight}
                onChange={handleWeightChange}
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
              <Typography width="18vw" textAlign="center" color='red'>{error}</Typography>
              <Box paddingTop="3vh" display="flex" flexDirection="row" gap="1vh">
                <Button onClick={handleBackStep} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white' } }}>Voltar</Button>
                <Button onClick={handleRegisterUser} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white' } }}>Finalizar</Button>
              </Box>

              <Typography variant="body1" color="textSecondary" fontWeight='500' mt={2}>
                Já possui uma conta?{' '}
                <Link href="login" underline="none">
                  Faça Login
                </Link>
              </Typography>
              <LinearProgressWithLabel variant='determinate' value={100} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box height="100vh" bgcolor="transparent">
            { }
          </Box>
        </Grid>
      </Grid>
    )
  );

};

export default Registro;