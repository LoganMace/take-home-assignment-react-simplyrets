import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Listing } from './Listing';

const mockProperty = {
  photo: 'test-image',
  bedrooms: 4,
  bathsFull: 3,
  bathsHalf: 2,
  area: 3456,
  listPrice: 1234567,
  address: {
    streetNumber: 404,
    streetName: 'Main St',
    city: 'Dallas',
    state: 'TX'
  },
  listDate: '12/03/2020'
};

describe('Listing Component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <Listing property={mockProperty} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should show filled heart', () => {
    const { asFragment } = render(
      <Listing property={mockProperty} isFavorite={true} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call toggleFavorite on click', () => {
    const toggleMock = jest.fn();
    const { asFragment, getByTestId } = render(
      <Listing property={mockProperty} toggleFavorite={toggleMock} id='1' />
    );
    const favIcon = getByTestId('favorite-icon-1');
    fireEvent.click(favIcon);
    expect(toggleMock).toHaveBeenCalledWith('1');
    expect(asFragment()).toMatchSnapshot();
  });
});
