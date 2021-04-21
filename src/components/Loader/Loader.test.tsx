import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import Loader from './Loader';

const renderComponent = () => render(<Loader />);

describe('Loader Component', () => {
  test('Should render the component', () => {
    const { container, getByRole } = renderComponent();

    expect(getByRole('progressbar')).toBeInTheDocument();
    expect(container.querySelector('circle')).toBeInTheDocument();
  });
});
