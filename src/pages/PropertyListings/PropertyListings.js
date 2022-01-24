import React, { useEffect, useState } from 'react';
import { Listing } from '../../components/Listing/Listing';
import './PropertyListings.scss';

export const PropertyListings = () => {

  const [listings, setListings] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    try {
    const response = await fetch('https://api.simplyrets.com/properties', {
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('simplyrets:simplyrets'), 
      })
    });
    const data = await response.json();
    const trimmedData = data.map(({
      address,
      listDate,
      listPrice,
      property,
      photos,
      listingId
    }) => {
      return {
        id: listingId,
        address,
        listDate,
        listPrice,
        photo: photos[0],
        area: property.area,
        bedrooms: property.bedrooms,
        bathsFull: property.bathsFull,
        bathsHalf: property.bathsHalf
      }
    });

    setListings(trimmedData);
    } catch {
      throw new Error('Something went wrong');
    }
  };

  const toggleHeart = (id) => {
    const favoritesCopy = favorites;
    if (favorites.includes(id)) {
      const index = favoritesCopy.indexOf(id);
      favoritesCopy.splice(index, 1);
      setFavorites([...favoritesCopy]);
    } else {
      favoritesCopy.push(id);
      setFavorites([...favoritesCopy]);
    }
  };

  const properties = listings.map((listing) => {
    return (
      <Listing
        key={listing.id}
        id={listing.id}
        property={listing}
        isFavorite={favorites.includes(listing.id)}
        toggleFavorite={toggleHeart}
      />
    );
  });

  return (
    <div className='properties'>
      {properties}
    </div>
  );
}
