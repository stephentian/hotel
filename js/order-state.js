$('#do').click(function() {
  $('.do').css('display', 'block');
  $('.doing').css('display', 'none');
  $('.done').css('display', 'none');
  $('#do').addClass('on');
  $('#doing').removeClass('on');
  $('#done').removeClass('on');
  $('#tab-m').addClass('tab-bottom');
  $('#tab-l').removeClass('tab-bottom');
  $('#tab-r').removeClass('tab-bottom');
});
$('#done').click(function() {
  $('.doing').css('display', 'none');
  $('.done').css('display', 'block');
  $('.do').css('display', 'none');
  $('#do').removeClass('on');
  $('#doing').removeClass('on');
  $('#done').addClass('on');
  $('#tab-r').addClass('tab-bottom');
  $('#tab-m').removeClass('tab-bottom');
  $('#tab-l').removeClass('tab-bottom');
});
$('#doing').click(function() {
  $('.doing').css('display', 'block');
  $('.done').css('display', 'none');
  $('.do').css('display', 'none');
  $('#do').removeClass('on');
  $('#doing').addClass('on');
  $('#done').removeClass('on');
  $('#tab-l').addClass('tab-bottom');
  $('#tab-m').removeClass('tab-bottom');
  $('#tab-r').removeClass('tab-bottom');
});
