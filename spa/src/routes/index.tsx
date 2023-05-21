import React from 'react';
import { Button, Icon } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

import { useDrawerContext } from '../shared/contexts';
import { MenuLateral } from '../shared/components';
import { Register } from '../pages';

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Routes>
            <Route
                path="/pagina-inicial"
                element={
                    <MenuLateral>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={toggleDrawerOpen}
                        >
                            <Icon>menu</Icon>
                        </Button>
                    </MenuLateral>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};
