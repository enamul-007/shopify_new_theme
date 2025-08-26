$(document).ready(function() {

  function selectedVariant(param, value) {
    var url = new URL(window.location.href);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url);
  }

  function updateSelection() {
    var selectedValues = "";

    $('.product-options input[type=radio]:checked').each(function() {
      selectedValues += (selectedValues ? " / " : "") + $(this).val();
    });

 
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

    selectedVariant('variant', currentVariant);

   
    $('select[name="variant"]').trigger('change');
  });

 
  updateSelection();
});
