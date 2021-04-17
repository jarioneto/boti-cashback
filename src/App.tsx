import React from 'react';

// Third party
import { ThemeProvider } from '@material-ui/core/styles';

// Styles
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Home</h1>
    </ThemeProvider>
  );
};

export default App;
