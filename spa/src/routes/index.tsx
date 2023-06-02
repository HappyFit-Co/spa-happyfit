import { Routes, Route, Navigate } from 'react-router-dom';

import { Login, Registro, Hidratacao, Treinamento, Nutricao } from '../pages';

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registro />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/hidratacao" element={<Hidratacao />} />
            <Route path="/treinamento" element={<Treinamento />} />
            <Route path="/nutricao" element={<Nutricao />} />
        </Routes>
    );
};