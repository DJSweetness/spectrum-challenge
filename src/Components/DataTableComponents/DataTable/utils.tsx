import { SortingTypes, IRestaurantData } from "../../../API/fetchRestaurantData";

export function quickSortRestaurantData(array: IRestaurantData[], sortingBy: SortingTypes | ''): IRestaurantData[] {
    if(array.length < 2) {
      return array;
    }
  
    const lowerCasedSortingBy = sortingBy.toLowerCase() as SortingTypes || 'name';
    const pivot = array[0];
    const lesserArray = [];
    const greaterArray = [];
  
    for (let i = 1; i < array.length; i++) {
        if ( array[i][lowerCasedSortingBy].toLowerCase() > pivot[lowerCasedSortingBy].toLowerCase() ) {
            greaterArray.push(array[i]);
        } else {
            lesserArray.push(array[i]);
        }
    }
  
    return quickSortRestaurantData(lesserArray, lowerCasedSortingBy).concat(pivot, quickSortRestaurantData(greaterArray, lowerCasedSortingBy));
}

export function filterData(array: IRestaurantData[], filters: string[]) {
    if (!filters.length) {
        return array;
    }

    // some filter value is includes in name, city, or genre
    return array.filter(data =>
        filters.some(filter => data.name.toLowerCase().includes(filter)) ||
        filters.some(filter => data.city.toLowerCase().includes(filter)) ||
        filters.some(filter => data.genre.toLowerCase().includes(filter))
    );
}
