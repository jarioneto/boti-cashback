import React from 'react';

// RTL
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

// Components
import List from './List';

// Services
import http from 'services/http';

// Context
import OrderContext from 'contexts/OrderContext';

// Third party
import MockAdapter from 'axios-mock-adapter';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

// Mocks
import mockResponseOrders from '../../../__mocks__/api/orders.json';
import mockResponseOrdersPaginate from '../../../__mocks__/api/ordersPaginate.json';

jest.mock('utils/authentication', () => ({
  getAuth: () => ({ id: 1, username: 'Joao Alves' })
}));

// Inifinite scroll Mock
jest.mock('react-infinite-scroller', () => ({ loadMore, children }: any) => {
  let page = 0;
  page += 1;

  global.addEventListener('scroll', () => loadMore(page));

  return <div>{children}</div>;
});

const axiosMock = new MockAdapter(http);

const renderComponent = () =>
  render(<List />, {
    wrapper: ({ children }) => (
      <OrderContext.Provider value={[]}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </OrderContext.Provider>
    )
  });

describe('List component', () => {
  test('Should render the component', async () => {
    axiosMock
      .onGet('/orders?userId=1&_page=1&_limit=6')
      .reply(200, mockResponseOrders, { 'x-total-count': 6 });

    renderComponent();

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    const list = await waitFor(() => screen.getByTestId('list'));

    await waitFor(() => {
      expect(list.firstChild?.childNodes).toHaveLength(6);
    });
  });

  test('Should load more orders', async () => {
    axiosMock
      .onGet('/orders?userId=1&_page=1&_limit=6')
      .reply(200, mockResponseOrders, { 'x-total-count': 12 });

    axiosMock
      .onGet('/orders?userId=1&_page=2&_limit=6')
      .reply(200, mockResponseOrdersPaginate, { 'x-total-count': 12 });

    renderComponent();

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    const list = await waitFor(() => screen.getByTestId('list'));

    fireEvent.scroll(global.window, { target: { scrollY: 200 } });

    await waitFor(() => {
      expect(list.firstChild?.childNodes).toHaveLength(18);
    });
  });
});
