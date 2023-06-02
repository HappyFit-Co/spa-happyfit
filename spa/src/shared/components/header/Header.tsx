import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './header.css';


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header: React.FC = () => {
  const [headerColor, setHeaderColor] = useState('transparent');
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 0) {
        setHeaderColor('black');
      } else {
        setHeaderColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- HEADER --> */}
      <header className='fixed-top' style={{ backgroundColor: headerColor }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            {/* <!-- navbar responsiva --> */}
            <div className="col-12 d-flex flex-nowrap d-lg-none">

              {/* <!-- toggle responsivo do menu --> */}
              <div className="col-8 justify-content-center align-items-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              {/* <!-- dropdown com a foto de perfil responsivo --> */}
              <div className="col-4">
                <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-2">Buy Ticket</a>
              </div>

            </div>

            {/* <!-- navbar desktop --> */}
            <div className="collapse navbar-collapse" id="navbarNav">

              {/* <!-- logo --> */}
              <div className="col-1">
                <a href="index.html">
                  <img src="../assets/images/logo_happy.png" className="img-fluid small-logo" alt="Logo" />
                </a>
              </div>

              {/* <!-- itens de menu --> */}
              <div className="col-10">
                <ul className="navbar-nav d-flex justify-content-center align-items-center ms-auto me-lg-5">
                  <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/" className="orange-link nav-link click-scroll">Início</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/hidratacao' ? 'active' : ''}`}>
                    <Link to="/hidratacao" className="orange-link nav-link click-scroll">Hidratação</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/treinamento' ? 'active' : ''}`}>
                    <Link to="/treinamento" className="orange-link nav-link click-scroll">Treino</Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '/nutricao' ? 'active' : ''}`}>
                    <Link to="/nutricao" className="orange-link nav-link click-scroll">Dieta</Link>
                  </li>
                </ul>

              </div>

              {/* <!-- dropdown com a foto de perfil --> */}
              <div className="col-1">
                <React.Fragment>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;