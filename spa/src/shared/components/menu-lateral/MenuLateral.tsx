import React from 'react';
import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../../contexts';

export const MenuLateral: React.FC = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
              <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>

                <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                    <Avatar
                        sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
                        src="https://pps.whatsapp.net/v/t61.24694-24/315862904_5834905263241221_4701548363938051001_n.jpg?ccb=11-4&oh=01_AdTYoNugX4zGrUoCoLNAk9WWYqhppYQOA_3b6_UhZ5NDQA&oe=6473BB52"
                    />
                </Box>
                <Divider/>

                <Box flex={1}>
                    <List component='nav'>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>waterDrop</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Agua'/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>cookie</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Comida'/>
                        </ListItemButton>
                    </List>
                </Box>

              </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0:theme.spacing(28)}>
              {children}
            </Box>
        </>

    );
};