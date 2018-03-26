function calculateTotal() {
  var firstItem = $('#firstItem');
  var secondItem = $('#secondItem');
  var thirdItem = $('#thirdItem');

  var total = firstItem.val() +
    secondItem.val() +
    thirdItem.val();
  $('#total').text('$' + total);
}

$(function () {
  $('#calculateButton').click(calculateTotal);
})