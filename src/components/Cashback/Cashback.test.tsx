import React from 'react';

// RTL
import { render, screen, waitFor } from '@testing-library/react';

// Components
import Cashback from './Cashback';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

// Services
import http from 'services/http';

// Third party
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(http);

jest.mock('utils/authentication', () => ({
  getAuth: () => ({ id: 1, username: 'Joao Alves' })
}));

const renderComponent = () =>
  render(<Cashback />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('Cashback component', () => {
  test('Should render the component', async () => {
    axiosMock.onGet('/cashback?userId=1').reply(200, { total: 150.85 });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText(/150,85/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/saldo disponível/i)).toBeInTheDocument();
  });
});
