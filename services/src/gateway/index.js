const axios = require('axios');

const catalog = async () => {
    const { products } = (await axios.get('https://assignment.dwbt.tech/products')).data
    const { images } = (await axios.get('https://assignment.dwbt.tech/images')).data

    return { products, images }
}

module.exports = catalog
