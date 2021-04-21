import React from 'react';

// RTL
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Home from './Home';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

// Services
import http from 'services/http';

// Utils
import toast from 'utils/toast';

// Third party
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(http);

const mockHistoryPush = jest.fn();
const mockLocalStorage = jest.fn();

jest.mock('utils/toast');

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

jest.mock('components/TextFieldMask', () => (props: any) => <input {...props} />);

const renderComponent = () =>
  render(<Home />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('Home component', () => {
  beforeAll(() => {
    global.Storage.prototype.setItem = mockLocalStorage;
  });

  beforeEach(() => {
    mockLocalStorage.mockClear();
  });

  test('Should render the component', () => {
    renderComponent();

    expect(screen.getAllByRole('heading')).toHaveLength(1);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('Should perform sign in', async () => {
    axiosMock.onPost('/login').reply(200, { id: 1, username: 'Joao' });

    renderComponent();

    const inputEmail = screen.getByRole('textbox');
    const inputPassword = screen.getByTestId('input-password');

    userEvent.type(inputEmail, 'joao@email.com');
    userEvent.type(inputPassword, 'a102040');

    const buttonLogin = screen.getByRole('button', { name: /entrar/i });

    act(() => {
      userEvent.click(buttonLogin);
    });

    await waitFor(() => {
      expect(mockHistoryPush).toBeCalledWith('/orders');
    });
  });

  test('Should perform sign up', async () => {
    axiosMock.onPost('/users').reply(200, {
      id: 1,
      name: 'Joao Alves',
      email: 'joao@email.com',
      taxvat: '332.629.830-71'
    });

    renderComponent();

    const signUpButton = screen.getByRole('button', { name: /cadastre-se/i });
    userEvent.click(signUpButton);

    const inputs = screen.getAllByRole('textbox');
    const inputName = inputs[0];
    const inputEmail = inputs[1];
    const inputTaxvat = inputs[2];
    const inputPassword = screen.getByTestId('input-password');

    act(() => {
      userEvent.type(inputName, 'Joao Alves');
      userEvent.type(inputEmail, 'joao@email.com');
      userEvent.type(inputTaxvat, '332.629.830-71');
      userEvent.type(inputPassword, 'a102040');
    });

    const buttonSignUp = screen.getByRole('button', { name: /cadastrar/i });

    act(() => {
      userEvent.click(buttonSignUp);
    });

    await waitFor(() => {
      expect(toast).toBeCalledWith('Usuário cadastrado com sucesso', { type: 'success' });
    });
  });
});
