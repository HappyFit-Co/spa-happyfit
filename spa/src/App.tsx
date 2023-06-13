import { BrowserRouter } from 'react-router-dom';
// import './shared/forms/TraducoesYup';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};