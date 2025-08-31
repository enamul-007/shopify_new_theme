$(document).ready(function() {

  function selectedVariant(param, value) {
    var url = new URL(window.location.href);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url);
  }

  function updateSelection() {
    var selectedValues = "";

    // Build the variant title string (e.g. "Red / Small")
    $('.product-options input[type=radio]:checked').each(function() {
      selectedValues += (selectedValues ? " / " : "") + $(this).val();
    });

    // Match against Shopify variant dropdown
    $('select[name="variant"] option').each(function() {
      if ($(this).text().trim() === selectedValues.trim()) {
        $(this).prop("selected", true);
        return false;
      }
    });
  }

  $('.product-options input[type="radio"]').change(function() {
    updateSelection();

    var currentVariant = $('select[name="variant"]').val();
    console.log("Selected Variant ID:", currentVariant);

    var variantAvailable = $('select[name="variant"] option:selected').data('available');

    if (variantAvailable === false || variantAvailable === "false") {
      $('.cart-buttons > button').prop('disabled', true).text('Not available');
    } else {
      $('.cart-buttons > button').prop('disabled', false).text('Add to cart');
    }

    selectedVariant('variant', currentVariant);

    $('select[name="variant"]').trigger('change');
  });

  // Initial setup on page load
  updateSelection();
  $('.product-options input[type="radio"]:checked').trigger('change'); 
});
