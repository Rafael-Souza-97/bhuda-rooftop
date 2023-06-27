import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1796b",
      dark: '#000000',
      light: "#eaba4d"
    },
    text: {
      primary: "#f1796b",
      secondary: '#999999',
      disabled: '#CCCCCC',
    },
  },
});

export default theme;

// primary: "#eaba4d",
// secondary: "#f1796b",