$('#card').click(function() {
  $('.card').css('display', 'block');
  $('.basic').css('display', 'none');
  $('.receive').css('display', 'none');
  $('.his').css('display', 'none');
  $('.footer').css('display', 'block');
  $('.save').html("保存");
  $('#card').addClass('on');
  $('#his').removeClass('on');
  $('#basic').removeClass('on');
  $('#receive').removeClass('on');
  $('#tab-b').addClass('tab-bottom');
  $('#tab-a').removeClass('tab-bottom');
  $('#tab-c').removeClass('tab-bottom');
  $('#tab-d').removeClass('tab-bottom');
});

$('#receive').click(function() {
  $('.receive').css('display', 'block');
  $('.basic').css('display', 'none');
  $('.card').css('display', 'none');
  $('.his').css('display', 'none');
  $('.footer').css('display', 'block');
  $('.save').html("提交认证");
  $('#receive').addClass('on');
  $('#his').removeClass('on');
  $('#basic').removeClass('on');
  $('#card').removeClass('on');
  $('#tab-c').addClass('tab-bottom');
  $('#tab-a').removeClass('tab-bottom');
  $('#tab-b').removeClass('tab-bottom');
  $('#tab-d').removeClass('tab-bottom');
});

$('#his').click(function() {
  $('.his').css('display', 'block');
  $('.basic').css('display', 'none');
  $('.receive').css('display', 'none');
  $('.card').css('display', 'none');
  $('.footer').css('display', 'none');
  $('#his').addClass('on');
  $('#card').removeClass('on');
  $('#basic').removeClass('on');
  $('#receive').removeClass('on');
  $('#tab-d').addClass('tab-bottom');
  $('#tab-a').removeClass('tab-bottom');
  $('#tab-b').removeClass('tab-bottom');
  $('#tab-c').removeClass('tab-bottom');
});

$('#basic').click(function() {
  $('.basic').css('display', 'block');
  $('.his').css('display', 'none');
  $('.receive').css('display', 'none');
  $('.card').css('display', 'none');
  $('.footer').css('display', 'block');
  $('.save').html("保存");
  $('#basic').addClass('on');
  $('#card').removeClass('on');
  $('#his').removeClass('on');
  $('#receive').removeClass('on');
  $('#tab-a').addClass('tab-bottom');
  $('#tab-b').removeClass('tab-bottom');
  $('#tab-c').removeClass('tab-bottom');
  $('#tab-d').removeClass('tab-bottom');
});
