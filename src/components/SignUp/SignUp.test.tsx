import React from 'react';

// RTL
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import SignUp from './SignUp';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

// Services
import http from 'services/http';

// Third party
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(http);

const mockGoBack = jest.fn();

jest.mock('components/TextFieldMask', () => (props: any) => <input {...props} />);

const defaultProps = {
  goBack: mockGoBack
};

const renderComponent = (props = defaultProps) =>
  render(<SignUp {...props} />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('SignUp component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('Should perform sign up', async () => {
    axiosMock.onPost('/users').reply(200, {
      id: 1,
      name: 'Joao Alves',
      email: 'joao@email.com',
      taxvat: '332.629.830-71'
    });

    renderComponent();

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
      expect(mockGoBack).toBeCalled();
    });
  });

  test('Should validate fields', async () => {
    renderComponent();

    const inputs = screen.getAllByRole('textbox');
    const inputName = inputs[0];
    const inputEmail = inputs[1];
    const inputTaxvat = inputs[2];
    const inputPassword = screen.getByTestId('input-password');

    act(() => {
      userEvent.type(inputName, 'Joao Alves');
      userEvent.type(inputEmail, 'joao@email.com');
      userEvent.type(inputTaxvat, '338.629.830-79');
      userEvent.type(inputPassword, 'a102040');
    });

    const buttonSignUp = screen.getByRole('button', { name: /cadastrar/i });

    act(() => {
      userEvent.click(buttonSignUp);
    });

    await waitFor(() => {
      expect(screen.getByText(/cpf inválido/i)).toBeInTheDocument();
    });
  });
});
