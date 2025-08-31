
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

function increaseItem(el) {
    var $input = el.previousElementSibling;
    var value = parseInt($input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    $input.value = value;
    updateQuantity($input);

}
function decreaseItem(el) {
    $input = el.nextElementSibling;
    var value = parseInt($input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        $input.value = value;
        updateQuantity($input);
    }
}
function updateQuantity($input) {
    var line = $($input).attr('data-line');
    var quantity = $($input).val();

    jquery.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: {
            'line': line,
            'quantity': quantity
        },
        dataType: 'json',
        success: function (res) {
            getCartDetails
        },
        error: function (error) {
            console.log('error', error);
        }
    })
}