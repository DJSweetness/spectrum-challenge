import React, { Fragment, useEffect, useState } from 'react';
import { useQueryRestaurantData } from './hooks';

function App() {
  const restaurantData = useQueryRestaurantData();

  return (
    <div></div>
  )
}

export default App;
