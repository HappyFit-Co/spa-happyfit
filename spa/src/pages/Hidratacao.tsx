import { AccountCircle, LocalDining, WaterDrop} from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Checkbox, FormControl, IconButton, InputAdornment, InputLabel, LinearProgress, Menu, MenuItem, Select, SelectChangeEvent, styled, TextField, Toolbar, Typography } from "@mui/material";
import { useContext, useState} from "react";
import logoImage from '../assets/images/logo_happy.png';
import waterImage from '../assets/images/water.png';
import { AuthContext } from "../contexts/AuthContext";
import BarChartComponent from "../shared/layouts/Graficos";
import backgroundImage from '../assets/images/fundo_agua.png';
import * as React from 'react';


const Hidratacao = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const [hora, setHora] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setHora(event.target.value);
    };
    const {logout} = useContext(AuthContext);

    function handleLogout(){
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
    <Box sx={{backgroundColor:'#F5F5FA'}}>
        <AppBar position="static" sx={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 16.58%, rgba(0, 0, 0, 0.38) 61.67%, #F5F5FA 88.61%), url(${backgroundImage})`,
            height: '100vh',
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
    <Button color="inherit" sx={{fontSize:'18px'}}>Início</Button>
    <Button color="inherit" sx={{fontSize:'18px',  color: '#FDA17A'}}>Hidratação</Button>
    <Button color="inherit" sx={{fontSize:'18px'}}>Treino</Button>
    <Button color="inherit" sx={{fontSize:'18px'}}>Dieta</Button>
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
           XL de água
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

<Box margin='0 10vh 0 10vh'width='40vh' height='30vh' padding='1vh' borderRadius='1vh'sx={{
                    backgroundImage: 'linear-gradient(to bottom right, #70A3DF, #C173DC)',
                    backgroundColor:"#6DB7FC"
                  }}>
                    <Typography fontWeight='600' padding='1vh' color='white'> Meta de hidratação</Typography>
                    <Box padding='2vh' borderRadius='1vh' sx={{backgroundColor:"white"}}>
                        <Typography fontWeight='500' color="#464646"> Definir meta</Typography>
                        <Typography color='#224D74' paddingBottom='1vh'> Em Litros/dia</Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
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
</Box>
<Box width='40vh' height='30vh' padding='1vh' borderRadius='1vh'sx={{
                    backgroundImage: 'linear-gradient(to bottom right, #70A3DF, #C173DC)',
                    backgroundColor:"#6DB7FC"
                  }}>
                    <Typography fontWeight='600' padding='1vh' color='white'> Adicionar consumo</Typography>
                    <Box padding='2vh' borderRadius='1vh' sx={{backgroundColor:"white"}}>
                        <Typography fontWeight='500' color="#464646"> Quantidade ingerida</Typography>
                        <Typography color='#224D74' paddingBottom='1vh'> Em Litros</Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
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
</Box>
</Box>
        </AppBar>
    <Box display='flex' justifyContent='center' sx={{margin:'5vh 0'}}>
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
                Gráfico de hidratação semanal em Litros.
            </Typography>
            <Typography fontWeight='400' fontSize='17px' color='#F5f5fa' margin='4vh 0vh 0vh 0vh' align="center">
                Sua meta de hidratação diária é de X Litros de água.
            </Typography>
          </Box>

          <Box display='flex' justifyContent='right'>
            <BarChartComponent data={data} color="white" fillColor="#BFE1FF" limite={6} tick={7}/>
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
          <FormControl sx={{ m: 1, minWidth: 80, maxHeight:10 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Horário</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={hora}
            onChange={handleChange}
            autoWidth
            label="Age"
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