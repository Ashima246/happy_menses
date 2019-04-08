$(() => {
    // console.log(userId)
    $('#products').hide()
    $('#home').show()
$('#home1').click(()=>{
    $('#products').hide()
    $('#home').show()
})


    $('#sanitaryproducts').click(()=>{
        $('#products').show()
        $('#home').hide()
    })
    let userId = location.hash.substr(1)
    console.log(userId)

    $.get(
        `/addtocart/?userId=${userId}`,
        (cartItems) => {
            cartItems.forEach((cartItem) => {
                $('#cartContainer').append(`
                <div class='cartCard'>
                <h4>${cartItem.product.name}</h4>
                <p>${cartItem.product.price}</p>
                <button class='addToCart data-id=${product.id}'>Remove from Cart</button>
                </div>
                `)
            })
        }
    )
    $.get(
        '/products',
        (products) => {
            products.forEach((product) => {
                $('#productContainer').append(`    
                <div class='productCard'>
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <button class='addToCart' data-id='${product.id}'>Add To Cart 🛒</button>
                </div>
                `)
            })
            $('.addToCart').click((ev) => {
                console.log($(ev.target).data('id'))
                $.post(
                   '/addtocart',
                   {userId: userId, productId: $(ev.target).data('id')} //just add produt in cart, nothing expected in return
                )
            })
            // addToCart class events bind
        }
    )
})