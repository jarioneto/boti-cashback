import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  overrides: {
    MuiFormHelperText: {
      contained: {
        marginLeft: 'unset'
      }
    }
  },
  palette: {
    primary: {
      main: '#6ED98C',
      dark: '#45c369'
    },
    secondary: {
      main: blue[100]
    }
  },
  typography: {
    fontFamily: 'Poppins Regular, Arial'
  }
});
