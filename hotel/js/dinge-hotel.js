(function() {
  // switch开关控制
  // 是否可拆分
  $('#div2').click(function() {
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
  // 是否开启订单限制
  $('#div4').click(function() {
    if ($('#div3').hasClass('close1')) {
      $('#div3').attr('class', 'open1');
    } else {
      $('#div3').attr('class', 'close1');
    };
    if ($('#div4').hasClass('close2')) {
      $('#div4').attr('class', 'open2');
    } else {
      $('#div4').attr('class', 'close2');
    }
  });
  // 是否区域共享
  $('#div6').click(function() {
    if ($('#div5').hasClass('close1')) {
      $('#div5').attr('class', 'open1');
    } else {
      $('#div5').attr('class', 'close1');
    };
    if ($('#div6').hasClass('close2')) {
      $('#div6').attr('class', 'open2');
    } else {
      $('#div6').attr('class', 'close2');
    }
  });

  //费用选择
  $('.fee-item').click(function() {
    $(this).toggleClass('fee-item-choose');
  })


  // 费用函数
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
