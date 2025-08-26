$(document).ready(function() {
    function updateSlection(){
        var selectedValus = "";
        $('.product-options input[type=radio]:checked').each(function(){
            selectedValus += (selectedValus ? " / " : "") + $(this).val();  
        });
        // select the main variant
        $('variants option').each(function(){
            if($(this).text()== selectedValus){
                $(this).prop("selected", true);
                return false;
            }
        })
    }
    $('.product-options input[type="radio"]').change(updateSlection);
    updateSlection();   
})