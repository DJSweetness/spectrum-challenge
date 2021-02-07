import { Fragment, useState } from 'react';
import './DataTable.scss';
import { SortingTypes, IRestaurantData } from '../../../API/fetchRestaurantData';
import { DataRow } from '../DataRow/DataRow';
import { HeaderRow } from '../HeaderRow/HeaderRow';
import { Paginator } from '../PaginationController/Paginator';
import { TableFilter } from '../TableFilter/TableFilter';
import { filterData, quickSortRestaurantData } from './utils';


export function DataTable(
    {
        restaurantData
    }:
    {
        restaurantData: IRestaurantData[]
    }
) {
    const [sortingBy, setSortingBy] = useState<SortingTypes | ''>('name');
    const [filters, setFilters] = useState<string[] | []>([]);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const paginationSize = 10;
    const headerColumns = ['Name', 'City', 'State', 'Phone Number', 'Genre'];
    const sortedByNameRestaurantData = quickSortRestaurantData(restaurantData, sortingBy);
    const filteredSortedByNameRestaurantData = filterData(sortedByNameRestaurantData, filters);
    const maxDataSize = filteredSortedByNameRestaurantData.length;
    const paginatedData = filteredSortedByNameRestaurantData.slice(paginationIndex, paginationIndex+10);
    const DataRows = paginatedData.map((data, i) => (
        <DataRow key={`data-${i}`} {...data} />
    ));

    return (
        <div id='data-table-container'>
            <TableFilter filters={filters} setFilters={setFilters} setPaginationIndex={setPaginationIndex} />
            <table id='data-table'>
                <thead>
                    <HeaderRow
                        setSortingBy={setSortingBy}
                        sortingBy={sortingBy}
                        headerColumns={headerColumns}
                        setPaginationIndex={setPaginationIndex}
                    />
                </thead>
                <tbody>
                    {
                        paginatedData.length === 0
                            ?
                            <div>There are no results for your search</div>
                            :
                            DataRows
                    }
                </tbody>
            </table>
            <Paginator
                maxDataSize={maxDataSize}
                paginationIndex={paginationIndex}
                paginationSize={paginationSize}
                setPaginationIndex={setPaginationIndex}
            />
        </div>
    )
}