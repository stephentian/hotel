$('#jida').click(function() {
  $('.jida').css('display', 'block');
  $('.dinge').css('display', 'none');
  $('.shangyanton').css('display', 'none');
  $('#jida').addClass('on');
  $('#dinge').removeClass('on');
  $('#shangyanton').removeClass('on');
  $('#tab-m').addClass('tab-bottom');
  $('#tab-l').removeClass('tab-bottom');
  $('#tab-r').removeClass('tab-bottom');
});
$('#shangyanton').click(function() {
  $('.dinge').css('display', 'none');
  $('.shangyanton').css('display', 'block');
  $('.jida').css('display', 'none');
  $('#jida').removeClass('on');
  $('#dinge').removeClass('on');
  $('#shangyanton').addClass('on');
  $('#tab-r').addClass('tab-bottom');
  $('#tab-m').removeClass('tab-bottom');
  $('#tab-l').removeClass('tab-bottom');
});
$('#dinge').click(function() {
  $('.dinge').css('display', 'block');
  $('.shangyanton').css('display', 'none');
  $('.jida').css('display', 'none');
  $('#jida').removeClass('on');
  $('#dinge').addClass('on');
  $('#shangyanton').removeClass('on');
  $('#tab-l').addClass('tab-bottom');
  $('#tab-m').removeClass('tab-bottom');
  $('#tab-r').removeClass('tab-bottom');
});
