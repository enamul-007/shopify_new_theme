$(document).ready(function() {

    function selectedVariant(param, value) {
        var url = new URL (window.location.href);
        url.searchParams.set(param, value); 
        window.history.replaceState({}, '', url);
                 
    }
  function updateSelection() {
    var selectedValues = "";

    // Collect checked radio values
    $('.product-options input[type=radio]:checked').each(function() {
      selectedValues += (selectedValues ? " / " : "") + $(this).val();
    });

    // Match against Shopify variant dropdown
    $('select[name="variant"] option').each(function() {
      if ($(this).text().trim() === selectedValues.trim()) {
        $(this).prop("selected", true);
        return false; // stop loop once matched
      }
    });
  }

  // Run when radios change
  $('.product-options input[type="radio"]').change(function() {
    updateSelection();
      var currentVariant = $('variants').val();  
       console.log(currentVariant);
    selectedVariant( 'variant', currentVariant );
  });

  // Run on page load
  updateSelection();
});
