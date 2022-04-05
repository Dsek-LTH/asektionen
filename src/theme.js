import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { COLORS } from './colors';
import { darkScrollbar } from '@mui/material';
import { CssBaseline } from '@mui/material/CssBaseline';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: COLORS.MAIN,
    },
    mode: 'light',
  },
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
  }
}
);

//export default theme;
export default theme;