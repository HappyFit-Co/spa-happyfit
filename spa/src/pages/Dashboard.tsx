import { AccountCircle } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, IconButton, LinearProgress, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import logoImage from '../assets/images/logo_happy.png';
import foodImage from '../assets/images/calories.png';
import { AuthContext } from "../contexts/AuthContext";


const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

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

    return (
        <>
            <AppBar position="static" sx={{
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 16.58%, rgba(0, 0, 0, 0.38) 61.67%, #F5F5FA 88.61%), url(https://cdn.discordapp.com/attachments/1091817942695555182/1118272368633192520/image.png)',
                height: '60vh',
                backgroundSize: 'cover',
                boxShadow: 'none'
                }}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Avatar
                        alt="Logo"
                        src={logoImage}
                        variant="rounded"
                        sx={{
                            marginTop: '2vh',
                            width: 'fit-content',
                            height: '8vh',
                            alignSelf: "center"
                        }}/>
                    <Box sx={{}}>
                    <Button color="inherit">Opção 1</Button>
                    <Button color="inherit">Opção 2</Button>
                    <Button color="inherit">Opção 3</Button>
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
                
            </AppBar>
            {renderMenu}

            <Box display='flex' justifyContent='center' sx={{backgroundColor:'#F5F5FA',  margin:'10vh 0' }}>
                  <Box width='45vh' padding='3vh' borderRadius='3vh'
                    sx={{
                      boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                      backgroundColor:"white"
                    }}>
                        <Typography fontSize='18px'> Você Bebeu </Typography>
                        <Typography fontWeight='800' fontSize='32px'
                           sx={{
                              background: 'linear-gradient(to right, #70A4E0, #D9ADE9)',
                              '-webkit-background-clip': 'text',
                              '-webkit-text-fill-color': 'transparent'
                            }}>
                           XL de água
                        </Typography>
                        <StyledLinearProgress variant="determinate" value={50}
                        sx={{
                            height: '3vh',
                            borderRadius: 5,
                            bgcolor: '#F7F5FA',
                            '& .MuiLinearProgress-barColorPrimary': {
                              backgroundColor: '#70A4E0',}
                        }} />
                  </Box>

                  <Box width='45vh' margin='0 5vh' padding='3vh' borderRadius='3vh'
                    sx={{
                      boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                      backgroundColor:"white"
                    }}>
                        <Typography fontSize='18px'> Treinos de </Typography>
                        <Typography fontWeight='800' fontSize='32px'
                          sx={{
                            background: 'linear-gradient(to right, #58DE8E, #A1CDE7)',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent'
                          }}>
                           X feira
                        </Typography>
                        <StyledLinearProgress variant="determinate" value={50}
                        sx={{
                            height: '3vh',
                            borderRadius: 5,
                            bgcolor: '#F7F5FA',
                            '& .MuiLinearProgress-barColorPrimary': {
                              backgroundColor: '#58DE8E',}
                        }} />
                  </Box>
                  <Box width='45vh' padding='3vh' borderRadius='3vh'
                    sx={{
                      backgroundImage: 'linear-gradient(to bottom right, #FFFFFF, #EDEDF3)',
                      boxShadow: '5px 5px 15px rgba(0.1, 0, 0.1, 0.2)',
                      backgroundColor:"white"
                    }}>
                        <Typography fontSize='18px' > Você Consumiu </Typography>
                        <Typography fontWeight='800' fontSize='32px'
                           sx={{
                              background: 'linear-gradient(to right, #FDA17A, #FAE743)',
                              '-webkit-background-clip': 'text',
                              '-webkit-text-fill-color': 'transparent'
                            }}>
                           X calorias
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
                        }}/>
                        <StyledLinearProgress variant="determinate" value={50}
                        sx={{
                            height: '3vh',
                            borderRadius: 5,
                            bgcolor: '#FFFFFF',
                            '& .MuiLinearProgress-barColorPrimary': {
                              backgroundColor: '#FDA17A',}
                        }} />

                  </Box>
             </Box>

      </>
    );
};

export default Dashboard