import { AccountCircle, LocalDining, WaterDrop} from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, LinearProgress, Menu, MenuItem, Select, SelectChangeEvent, styled, TextField, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect, useState} from "react";
import logoImage from '../assets/images/logo_happy.png';
import waterImage from '../assets/images/water.png';
import { AuthContext } from "../contexts/AuthContext";
import BarChartComponent from "../shared/layouts/Graficos";
import backgroundImage from '../assets/images/fundo_agua.png';
import * as React from 'react';
import { api } from "../services/apiClient";


const Hidratacao = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [definirMeta, setDefinirMeta] = useState("");
    const [addConsumo, setAddConsumo] = useState("");
    const isMenuOpen = Boolean(anchorEl);

    const [hora, setHora] = React.useState('');

    const [aguaDiaria, setAguaDiaria] = useState("")
    const [caloriasDiaria, setCaloriasDiaria] = useState("")

    async function carregarInfoDiaria() {
    const response = await api.get('/records/') as any
    const respGoals = await api.get('/goals/') as any
    setAguaDiaria (response.data.daily_water)
    setDefinirMeta(respGoals.data.daily_water)
  }

    useEffect(() => {
      carregarInfoDiaria()
    }, [])

    const handleChange = (event: SelectChangeEvent) => {
      setHora(event.target.value);
    };
    const {logout} = useContext(AuthContext);

    function handleLogout(){
      logout()
    }

    function handleLerMeta(event){
      setDefinirMeta(event.target.value);
    }

    function handleLerConsumo(event){
      setAddConsumo(event.target.value);
    }

    function handleDefinirMeta(){
      if(definirMeta === "" || Number(definirMeta) < 0){
        alert("Campo vazio!")
        return
      }
      const data ={
        "weight": 70.0,
        "objective": "Força",
        "daily_calories": 2500,
        "daily_water": Number(definirMeta),
        "daily_macro_nutrient": {
            "protein": 220,
            "carbohydrate": 50,
            "fat": 5
        },
        "deadline": "2022-10-10",
        "workout": [],
        "diet": []
    }
    try {
      api.post("/goals/", data)
      carregarInfoDiaria()
    } catch (error) {
      alert(error)
    }
     
    }

    function handleAddConsumo(){
      if(addConsumo === "" || Number(addConsumo) <= 0){
        alert("Campo vazio!")
        carregarInfoDiaria()
        return
      }

    try {
      api.put("/records/water/add/"+addConsumo)
      carregarInfoDiaria()
    } catch (error) {
      alert(error)
    }
     
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
          sx={{colo:'red'}}
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
        { name: 'Domingo', value: 0 },
        { name: 'Segunda', value: 0 },
        { name: 'Terça', value: aguaDiaria },
        { name: 'Quarta', value: 0 },
        { name: 'Quinta', value: 0 },
        { name: 'Sexta', value: 0 },
        { name: 'Sábado', value: 0 },
      ];

    return (

    <>
    <Box sx={{backgroundColor:'#F5F5FA'}}>
        <AppBar position="static" sx={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 16.58%, rgba(0, 0, 0, 0.38) 61.67%, #F5F5FA 88.61%), url(${backgroundImage})`,
            height: '80vh',
            backgroundSize: 'cover',
            boxShadow: 'none'
        }}>
<Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
    <Avatar
        alt="Logo"
        src={logoImage}
        variant="rounded"
        sx={{
            marginTop: '5vh',
            width: 'fit-content',
            height: '8vh',
            alignSelf: "center"
        }}/>
    <Box sx={{}}>
    <Button  href="/dashboard" color="inherit" sx={{fontSize:'18px', '&:hover': { color: '#FDA17A' } }}>Início</Button>
    <Button href="/hidratacao" color="inherit" sx={{fontSize:'18px',  color: '#FDA17A', '&:hover': { color: '#FDA17A' } }}>Hidratação</Button>
    <Button href="/treinamento" color="inherit" sx={{fontSize:'18px', '&:hover': { color: '#FDA17A' } }}>Treino</Button>
    <Button href="/nutricao" color="inherit" sx={{fontSize:'18px', '&:hover': { color: '#FDA17A' } }}>Dieta</Button>
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
<Box display='flex' justifyContent='center' alignItems='center' sx={{margin:'30vh 0'}}>
  <Box width='45vh' padding='3vh' borderRadius='3vh'
    sx={{
      backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
      boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
      backgroundColor:"white"
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
        }}/>
        <StyledLinearProgress variant="determinate" value={50}
        sx={{
            height: '3vh',
            borderRadius: 5,
            bgcolor: '#F7F5FA',
            '& .MuiLinearProgress-barColorPrimary': {
              backgroundColor: '#70A4E0',}
        }} />
   </Box>

<Box margin='0 10vh 0 10vh'width='40vh' height='37vh' padding='1vh' borderRadius='1vh'sx={{
                    backgroundImage: 'linear-gradient(to bottom right, #70A3DF, #C173DC)',
                    backgroundColor:"#6DB7FC"
                  }}>
                    <Typography fontWeight='600' padding='1vh' color='white'> Meta de hidratação</Typography>
                    <Box padding='2vh' borderRadius='1vh' sx={{backgroundColor:"white"}}>
                        <Typography fontWeight='500' color="#464646"> Definir meta</Typography>
                        <Typography color='#224D74' paddingBottom='1vh'> Em ml/dia</Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          onChange={handleLerMeta}
                          label='Água'
                          margin='dense'
                          type='number'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start" sx={{color:"#70A3DF"}}>
                                <WaterDrop />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            width: '100%',
                          }}
                        />
                        
                    </Box>
    <Button onClick={handleDefinirMeta} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white', backgroundColor:'#5597D5' }, backgroundColor:'#6DB7FC' }}>
      Definir</Button>
