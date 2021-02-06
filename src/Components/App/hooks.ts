import React, { useEffect, useState } from 'react';
import { fetchRestaurantData, IRestaurantData } from '../../API/fetchRestaurantData';

export function useQueryRestaurantData(): IRestaurantData[] {
    const [restaurantData, setRestaurantData] = useState<IRestaurantData[]>([]);

    useEffect(() => {
        async function getRestaurantData() {
            const data = await fetchRestaurantData();

            setRestaurantData(data);
        }

        getRestaurantData();
    }, [])

    return restaurantData;
}