
(function() {
  $('.menu').click(function() {
    if (!$('#menuBar').hasClass('moved')) {
      $('#menuBar').removeClass('move-left');
      $('#menuBar').addClass('moved');
      $('.header-tab').removeClass('moved');
      $('.header-tab').addClass('move-right');
      $('.container').removeClass('moved');
      $('.container').addClass('move-right');
      $('.overlay').css('display', 'block');
    } else {
      $('#menuBar').removeClass('moved');
      $('#menuBar').addClass('move-left');
      $('.header-tab').removeClass('move-right');
      $('.header-tab').addClass('moved');
      $('.container').removeClass('move-right');
      $('.container').addClass('moved');
      $('.overlay').css('display', 'none');
    }
  });
})();
