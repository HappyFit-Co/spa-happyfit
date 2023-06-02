import { BrowserRouter } from 'react-router-dom';
// import './shared/forms/TraducoesYup';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { AppRoutes } from './routes';
// import { AuthProvider } from '';

import Dashboard from './pages/Dashboard';

export const App = () => {
  return (
    // <AuthProvider>
    <AppThemeProvider>


      <DrawerProvider>
        {/* para o react router dom fazer as rotas funcionarem */}
        <BrowserRouter> 

            <Dashboard/>
            <AppRoutes />

        </BrowserRouter>
      </DrawerProvider>


    </AppThemeProvider>
    /* </AuthProvider> */ 
  );
};