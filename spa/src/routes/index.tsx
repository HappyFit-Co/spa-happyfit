import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Dashboard, Hidratacao, Login, Nutricao, Registro, Treinamento } from '../pages';

export const AppRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 0);
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <Routes>
            <Route
                path="/login"
                element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
            />
            <Route
                path="/dashboard"
                element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
                path="/register"
                element={isAuthenticated ? <Navigate to="/dashboard" /> : <Registro />}
            />
            <Route path="/hidratacao" element={isAuthenticated ? <Hidratacao /> : <Navigate to="/login" />} />
            <Route
                path="/treinamento"
                element={isAuthenticated ? <Treinamento /> : <Navigate to="/login" />}
            />
            <Route
                path="/nutricao"
                element={isAuthenticated ? <Nutricao /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};