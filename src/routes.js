import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { PropertyListings } from './pages/PropertyListings/PropertyListings';

export default (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PropertyListings/>} />
    </Routes>
  </BrowserRouter>
);
