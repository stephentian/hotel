(function() {
  $('.reduce1').click(function() {
    var value1 = parseInt($('.amount1').val());
    if (value1!= 0) {
      value1--;
    } else {
      value1 = 0;
      $('.reduce1').css("background-color","#dcdcdc");
    }
    $('.amount1').val(value1);
  })
  $('.plus1').click(function() {
    $('.reduce1').css("background-color","#fff");
    var value1 = parseInt($('.amount1').val());
    $('.amount1').val(value1+1);
  })

  $('.reduce2').click(function() {
    var value2 = parseInt($('.amount2').val());
    if (value2!= 0) {
      value2--;
    } else {
      value2 = 0;
      $('.reduce2').css("background-color","#dcdcdc");
    }
    $('.amount2').val(value2);
  })
  $('.plus2').click(function() {
    $('.reduce2').css("background-color","#fff");
    var value2 = parseInt($('.amount2').val());
    $('.amount2').val(value2+1);
  })

})();
