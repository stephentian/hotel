$('#pay-do').click(function() {
  $('.pay-do').css('display', 'block');
  $('.pay-doing').css('display', 'none');
  $('.pay-done').css('display', 'none');
  $('#pay-do').addClass('on');
  $('#pay-doing').removeClass('on');
  $('#pay-done').removeClass('on');
});
$('#pay-done').click(function() {
  $('.pay-doing').css('display', 'none');
  $('.pay-done').css('display', 'block');
  $('.pay-do').css('display', 'none');
  $('#pay-do').removeClass('on');
  $('#pay-doing').removeClass('on');
  $('#pay-done').addClass('on');
});
$('#pay-doing').click(function() {
  $('.pay-doing').css('display', 'block');
  $('.pay-done').css('display', 'none');
  $('.pay-do').css('display', 'none');
  $('#pay-do').removeClass('on');
  $('#pay-doing').addClass('on');
  $('#pay-done').removeClass('on');
});
