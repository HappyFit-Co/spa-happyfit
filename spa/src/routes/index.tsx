import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard, Hidratacao, Login, Nutricao, Registro, Treinamento } from '../pages';

// Componentizar
const verificadorLogin = ()=>{
    return false;
} 

// Componentizar
const PrivadoHook = ({ Page }: any) => {
    const logado = verificadorLogin();
    return logado ? <Page /> : <Navigate to="/login" />;
}

// Componentizar
const PublicoHook = ({ Page }: any) => {
    const logado = verificadorLogin();

    return logado ? <Navigate to="/dashboard" /> : <Page />;
}

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<PublicoHook Page={Login} />} />
            <Route path="/dashboard" element={<PrivadoHook Page={Dashboard} />} />
            <Route path="/register" element={<PublicoHook Page={Registro} />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/hidratacao" element={<PrivadoHook Page={Hidratacao} />} />
            <Route path="/treinamento" element={<PrivadoHook Page={Treinamento} />} />
            <Route path="/nutricao" element={<PrivadoHook Page={Nutricao} />} />
        </Routes>
    );
};