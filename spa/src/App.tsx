import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';


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