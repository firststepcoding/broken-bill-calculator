var total = 0;

function calculateTotal() {
  var firstItem = $('#firstItem');
  total += Number(firstItem.val());

  var secondItem = $('#firstItem');
  total += Number(secondItem.val());

  var thirdItem = $('#thirdItem');
  total += Number(thirdItem.val());

  $('#total').text('$' + total);
}

// Review: why do we need this outer $ wrapper?
$(function () {
  $('#calculateButton').click(calculateTotal);
})