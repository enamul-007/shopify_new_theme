$(document).ready(function(){
    shopify.queryParams = {};
    if(location.search.length){
        var params = location.search.substr(1).split('&');
        $each(params, function(index, param){
            var keyValue = param.split("=");
            if(keyValue.length){
                shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1])
            }
        })
    }
    $().on( "change", function(e){
        var value = $(this).val();
        shopify.queryParams.sort_by = value;
        location.search = $.param(shopify.queryParams);
    })
})