var CheckUtil = {
  //判断输入是否为空
  isEmpty: function(val) {
    if (!val || val.length == 0) {
      return true;
    } else {
      return false;
    }
  },
  //判断昵称是否合格
  isName: function(val) {
    if (val.length == 0 || val.length >20) {
      return tre;
    } else {
      return false;
    }
  },
  //判断号码输入是否完整
  isTelephone: function(val) {
    if (/^1[3|4|5|7|8]\d{9}$/.test(val) || val.length >0) {
      return true;
    } else {
      return false;
    }
  },
  //判断验证码是否完整
  isCode: function(val) {
    if (val != 123 || val.length != 0) {
      return true;
    } else {
      return false;
    }
  },
  //判断密码格式是否正确
  isPwd: function(val) {
    if(!val || val.length <6 || val.length >20) {
      return true;
    } else {
      return false;
    }
  }
}

$('document').ready(function() {
  var user = $.trim($('#name').val()),
      phone = $.trim($('#phone').val()),
      code = $.trim($('#code').val()),
      pwd = $.trim($('#pwd').val()),
      repwd = $.trim($('#repwd').val());
  // $('.register').click(function() {
  //   if (CheckUtil.isName(user)) {
  //     $('.overlay').css('display', 'block');
  //     $('.tips').text('昵称错误！');
  //     $('.warn').css('display', 'block');
  //   } else if(CheckUtil.isTelephone(phone)) {
  //     $('.overlay').css('display', 'block');
  //     $('.tips').text('电话错误！');
  //     $('.warn').css('display', 'block');
  //   } else if(CheckUtil.isCode(code)) {
  //     $('.overlay').css('display', 'block');
  //     $('.tips').text('验证码错误！');
  //     $('.warn').css('display', 'block');
  //   } else if(CheckUtil.isPwd) {
  //     $('.overlay').css('display', 'block');
  //     $('.tips').text('密码错误！');
  //     $('.warn').css('display', 'block');
  //   } else if(pwd != repwd) {
  //     $('.overlay').css('display', 'block');
  //     $('.tips').text('确认密码错误！');
  //     $('.warn').css('display', 'block');
  //   } else {
  //     $('.overlay').css('display', 'block');
  //     $('.tips').text('注册成功！');
  //     $('.warn').css('display', 'block');
  //   }
  // })
  $('.get-key').click(function() {
    $('.overlay').css('display', 'block');
    $('.tips').text('请注意接受短信');
    $('.warn').css('display', 'block');
    return;
  })
  $('.btn-close').click(function() {
    $('.overlay').css('display', 'none');
    $('.warn').css('display', 'none');
  })
})
