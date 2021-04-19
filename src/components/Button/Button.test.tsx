import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Button from './Button';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles';

const defaultProps = {
  loading: false
};

const renderComponent = (props = defaultProps) =>
  render(<Button {...props}>Cancel</Button>, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
  });

describe('Button component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });

  test('Should execute function on click', () => {
    const props = {
      ...defaultProps,
      onClick: jest.fn()
    };

    renderComponent(props);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(props.onClick).toHaveBeenCalled();
  });

  test('Should execute function on click', () => {
    const props = {
      loading: true
    };

    renderComponent(props);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
