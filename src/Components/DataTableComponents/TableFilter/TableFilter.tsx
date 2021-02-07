import React, { Fragment, useRef } from 'react';
import { FilterList } from './FilterList';

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

        console.log(inputValue);
    }
    const handleClearFilters = () => {
        setPaginationIndex(0);
        setFilters([]);
    }

    return (
        <Fragment>
            <div>
                <input type='search' placeholder='Add filter here:' ref={inputRef} />
                <button onClick={handleAddFilter}>Add Filter</button>
                <button onClick={handleClearFilters}>Clear Filters</button>
            </div>
            <FilterList
                filters={filters}
                setFilters={setFilters}
                setPaginationIndex={setPaginationIndex}
            />
        </Fragment>
    )
}