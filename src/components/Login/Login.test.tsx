import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Login from './Login';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

const renderComponent = () =>
  render(<Login />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('Login component', () => {
  test('Should render component in the sign in scenario', () => {
    renderComponent();

    expect(screen.getAllByRole('textbox')).toHaveLength(1);
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('Should render component in the sign up scenario', () => {
    renderComponent();

    const signUpButton = screen.getByRole('button', { name: /cadastre-se/i });
    userEvent.click(signUpButton);

    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});
