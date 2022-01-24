import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  test('should render', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render header title', () => {
    const { getByText } = render(<Header />);
    const titleText = getByText('Property Listings');
    expect(titleText).toBeInTheDocument();
  });
});
