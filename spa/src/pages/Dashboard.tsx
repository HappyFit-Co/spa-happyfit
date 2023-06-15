import { AccountCircle } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { useContext, useState } from "react";
import logoImage from '../assets/images/logo_happy.png';
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
        </>
    );
};

export default Dashboard