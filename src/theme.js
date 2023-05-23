import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
  palette: {
    primary: {
        main: "#394867"
    },
    secondary: {
      main: '#212A3E'
    },
    info: {
      main: '#F1F6F9'
    },
    grey: {
      main: "#9BA4B5"
    }
  }
  // ... other theme options ...
});

export default theme;