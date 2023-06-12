import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard, Hidratacao, Informacoes, Login, Nutricao, Registro, Treinamento } from '../pages';

// Componentizar
const verificadorLogin = ()=>{
    return true;
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
            <Route path="/informacoes" element={<PublicoHook Page={Informacoes} />} />

        </Routes>
    );
};