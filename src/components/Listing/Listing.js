import React, { useEffect, useState } from 'react';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';
import './Listing.scss';
import { formatDate, formatPrice, calculateBaths } from './helpers';

export const Listing = ({
  property,
  isFavorite,
  toggleFavorite,
  id
}) => {
  const {
    photo,
    bedrooms,
    bathsFull,
    bathsHalf,
    area,
    listPrice,
    address: {
      streetNumber,
      streetName,
      city,
      state
    },
    listDate
  } = property;

  const [isSaved, setIsSaved] = useState(isFavorite)

  useEffect(() => {
    setIsSaved(isFavorite)
  }, [isFavorite]);

  const getHeartIcon = () => (
    <div data-testid={`favorite-icon-${id}`} onClick={() => toggleFavorite(id)}>
      <img
        src={isSaved ? heartFill : heartStroke}
        className="listing__fav-icon"
        alt="favorite icon"
      />
    </div>
  );

  return (
    <div data-testid={`property-listing`} className='listing'>
      <div className='listing__image-wrap'>
        <img className='listing__image' src={photo} alt='property listing image' />
        {getHeartIcon()}
      </div>
      <div className='listing__interior'>{bedrooms} BR | {calculateBaths(bathsFull, bathsHalf)} Bath | {area} Sq Ft</div>
      <div className='listing__price'>{formatPrice(listPrice)}</div>
      <div className='listing__address'>{streetNumber} {streetName}, {city}, {state}</div>
      <div className='listing__date'>Listed: {formatDate(listDate)}</div>
    </div>
  );
}
