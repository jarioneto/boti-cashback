import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';

// Components
import Card from './Card';

// Types
import { Order } from 'types';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

const order: Order = {
  id: 10203046,
  code: '45228799',
  userId: 1,
  date: 1618775965632,
  total: 180.2,
  cashbackPercent: 10,
  cashbackTotal: 18.2,
  status: 'Em validação'
};

const defaultProps = {
  order
};

const renderComponent = (props = defaultProps) =>
  render(<Card {...props} />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('Card component', () => {
  test('Should render order section', () => {
    renderComponent();

    expect(screen.getByText(/código/i)).toBeInTheDocument();
    expect(screen.getByText(/45228799/i)).toBeInTheDocument();
    expect(screen.getByText(/data/i)).toBeInTheDocument();
    expect(screen.getByText(/18 abril 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/180,20/i)).toBeInTheDocument();
  });

  test('Should render cashback section', () => {
    renderComponent();

    expect(screen.getByText(/Cashback/)).toBeInTheDocument();
    expect(screen.getByText(/10%/i)).toBeInTheDocument();
    expect(screen.getByText(/18,20/i)).toBeInTheDocument();
  });
});
