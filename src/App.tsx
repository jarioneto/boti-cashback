import React from 'react';

// Third party
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';

// Components
import Routes from './routes';

// Styles
import { theme } from './styles';
import './assets/css/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
