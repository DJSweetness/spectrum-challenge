import { IRestaurantData } from "../../../API/fetchRestaurantData";

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
        <tr key={name + '-' + city + '-' + telephone}>
            { TableDataComponents }
        </tr>
    )
}