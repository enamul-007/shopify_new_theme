$(document).ready(function () {

    // collection sorting
    Shopify.queryParams = {};

    if (location.search.length) {
        var params = location.search.substr(1).split('&');
        $.each(params, function (index, param) {
            var keyValue = param.split("=");
            if (keyValue.length) {
                Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
            }
        });
    }


    $("#sorted_by").on("change", function () {
        var value = $(this).val();
        Shopify.queryParams.sort_by = value;
        location.search = $.param(Shopify.queryParams);
    });

    // collection filtering
    function updateCollection() {
        var queryString = $("#collection-filter-form").serialize();
        updateSection("&" + queryString); 
    }

    function updateSection(query) {
        fetch("?section_id=collection-template" + query)
            .then((Response) => Response.text())
            .then((colData) => {
                var col_html = $(colData);
                var col_items = $(".collection-products", col_html);
                $(".collection-products").replaceWith(col_items);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    $('#collection-filter-form input[type=checkbox], #collection-filter-form input[type=number]').on('change', function () {
        updateCollection();
    });

});
