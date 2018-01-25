$('#div2').click(function() {
  $('.state').toggle(300);
  if ($('#div1').hasClass('close1')) {
    $('#div1').attr('class', 'open1');
  } else {
    $('#div1').attr('class', 'close1');
  };
  if ($('#div2').hasClass('close2')) {
    $('#div2').attr('class', 'open2');
  } else {
    $('#div2').attr('class', 'close2');
  }
});
