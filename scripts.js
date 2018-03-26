
function calculateTotal(){
  var firstItem = $('#firstItem');
  var secondItem = $('#secondItem');
  var thirdItem = $('#thirdItem');

  var total = parseInt(firstItem.val()) + 
              parseInt(secnodItem.val()) + 
              parseInt(thirdItem.val());
  $('#total').text('$' + total);
}

// Review: why do we need this outer $ wrapper?
$(function(){
  $('#calculateButton').click(calculateTotal);
})