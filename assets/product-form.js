$(document).ready(function () {
    if ($('button[name="add"]').length > 0)
        $(document).on('click', 'button[name="add"]', function (e) {
            e.preventDefault();
            var formData = $(this).closest('form[action="/cart/add"]').serialize();
            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: formData,
                success: function (data) {
                    console.log('data:', data);
                    // $('#offcanvasRight').offcanvas('show');
                    getCartDetails();
                },
                error: 'add to cart error'
            })

        });

});                   

function getCartDetails(params) {
    fetch("section_id=cart-drawer")
    .then((Response)=>Response.text())
    .then((cartData)=>{
        var cart_Html = $(cartData)
        var cart_items = $('.cart_items' , cart_Html)
        $('.cart_items').replaceWith(cart_items)
    })
    fetch("?section_id=header")
    .then((Response)=>Response.text())
    .then((headerData)=>{
        var cart_Html = $(headerData)
        var cart_count = $('.header-cart-count', cart_Html)
        $('.header-cart-count').replaceWith
    })
}