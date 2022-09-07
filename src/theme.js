import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#9675e3',
        },
        secondary: {
            main: green[500],
        },
    },
});