import { IRestaurantData } from "../../../API/fetchRestaurantData";
import './DataRow.scss';

export function DataRow({
    name,
    city,
    state,
    telephone,
    genre
}: IRestaurantData) {
    const TableDataComponents = [name, city, state, telephone, genre].map(data => (
        <td key={data}>{data}</td>
    ));

    return (
        <tr className='table-data-rows' key={name + '-' + city + '-' + telephone}>
            { TableDataComponents }
        </tr>
    )
}