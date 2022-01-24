import React from 'react';
import { render } from '@testing-library/react';
import { PropertyListings } from './PropertyListings';

describe('PropertyListings Component', () => {
  test('should render', () => {
    const { asFragment } = render(<PropertyListings />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render listings', async () => {
    const { asFragment, findAllByTestId } = render(<PropertyListings />);
    const listings = await findAllByTestId('property-listing');
    expect(listings).not.toHaveLength(0);
    expect(asFragment()).toMatchSnapshot();
  });
});
