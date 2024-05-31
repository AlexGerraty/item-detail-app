/* Save API URL as variable */

const API_URL = 'https://dummyjson.com'

/* Function to retrieve all products from the dummy json API */
export function getItems() {
    return fetch(`${API_URL}/products`).then(response => response.json());
}
/* Function to specific product from the dummy json API based on id*/
export function getItem(id) {
    return fetch(`${API_URL}/products/${id}`).then(response => response.json());
}

export function sortNameAsc() {
    return fetch (`${API_URL}/products?sortBy=title&order=asc`)     
}

export function sortNameDesc() {
    return fetch (`${API_URL}/products?sortBy=title&order=desc`)     
}