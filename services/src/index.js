'use strict'

const express = require('express')
const app = express()
const server = require('http').Server(app)
const createHandlers = require('./handlers')
const port = 8080

createHandlers(app)

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    /* eslint-disable no-console */
    console.log(`Running on http://localhost:${port}`)
})
