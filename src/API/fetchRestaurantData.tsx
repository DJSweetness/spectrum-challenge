
export interface IRestaurantData {
    id: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    zip: string;
    lat: string;
    long: string;
    telephone: string;
    tags: string;
    website: string;
    genre: string;
    hours: string;
    attire: string;
};

export function fetchRestaurantData() {
    const endpoint = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
    const headers = {
        Authorization: 'Api-Key q3MNxtfep8Gt'
    };
    const fallbackData = { fallback: 'data' };

    try {
        return fetch(endpoint, {
            headers
        }).then(response => response.json())
            .then(data => (data));
    } catch(e) {
        return fallbackData;
    }
}