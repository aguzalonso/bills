import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#4eb24f',
        },
        secondary: {
            main: '#f1f3f9',
        },
    },
});