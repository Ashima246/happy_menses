const express = require('express')
const { Cart_Items, Products } = require('../db')

const route = express.Router()

route.get(
    '/', 
    async (req, res) => {
        let userId = req.query.userId
        let cartItems = await Cart_Items.findAll({
            where: {
                womenDetailId: userId
            },
            include: [Products]
        })
        res.send(cartItems)
    }
)

route.post(
    '/',
    async (req, res) => {
        let userId = req.body.userId,
            productId = req.body.productId
            //quantity check 1. add quantity column->2.check if present update quant else create row
        await Cart_Items.create({
            womenDetailId: userId,
            productId: productId
        })
        let cartItems = await Cart_Items.findAll({
            where: {
                womenDetailId: userId
            },
            include: [Products]
        })
        res.send(cartItems)
    }
)

module.exports = route