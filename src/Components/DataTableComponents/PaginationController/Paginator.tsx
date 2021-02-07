import React from 'react';
import './Paginator.scss';

export function Paginator(
    {
        maxDataSize,
        paginationIndex,
        paginationSize,
        setPaginationIndex
    }: 
    {
        maxDataSize: number;
        paginationIndex: number;
        paginationSize: number;
        setPaginationIndex: React.Dispatch<React.SetStateAction<number>>
    }
) {
    function handlePreviousClick() {
        setPaginationIndex(paginationIndex - paginationSize);
    }

    function handleNextClick() {
        setPaginationIndex(paginationIndex + paginationSize);
    }

    const lastDataIndex = Math.min(paginationIndex+paginationSize, maxDataSize);

    return (
        <div id='paginator-container'>
            <button
                disabled={paginationIndex === 0}
                onClick={handlePreviousClick}
            >
                Prev
            </button>
                { `${paginationIndex}-${lastDataIndex} out of ${maxDataSize}`}
            <button
                disabled={maxDataSize < paginationSize+paginationIndex}
                onClick={handleNextClick}
            >
                Next
            </button>
        </div>
    )
}