import { AccountCircle, LocalDining, WaterDrop } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Divider, IconButton, InputAdornment, LinearProgress, Link, Menu, MenuItem, TextField, Toolbar, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import foodImage from '../assets/images/calories.png';
import gymImage from '../assets/images/gym.png';
import logoImage from '../assets/images/logo_happy.png';
import waterImage from '../assets/images/water.png';
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/apiClient";
import BarChartComponent from "../shared/layouts/Graficos";


const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [listaExercicios, setListaExercicios] = useState<any>([])

  const [aguaDiaria, setAguaDiaria] = useState()
  const [caloriasDiaria, setCaloriasDiaria] = useState()

  async function carregarInfoDiaria() {
    const response = await api.get('/records/') as any
    setAguaDiaria(response.data.daily_water)
    setCaloriasDiaria(response.data.daily_calories)
  }

  async function carregaExercicios() {
    const response = await api.get('/exercises/') as any
    setListaExercicios(response.data)
  }

  function getDiaDaSemana() {
    const diasDaSemana = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado"
    ];

    const dataAtual = new Date();
    const diaDaSemana = dataAtual.getDay();

    return diasDaSemana[diaDaSemana];
  }

  useEffect(() => {
    carregaExercicios()
    carregarInfoDiaria()
  }, [])

  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout()
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={"perfil"}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ colo: 'red' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} >Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} >My account</MenuItem>
      <MenuItem onClick={handleLogout} >Sair</MenuItem>
    </Menu>
  );

  const StyledLinearProgress = styled(LinearProgress)(
    ({ theme }) => `
          position: relative;

          ::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            z-index: -1;
          }

          .MuiLinearProgress-bar {
            background-color: #70A4E0;
          }
        `
  );

  const data = [
    { name: 'Domingo', value: 5 },
    { name: 'Segunda', value: 2 },
    { name: 'Terça', value: 1 },
    { name: 'Quarta', value: 0.56 },
    { name: 'Quinta', value: 5 },
    { name: 'Sexta', value: 3 },
    { name: 'Sábado', value: 3 },
  ];


  return (
    <>
      <Box>
        <AppBar position="static" sx={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 16.58%, rgba(0, 0, 0, 0.38) 61.67%, #F5F5FA 88.61%), url(https://cdn.discordapp.com/attachments/1091817942695555182/1118272368633192520/image.png)',
          height: '80vh',
          backgroundSize: 'cover',
          boxShadow: 'none'
        }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Avatar
              alt="Logo"
              src={logoImage}
              variant="rounded"
              sx={{
                marginTop: '5vh',
                width: 'fit-content',
                height: '8vh',
                alignSelf: "center"
              }} />
            <Box sx={{}}>

              <Button sx={{ fontSize: '18px', color: '#FDA17A' }}>
                <Link href="dashboard" underline="none">Início</Link>
              </Button>

              <Button color="inherit" sx={{ fontSize: '18px' }}>
                <Link href="hidratacao" underline="none">Hidratação</Link>
              </Button>

              <Button color="inherit" sx={{ fontSize: '18px' }}>
                <Link href="treinamento" underline="none">Treino</Link>
              </Button>
              
              <Button color="inherit" sx={{ fontSize: '18px' }}>
                <Link href="nutricao" underline="none">Dieta</Link>
              </Button>

            </Box>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              onClick={handleProfileMenuOpen}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </Toolbar>
          <Box display='flex' justifyContent='center' sx={{ marginTop: '30vh' }}>
            <Box width='145vh' height="30hv" padding='3vh' borderRadius='3vh'
              sx={{

                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "white"
              }}>
              <Typography fontWeight='18px' fontSize='18px' color='#484848' align="center">
                Para ter uma vida saudável, é importante manter uma alimentação equilibrada,
                comendo alimentos nutritivos e evitando excessos. Além disso, é essencial praticar
                exercícios regularmente, seja por meio de atividades físicas ou simplesmente se
                movimentando mais no dia a dia.
              </Typography>

            </Box>
          </Box>
          <Box display='flex' justifyContent='center' sx={{ margin: '5vh 0' }}>
            <Box width='45vh' padding='3vh' borderRadius='3vh'
              sx={{
                backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "white"
              }}>
              <Typography fontSize='18px' color='#484848'> Você Bebeu </Typography>
              <Typography fontWeight='800' fontSize='32px'
                sx={{
                  background: 'linear-gradient(to right, #70A4E0, #D9ADE9)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent'
                }}>
                {aguaDiaria + "ml"}
              </Typography>
              <Avatar
                alt="Logo"
                src={waterImage}
                variant="rounded"
                sx={{
                  marginTop: '0.5vh',
                  width: 'fit-content',
                  height: 'fit-content',
                  alignSelf: "center"
                }} />
              <StyledLinearProgress variant="determinate" value={50}
                sx={{
                  height: '3vh',
                  borderRadius: 5,
                  bgcolor: '#F7F5FA',
                  '& .MuiLinearProgress-barColorPrimary': {
                    backgroundColor: '#70A4E0',
                  }
                }} />
            </Box>

            <Box width='45vh' margin='0 5vh' padding='3vh' borderRadius='3vh'
              sx={{
                backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "white"
              }}>
              <Typography fontSize='18px' color='#484848'> Treinos de </Typography>
              <Typography fontWeight='800' fontSize='32px'
                sx={{
                  background: 'linear-gradient(to right, #58DE8E, #A1CDE7)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent'
                }}>
                {getDiaDaSemana()}
              </Typography>
              <Avatar
                alt="Logo"
                src={gymImage}
                variant="rounded"
                sx={{
                  marginTop: '0.5vh',
                  width: 'fit-content',
                  height: 'fit-content',
                  alignSelf: "center"
                }} />
              <StyledLinearProgress variant="determinate" value={50}
                sx={{
                  height: '3vh',
                  borderRadius: 5,
                  bgcolor: '#F7F5FA',
                  '& .MuiLinearProgress-barColorPrimary': {
                    backgroundColor: '#58DE8E',
                  }
                }} />
            </Box>
            <Box width='45vh' padding='3vh' borderRadius='3vh'
              sx={{
                backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "white"
              }}>
              <Typography fontSize='18px' color='#484848'> Você Consumiu </Typography>
              <Typography fontWeight='800' fontSize='32px'
                sx={{
                  background: 'linear-gradient(to right, #FDA17A, #FAE743)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent'
                }}>
                {caloriasDiaria + "kcal"}
              </Typography>
              <Avatar
                alt="Logo"
                src={foodImage}
                variant="rounded"
                sx={{
                  marginTop: '2vh',
                  width: 'fit-content',
                  height: 'fit-content',
                  alignSelf: "center"
                }} />
              <StyledLinearProgress variant="determinate" value={50}
                sx={{
                  height: '3vh',
                  borderRadius: 5,
                  bgcolor: '#FFFFFF',
                  '& .MuiLinearProgress-barColorPrimary': {
                    backgroundColor: '#FDA17A',
                  }
                }} />

            </Box>
          </Box>
        </AppBar>
        <Box display='flex' justifyContent='center' marginTop='40vh' >
          <Box width='145vh' alignSelf='center' padding='3vh' borderRadius='3vh'
            sx={{
              backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
              boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
              backgroundColor: "white"
            }}>
            <Typography fontWeight='800' fontSize='32px' marginBottom='1vh'
              sx={{
                color: "#484848"
              }}>
              Seus valores diários
            </Typography>
            <Box display='flex' columnGap='5vh'>
              <Box width='40vh' padding='1vh' borderRadius='1vh' sx={{
                backgroundImage: 'linear-gradient(to bottom right, #70A3DF, #C173DC)',
                backgroundColor: "#6DB7FC"
              }}>
                <Typography fontWeight='600' padding='1vh' color='white'> Água</Typography>
                <Box padding='2vh' borderRadius='1vh' sx={{ backgroundColor: "white" }}>
                  <Typography fontWeight='500'> Definir meta</Typography>
                  <Typography color='#224D74' paddingBottom='1vh'> Em Litros/dia</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label='Água'
                    margin='dense'
                    type='number'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ color: "#70A3DF" }}>
                          <WaterDrop />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: '100%',
                    }}
                  />
                </Box>
              </Box>

              <Box width='40vh' padding='1vh' borderRadius='1vh' sx={{
                backgroundImage: 'linear-gradient(to bottom right, #FDA17A, #FAE743)',
                backgroundColor: "#6DB7FC"
              }}>
                <Typography fontWeight='600' padding='1vh' color='white'> Comida</Typography>
                <Box padding='2vh' borderRadius='1vh' sx={{ backgroundColor: "white" }}>
                  <Typography fontWeight='500'> Definir meta</Typography>
                  <Typography color='#744922' paddingBottom='1vh'> Em Calorias/dia</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label='Comida'
                    margin='dense'
                    type='number'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ color: "#FDA17A" }}>
                          <LocalDining />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: '100%',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box display='flex' justifyContent='center' sx={{ margin: '5vh 0' }}>
          <Box width='145vh' padding='3vh' borderRadius='3vh'
            sx={{
              backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
              boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
              backgroundColor: "white"
            }}>
            <Typography fontWeight='800' fontSize='32px' marginBottom='1vh'
              sx={{
                color: "#484848"
              }}>
              Seu desempenho
            </Typography>

            <Box display='flex' justifyContent='center' borderRadius='3vh' padding='3vh'
              sx={{
                justifyContent: 'space-around',
                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "#184C50"
              }}>

              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography fontWeight='600' fontSize='25px' color='#F5f5fa' align="center">
                  Consumo de água
                </Typography>
                <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                  Gráfico de hidratação semanal em Litros.
                </Typography>
                <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                  Sua meta de hidratação diária é de X Litros de água.
                </Typography>

              </Box>

              <Box display='flex' justifyContent='right'>
                <BarChartComponent data={data} color="white" fillColor="#BFE1FF" limite={6} tick={7} />
              </Box>

            </Box>

            <Box display='flex' justifyContent='center' marginTop='5vh' borderRadius='3vh' padding='3vh'
              sx={{
                justifyContent: 'space-around',
                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "#501818"
              }}>

              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography fontWeight='600' fontSize='25px' color='#F5f5fa' align="center">
                  Consumo de Caloria
                </Typography>
                <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                  Gráfico de alimentação semanal em Calorias.
                </Typography>
                <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                  Sua meta de consumo diária é de X calorias.
                </Typography>

              </Box>

              <Box display='flex' justifyContent='right'>
                <BarChartComponent data={data} color="white" fillColor="#ffbfbf" limite={6} tick={7} />
              </Box>

            </Box>

            <Box display='flex' justifyContent='center' borderRadius='3vh' padding='3vh' marginTop='4vh'
              sx={{
                justifyContent: 'space-around',
                boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                backgroundColor: "#2C2C2C"
              }}>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography fontWeight='600' fontSize='25px' color='#F5f5fa' align="center">
                  Frequência de treino
                </Typography>
                <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                  Gráfico de hidratação semanal em Litros.
                </Typography>
                <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                  Sua meta de hidratação diária é de X Litros de água.
                </Typography>

              </Box>

              <Box display='flex' justifyContent='right'>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box display='flex' justifyContent='center' sx={{ margin: '5vh 0' }}>
          <Box maxWidth='168vh' padding='3vh' borderRadius='3vh'
            sx={{
              backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
              boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
              backgroundColor: "white"
            }}>
            <Typography fontWeight='800' fontSize='32px' marginBottom='3vh'
              sx={{
                color: "#484848"
              }}>
              Exercícios
            </Typography>
            <Box display='flex' columnGap='5vh' flexWrap='wrap' rowGap='5vh'>
              {Array.isArray(listaExercicios) && listaExercicios.length !== 0 ? (
                listaExercicios.map((exercicio: any, index: any) => {
                  return (
                    <Box
                      key={index}
                      width='50vh'
                      padding='1vh'
                      borderRadius='3vh'
                      sx={{
                        boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                        backgroundImage: 'linear-gradient(to bottom right, #58DE8E, #A1CDE7)',
                        backgroundColor: "#6DB7FC"
                      }}
                    >
                      <Typography marginLeft='2vh' fontSize='18px' fontWeight='600' padding='1vh' color='white'>
                        {exercicio.name}
                      </Typography>
                      <Box alignItems='center' display='flex' columnGap='3vh' padding='2vh 0 2vh 2vh' borderRadius='2vh' margin='0 2vh 1vh 2vh' sx={{ backgroundColor: 'white' }}>
                        <Avatar src={exercicio.execution_gif} sx={{ width: '8vh', height: '8vh' }} />
                        <Typography width='100%' textAlign='left' sx={{ overflowY: 'scroll', height: '15vh' }}>
                          {exercicio.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Box>
        {renderMenu}

      </Box>
    </>
  );
};

export default Dashboard