import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6ED98C'
    },
    secondary: {
      main: blue[100]
    }
  }
});

export default theme;
