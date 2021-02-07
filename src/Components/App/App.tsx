import React, { Fragment } from 'react';
import { DataTable } from '../DataTableComponents/DataTable/DataTable';
import { useQueryRestaurantData } from './hooks';

function App() {
  const restaurantData = useQueryRestaurantData();

  return (
    <Fragment>
      <DataTable restaurantData={restaurantData}></DataTable>
    </Fragment>
  )
}

export default App;
