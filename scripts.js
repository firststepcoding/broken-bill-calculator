function calculateTotal() {
  var firstItem = $('#firstItem');
  var secondItem = $('#secondItem');
  var thirdItem = $('#thirdItem');

  var total = Integer(firstItem.val()) +
    Integer(secondItem.val()) +
    Integer(thirdItem.val());
  $('#total').text('$' + total);
}

$(function () {
  $('#calculatebutton').click(calculateTotal);
})