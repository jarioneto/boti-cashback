import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Header from './Header';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

const mockHistoryPush = jest.fn();
const mockLocalStorage = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

const renderComponent = () =>
  render(<Header />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('Header component', () => {
  beforeAll(() => {
    global.Storage.prototype.removeItem = mockLocalStorage;
  });

  beforeEach(() => {
    mockLocalStorage.mockClear();
  });

  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByText(/cashback/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Should end the session', () => {
    renderComponent();

    const buttonLogout = screen.getByRole('button');
    userEvent.click(buttonLogout);

    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockLocalStorage).toHaveBeenCalled();
  });
});
