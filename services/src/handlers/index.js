const bodyParser = require('body-parser')
const catalogGateway = require('../gateway')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept')
        next()
    })

    app.options('*', function(req, res) {
        res.send(200)
    })

    app.get('/', async (req, res) => {
        const { products, images } = await catalogGateway()

        const productsCatalog = products.map((product) => ({
                ...product,
                images: images[product.sku]
            }))
        res.status(200).json({ products: productsCatalog });
    })
}
