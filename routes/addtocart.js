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
        await Cart_Items.create({
            womenDetailId: userId,
            productId: productId
        })
        res.redirect(`/addtocart/?userId=${userId}`)
    }
)

module.exports = route