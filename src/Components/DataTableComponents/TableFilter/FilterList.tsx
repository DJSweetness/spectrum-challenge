export function FilterList(
    { filters, setFilters, setPaginationIndex }:
    {
        filters: string[];
        setFilters: React.Dispatch<React.SetStateAction<[] | string[]>>;
        setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
    }
) {
    function removeSpecificFilter(filter: string) {
        const indexOfFilter = filters.indexOf(filter);
        
        filters.splice(indexOfFilter, 1);

        setPaginationIndex(0);
        setFilters([...filters]);
    }

    return (
        <div>
            {
                filters.map(filter => (
                    <div className='single-filter-container' key={filter}>
                        {filter}
                        <button className='clear-single-filter-button' key={filter} onClick={() => removeSpecificFilter(filter)}>X</button>
                    </div>
                ))
            }
        </div>
    )
}