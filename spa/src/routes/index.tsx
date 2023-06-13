import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Dashboard, Hidratacao, Informacoes, Login, Nutricao, Registro, Treinamento } from '../pages';



export const AppRoutes = () => {

    // Componentizar
    const PrivadoHook = ({ Page }: any) => {
        const { isAuthenticated } = useContext(AuthContext);
        return isAuthenticated ? <Page /> : <Navigate to="/login" />;
    }

    // Componentizar
    const PublicoHook = ({ Page }: any) => {
        const { isAuthenticated } = useContext(AuthContext);
        return isAuthenticated ? <Navigate to="/dashboard" /> : <Page />;
    }

    return (
        <Routes>
            <Route path="/login" element={<PublicoHook Page={Login} />} />
            <Route path="/dashboard" element={<PrivadoHook Page={Dashboard} />} />
            <Route path="/register" element={<PublicoHook Page={Registro} />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/hidratacao" element={<PrivadoHook Page={Hidratacao} />} />
            <Route path="/treinamento" element={<PrivadoHook Page={Treinamento} />} />
            <Route path="/nutricao" element={<PrivadoHook Page={Nutricao} />} />
            <Route path="/informacoes" element={<PublicoHook Page={Informacoes} />} />
        </Routes>
    );
};