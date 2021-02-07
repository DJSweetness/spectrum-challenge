import React from 'react';
import { DataTable } from '../DataTableComponents/DataTable/DataTable';
import { useQueryRestaurantData } from './hooks';
import './App.scss';

function App() {
  const restaurantData = useQueryRestaurantData();

  return (
    <div id='container'>
      <DataTable restaurantData={restaurantData}></DataTable>
    </div>
  )
}

export default App;
