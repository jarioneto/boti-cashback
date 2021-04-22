import React from 'react';

// RTL
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import OrderForm from './OrderForm';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

// Services
import http from 'services/http';

// Context
import OrderContext from 'contexts/OrderContext';

// Utils
import toast from 'utils/toast';

// Third party
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(http);

jest.mock('utils/toast');

jest.mock('utils/authentication', () => ({
  getAuth: () => ({ id: 1, username: 'Joao Alves' })
}));

jest.mock('components/TextFieldMask', () => (props: any) => <input {...props} />);

const renderComponent = () =>
  render(<OrderForm />, {
    wrapper: ({ children }) => (
      <OrderContext.Provider value={[]}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </OrderContext.Provider>
    )
  });

describe('OrderForm component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  test('Should open drawer', async () => {
    renderComponent();

    const buttonAdd = screen.getByRole('button');
    userEvent.click(buttonAdd);

    const drawer = await screen.findByRole('presentation');

    expect(drawer).toBeInTheDocument();
  });

  test('Should create order', async () => {
    axiosMock.onPost('/orders').reply(200, {
      id: 10203040,
      code: '45324854',
      date: 1618775965632,
      total: 190.5,
      cashbackPercent: 10,
      cashbackTotal: 19.5,
      status: 'Aprovado'
    });

    renderComponent();

    const buttonAdd = screen.getByRole('button');
    userEvent.click(buttonAdd);

    const inputs = await screen.findAllByRole('textbox');
    const inputCode = inputs[0];
    const inputDate = inputs[1];
    const inputTotal = inputs[2];

    act(() => {
      userEvent.type(inputCode, '45324854');
      userEvent.type(inputDate, '19/04/2021');
      userEvent.type(inputTotal, '190,50');
    });

    const buttonSave = screen.getByRole('button', { name: /salvar/i });

    act(() => {
      userEvent.click(buttonSave);
    });

    await waitFor(() => {
      expect(toast).toBeCalledWith('Compra cadastrada com sucesso', { type: 'success' });
    });
  });

  test('Should validate fields', async () => {
    renderComponent();

    const buttonAdd = screen.getByRole('button');
    userEvent.click(buttonAdd);

    const inputs = await screen.findAllByRole('textbox');
    const inputCode = inputs[0];
    const inputDate = inputs[1];
    const inputTotal = inputs[2];

    act(() => {
      userEvent.type(inputCode, '45324854');
      userEvent.type(inputDate, '19/04/2021');
      userEvent.type(inputTotal, '');
    });

    const buttonSave = screen.getByRole('button', { name: /salvar/i });

    act(() => {
      userEvent.click(buttonSave);
    });

    await waitFor(() => {
      expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
    });
  });
});
