import { BrowserRouter } from 'react-router-dom';
// import './shared/forms/TraducoesYup';
import { AppRoutes } from './routes';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
// import { AuthProvider } from '';


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};