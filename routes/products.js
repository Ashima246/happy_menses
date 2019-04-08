const express = require('express')
const { Products } = require('../db')

const route = express.Router()

route.get(
    '/',
    async (req, res) => {
        let products = await Products.findAll()
        res.send(products)
    }
)
module.exports = route