$('#card').click(function() {
  $('.card').css('display', 'block');
  $('.basic').css('display', 'none');
  $('.det').css('display', 'none');
  $('.save').html("确认认证");
  $('#card').addClass('on');
  $('#basic').removeClass('on');
  $('#det').removeClass('on');
  $('#tab-m').addClass('tab-bottom');
  $('#tab-l').removeClass('tab-bottom');
  $('#tab-r').removeClass('tab-bottom');
});
$('#det').click(function() {
  $('.basic').css('display', 'none');
  $('.det').css('display', 'block');
  $('.card').css('display', 'none');
  $('.footer').css('display', 'none');
  $('#card').removeClass('on');
  $('#basic').removeClass('on');
  $('#det').addClass('on');
  $('#tab-r').addClass('tab-bottom');
  $('#tab-m').removeClass('tab-bottom');
  $('#tab-l').removeClass('tab-bottom');
});
$('#basic').click(function() {
  $('.basic').css('display', 'block');
  $('.det').css('display', 'none');
  $('.card').css('display', 'none');
  $('.save').html("保存");
  $('#card').removeClass('on');
  $('#basic').addClass('on');
  $('#det').removeClass('on');
  $('#tab-l').addClass('tab-bottom');
  $('#tab-m').removeClass('tab-bottom');
  $('#tab-r').removeClass('tab-bottom');
});
