import React from 'react';
import { Button, Icon } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

import { useDrawerContext } from '../shared/contexts';
import { MenuLateral } from '../shared/components';
import { Dashboard, Register } from '../pages';

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agua" element={<Dashboard />} />
            <Route path="/comida" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
};
