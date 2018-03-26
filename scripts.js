function calculateTotal(){
  var firstItem = $('#firstItem');
  var secondItem = $('#secondItem');
  var thirdItem = $('#thirdItem');

  // Review: why do we have to use Number() here? 
  // What would happen if we used Integer() instead?
  var total = Number(firstItem.val()) + Number(secondItem.val()) + Number(thirdItem.val());
  $('#total').text('$' + total);
}

// Review: why do we need this outer $ wrapper?
$(function(){
  $('#calculateButton').click(calculateTotal);
})