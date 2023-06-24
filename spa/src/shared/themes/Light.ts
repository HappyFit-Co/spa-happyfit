import { createTheme } from '@mui/material';
import { cyan, orange} from '@mui/material/colors';

export const LightTheme = createTheme({
    typography: {
        fontFamily: 'Montserrat'
    },
    palette: {
        primary: {
            main: orange[400],
            dark: orange[500],
            light: orange[300],
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#fff',
        },
        background: {
            paper: '#f5f5fa',
            default: '#f5f5fa',
        }
       
    }
});