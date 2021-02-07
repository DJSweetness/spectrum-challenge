import React, { Fragment, useRef } from 'react';
import { FilterList } from './FilterList';
import './TableFilter.scss';

export function TableFilter(
    { filters, setFilters, setPaginationIndex }:
    {
        filters: string[];
        setFilters: React.Dispatch<React.SetStateAction<[] | string[]>>;
        setPaginationIndex: React.Dispatch<React.SetStateAction<number>>
    }
) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleAddFilter = () => {
        const inputValue = inputRef?.current?.value ?? '';

        if (inputRef.current !== null) {
            setPaginationIndex(0);
            setFilters([...filters, inputValue.toLowerCase()]);
            inputRef.current.value = '';
        }
    }
    const handleClearFilters = (e: { preventDefault: Function }) => {
        e.preventDefault();
        setPaginationIndex(0);
        setFilters([]);
    }

    return (
        <div id='filter-search-and-list-container'>
            <div id='filter-search-container'>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <input id='filter-input' type='search' placeholder='Add filter here:' ref={inputRef} />
                    <button id='add-filter-button' type='submit' onClick={handleAddFilter}>Add Filter</button>
                    <button id='clear-filters-button' onClick={handleClearFilters}>Clear Filters</button>
                </form>
            </div>
            <FilterList
                filters={filters}
                setFilters={setFilters}
                setPaginationIndex={setPaginationIndex}
            />
        </div>
    )
}