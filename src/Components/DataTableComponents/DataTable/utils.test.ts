import { getFallBackRestaurantData } from '../../../API/fallbackRestaurantData';
import { quickSortRestaurantData } from './utils';

describe('quickSortRestaurantData', () => {
    it('should return an empty array if an empty array is passed', () => {
        const result = quickSortRestaurantData([], '');

        expect(result.length).toBe(0);
    });

    it('should return the same array if the length is 1', () => {
        const passedArray = [getFallBackRestaurantData()[0]];
        const result = quickSortRestaurantData(passedArray, '');

        expect(result).toStrictEqual(passedArray);
    });

    it('should sort the restaurant data by name if an empty string is passed for the sortingBy param', () => {
        const passedArray = getFallBackRestaurantData();
        const result = quickSortRestaurantData(passedArray, '');
        const expectedFirstData = passedArray.find(obj => obj.name === 'A Chef\'s Kitchen');
        const expectedLastData = passedArray.find(obj => obj.name === 'Victoria & Albert\'s');

        expect(result[0]).toStrictEqual(expectedFirstData);
        expect(result[result.length - 1]).toStrictEqual(expectedLastData);
    });

    it('should sort the restaurant data by name if `name` is passed for the sortingBy param', () => {
        const passedArray = getFallBackRestaurantData();
        const result = quickSortRestaurantData(passedArray, 'name');
        const expectedFirstData = passedArray.find(obj => obj.name === 'A Chef\'s Kitchen');
        const expectedLastData = passedArray.find(obj => obj.name === 'Victoria & Albert\'s');

        expect(result[0]).toStrictEqual(expectedFirstData);
        expect(result[result.length - 1]).toStrictEqual(expectedLastData);
    });

    it('should sort the restaurant data by state if `state` is passed for the sortingBy param', () => {
        const passedArray = getFallBackRestaurantData();
        const result = quickSortRestaurantData(passedArray, 'state');
        const expectedFirstData = passedArray.find(obj => obj.name === 'The Capital Grille' && obj.state === 'AZ');
        const expectedLastData = passedArray.find(obj => obj.name === 'Cafe Cimino Country Inn' && obj.state === 'WV');

        expect(result[0]).toStrictEqual(expectedFirstData);
        expect(result[result.length - 1]).toStrictEqual(expectedLastData);
    });

    it('should sort the restaurant data by genre if `genre` is passed for the sortingBy param', () => {
        const passedArray = getFallBackRestaurantData();
        const result = quickSortRestaurantData(passedArray, 'genre');
        const expectedFirstData = passedArray.find(obj => obj.name === 'The Boulders' && obj.genre === 'American,Cafe,Steak,Seafood,Eclectic');
        const expectedLastData = passedArray.find(obj => obj.name === 'Ireland\'s Steakhouse' && obj.genre === 'Steak,American,Seafood,Irish,Cafe');

        expect(result[0]).toStrictEqual(expectedFirstData);
        expect(result[result.length - 1]).toStrictEqual(expectedLastData);
    });
});