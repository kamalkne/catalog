export function getProductList() {
    return fetch('http://localhost:8080')
        .then(data => data.json())
}