</Box>
<Box width='40vh' height='37vh' padding='1vh' borderRadius='1vh'sx={{
                    backgroundImage: 'linear-gradient(to bottom right, #70A3DF, #C173DC)',
                    backgroundColor:"#6DB7FC"
                  }}>
                    <Typography fontWeight='600' padding='1vh' color='white'> Adicionar consumo</Typography>
                    <Box padding='2vh' borderRadius='1vh' sx={{backgroundColor:"white"}}>
                        <Typography fontWeight='500' color="#464646"> Quantidade ingerida</Typography>
                        <Typography color='#224D74' paddingBottom='1vh'> Em ml</Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          label='Água'
                          onChange={handleLerConsumo}
                          margin='dense'
                          type='number'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start" sx={{color:"#70A3DF"}}>
                                <WaterDrop />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            width: '100%',
                          }}
                        />
                    </Box>
      <Button onClick={handleAddConsumo} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white', backgroundColor:'#5597D5' }, backgroundColor:'#6DB7FC' }}>
      Adicionar</Button>
</Box>
</Box>
        </AppBar>
    <Box display='flex' justifyContent='center' sx={{margin:'25vh 0'}}>
        <Box width='145vh' padding='3vh' borderRadius='3vh'
    sx={{
      backgroundImage: 'linear-gradient(to bottom right, #EDEDF3, #FFFFFF)',
      boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
      backgroundColor:"white"
    }}>
        <Typography fontWeight='800' fontSize='32px' marginBottom='1vh'
           sx={{
              color:"#484848"
            }}>
           Seu desempenho
        </Typography>

        <Box display='flex' justifyContent='center' borderRadius='3vh' padding='3vh'
          sx={{justifyContent:'space-around',
          boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
          backgroundColor:"#184C50"}}>

          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='600' fontSize='25px' color='#F5f5fa' align="center">
                Consumo de água
            </Typography>
            <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                Gráfico de hidratação semanal em ml.
            </Typography>
            <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                Sua meta de hidratação diária é de {definirMeta} ml de água.
            </Typography>
          </Box>

          <Box display='flex' justifyContent='right'>
            <BarChartComponent data={data} color="white" fillColor="#6DB7FC" limite={Number(definirMeta)} tick={7}/>
          </Box>
        </Box>

        <Box display='flex' justifyContent='center' borderRadius='3vh' padding='3vh' marginTop='4vh'
          sx={{justifyContent:'space-around',
          boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
          backgroundColor:"#184C50"}}>

          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='600' fontSize='25px' color='#F5f5fa' align="left">
                Notificação de lembrete
            </Typography>
            <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='0vh 0vh 0vh 0vh' align="center">
                Selecione os horários para as notificações de lembrete de hidratação.
            </Typography>
          </Box>
          <Box>
          <FormControl sx={{ m: 1, minWidth: 100}}>
            <InputLabel id="demo-simple-select-autowidth-label" sx={{ color: '#6DB7FC' }}>Horário</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={hora}
            onChange={handleChange}
            autoWidth
            label="Age"
            sx={{ '& .MuiSelect-select': { color: '#ffffff' }, '& .MuiSvgIcon-root': { color: '#fffff' }, minWidth: 100}}
            >
            <MenuItem value="">
                <em>Nenhum</em>
            </MenuItem>
            <MenuItem value={1}>00:00h</MenuItem>
            <MenuItem value={2}>1:00h</MenuItem>
            <MenuItem value={3}>2:00h</MenuItem>
            <MenuItem value={4}>3:00h</MenuItem>
            <MenuItem value={5}>4:00h</MenuItem>
            <MenuItem value={6}>5:00h</MenuItem>
            <MenuItem value={7}>6:00h</MenuItem>
            <MenuItem value={8}>7:00h</MenuItem>
            <MenuItem value={9}>8:00h</MenuItem>
            <MenuItem value={10}>9:00h</MenuItem>
            <MenuItem value={11}>10:00h</MenuItem>
            <MenuItem value={12}>11:00h</MenuItem>
            <MenuItem value={13}>12:00h</MenuItem>
            <MenuItem value={14}>13:00h</MenuItem>
            <MenuItem value={15}>14:00h</MenuItem>
            <MenuItem value={16}>15:00h</MenuItem>
            <MenuItem value={17}>16:00h</MenuItem>
            <MenuItem value={18}>17:00h</MenuItem>
            <MenuItem value={19}>18:00h</MenuItem>
            <MenuItem value={20}>19:00h</MenuItem>
            <MenuItem value={21}>20:00h</MenuItem>
            <MenuItem value={22}>21:00h</MenuItem>
            <MenuItem value={23}>22:00h</MenuItem>
            <MenuItem value={24}>23:00h</MenuItem>
            </Select>
        </FormControl>
        <Button onClick={()=>{alert("Notificação definida com sucesso!")}} variant="contained" sx={{ borderRadius: '20vh', height: '5vh', margin: '2vh 0 0 0', width: '100%', '&:hover': { color: 'white', backgroundColor:'#5597D5' }, backgroundColor:'#6DB7FC' }}>Adicionar</Button>
          </Box>
        
        </Box>

</Box>
{renderMenu}

    </Box>
    </Box>
    </>
    );
};

export default Hidratacao;