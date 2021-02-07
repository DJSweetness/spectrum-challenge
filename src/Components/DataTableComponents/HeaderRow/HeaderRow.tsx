import React, { Fragment, useState } from "react";
import { SortingTypes } from "../../../API/fetchRestaurantData";

export function HeaderRow(
    {
        headerColumns,
        setPaginationIndex,
        setSortingBy,
        sortingBy
    }:
    {
        headerColumns: string[];
        sortingBy: string;
        setPaginationIndex: React.Dispatch<React.SetStateAction<number>>
        setSortingBy: React.Dispatch<React.SetStateAction<SortingTypes | ''>>
    }
) {
    const sortingByList = ['name', 'state', 'genre'];
    function setSortingByWithHeader(
        e: {
            target: {
                checked: boolean;
            };
        },
        header: string
    ): void {
        const isBoxChecked = e.target.checked;

        setPaginationIndex(0); // reset the paginator if we change the filter

        if (isBoxChecked) {
            setSortingBy(header as SortingTypes);
        } else {
            setSortingBy('');
        }
    }

    return (
        <tr>
            {
                headerColumns.map(header => (
                    <th key={header}>
                        {
                            sortingByList.includes(header.toLowerCase())
                                ?
                                    <Fragment>
                                        { header }
                                        <input
                                            type='checkbox'
                                            onChange={(e) => setSortingByWithHeader(e, header)}
                                            checked={sortingBy === header }
                                        />
                                    </Fragment>
                                :
                                header
                        }
                    </th>
                ))
            }
        </tr>
    )
}