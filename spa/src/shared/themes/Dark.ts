import { createTheme } from '@mui/material';
import { cyan, orange} from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: orange[700],
            dark: orange[800],
            light: orange[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[400],
            dark: cyan[300],
            light: cyan[100],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#dbdbd9',
            default: '#202124',
        }
    }
});