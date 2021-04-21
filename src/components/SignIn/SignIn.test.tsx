import React from 'react';

// RTL
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import SignIn from './SignIn';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

// Services
import http from 'services/http';

// Third party
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(http);

const mockHistoryPush = jest.fn();
const mockLocalStorage = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

const renderComponent = () =>
  render(<SignIn />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('SignIn component', () => {
  beforeAll(() => {
    global.Storage.prototype.setItem = mockLocalStorage;
  });

  beforeEach(() => {
    mockLocalStorage.mockClear();
  });

  test('Should render the component', () => {
    renderComponent();

    expect(screen.getAllByRole('textbox')).toHaveLength(1);
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  test('Should perform sign in', async () => {
    axiosMock.onPost('/login').reply(200, { id: 1, username: 'Joao' });

    renderComponent();

    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('input-password');

    userEvent.type(inputEmail, 'joao@email.com');
    userEvent.type(inputPassword, 'a102040');

    const buttonLogin = screen.getByRole('button');

    act(() => {
      userEvent.click(buttonLogin);
    });

    await waitFor(() => {
      expect(mockHistoryPush).toBeCalledWith('/orders');
    });
  });

  test('Should validate fields', async () => {
    renderComponent();

    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('input-password');

    userEvent.type(inputEmail, 'joaoemail');
    userEvent.type(inputPassword, 'a102040');

    const buttonLogin = screen.getByRole('button');

    act(() => {
      userEvent.click(buttonLogin);
    });

    await waitFor(() => {
      expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument();
    });
  });
});
