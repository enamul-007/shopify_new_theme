
function getCartDetails(params) {
    fetch("section_id=cart-drawer")
        .then((Response) => Response.text())
        .then((cartData) => {
            var cart_Html = $(cartData)
            var cart_items = $('.cart_items', cart_Html)
            $('.cart_items').replaceWith(cart_items)
            var drawer_header = $('#offcanvasRightLabel', cart_Html)
            $('#offcanvasRightLabel').replaceWith(drawer_header)
            var subtotal = $('.subtotal', cart_Html)
            $('.subtotal').replaceWith(subtotal)
        })
    fetch("?section_id=header")
        .then((Response) => Response.text())
        .then((headerData) => {
            var cart_Html = $(headerData)
            var cart_count = $('.header-cart-count', cart_Html)
            $('.header-cart-count').replaceWith
        })
}

function increaseItem (el){
    console.log('Increases!');
    
}
function decreaseItem (el){
    console.log('Decreases!');
    
}