function calculateTotal() {
  var firstItem = $('#firstItem');
  var secondItem = $('#secondItem');
  var thirdItem = $('#thirdItem');

  var total = Number(firstItem.val()) +
    Number(secnodItem.val()) +
    Number(thirdItem.val());
  $('#total').text('$' + total);
}

// Review: why do we need this outer $ wrapper?
$(function () {
  $('#calculateButton').click(calculateTotal);
})