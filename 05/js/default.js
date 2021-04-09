$(function() {
  // menu_01
  $('.menu_01').on('click', function() {
    $('.hambuger').addClass('on');
    $('.bg_black').addClass('on');
    $('body').css('overflow', 'hidden');
    return false;
  });
  // menu_01 누른 후 닫기버튼 클릭시
  $('.close').on('click', function() {
    $(this).parents().removeClass('on');
    $('body').removeAttr('style');
    $('.bg_black').removeClass('on');
  });
  // 하단 bar메뉴
  $('.bar .go button').on('click', function() {
    $('.pop_up').stop().slideToggle();
    $('body').css('overflow', 'hidden');
    if ($('.bar .go button').hasClass('on')) {
      $(this).removeClass('on');
      $('.bg_black').removeClass('on');
    } else {
      $('.bar >li:nth-child(3)> button').addClass('on');
      $('.bg_black').addClass('on');
    }
  });
  // 팝업 인원 선택
  $('.btn_decrease01').click(function() {
    var stat = $('#number01').text();
    var num = parseInt(stat);
    num--;
    if (num <= -1) {
      num = 0;
      $('.seat_choose').css('background', '#b2b2b2');
    } else {
      $('.seat_choose').css('background', '#fe243d');
    }
    $('#number01').text(num);
  });
  $('.btn_decrease02').click(function() {
    var stat = $('#number02').text();
    var num = parseInt(stat);
    num--;
    if (num <= -1) {
      num = 0;
      $('.seat_choose').css('background', '#b2b2b2');
    } else {
      $('.seat_choose').css('background', '#fe243d');
    }
    $('#number02').text(num);
  });
  $('.btn_decrease03').click(function() {
    var stat = $('#number03').text();
    var num = parseInt(stat);
    if (num <= -1) {
      num = 0;
      $('.seat_choose').css('background', '#b2b2b2');
    } else {
      $('.seat_choose').css('background', '#fe243d');
    }
    $('#number03').text(num);
  });
  $('.btn_decrease04').click(function() {
    var stat = $('#number04').text();
    var num = parseInt(stat);
    if (num <= -1) {
      num = 0;
      $('.seat_choose').css('background', '#b2b2b2');
    } else {
      $('.seat_choose').css('background', '#fe243d');
    }
    $('#number04').text(num);
  });
  $('.btn_increase01').click(function() {
    $('.seat_choose').css('background', '#fe243d');
    var stat = $('#number01').text();
    var num = parseInt(stat);
    num++;
    if (num > 8) {
      alert('인원은 최대 8명까지 선택하실 수 있습니다.');
      num = 8;
    }
    $('#number01').text(num);
  });
  $('.btn_increase02').click(function() {
    $('.seat_choose').css('background', '#fe243d');
    var stat = $('#number02').text();
    var num = parseInt(stat);
    num++;
    if (num > 8) {
      alert('인원은 최대 8명까지 선택하실 수 있습니다.');
      num = 8;
    }
    $('#number02').text(num);
  });
  $('.btn_increase03').click(function() {
    $('.seat_choose').css('background', '#fe243d');
    var stat = $('#number03').text();
    var num = parseInt(stat);
    num++;
    if (num > 8) {
      alert('인원은 최대 8명까지 선택하실 수 있습니다.');
      num = 8;
    }
    $('#number03').text(num);
  });
  $('.btn_increase04').click(function() {
    $('.seat_choose').css('background', '#fe243d');
    var stat = $('#number04').text();
    var num = parseInt(stat);
    num++;
    if (num > 8) {
      alert('인원은 최대 8명까지 선택하실 수 있습니다.');
      num = 8;
    }
    $('#number04').text(num);
  });
// 좌석선택
  $('.pop_up .theater ul li').on('click', function() {
    $('.seat_choose').css('background', '#fe243d');
    var idx = $(this).index();
    var tab_con = $(this).parent().parent().siblings('.tab_content');
    console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.removeClass('on');
    tab_con.eq(idx).addClass('on');
  });
  $('.pop_up .reser li').on('click', function() {
    var idx = $(this).index();
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });
// 라디오버튼 체크시
  $('.pop_up .date_wrap .date li input[type="radio"]').on('click', function() {
    var checked = $(this).is(":checked");
    if (checked) {
      $(this).find('.hh').css('color', '#000');
    } else {}
  });
  $('.my01 button').on('click', function() {
    $(this).addClass('on');
  });
  $('.movieroom .seat_avail').on('click', function() {
    var idx = $(this).index();
    console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    if ($(this).hasClass('on')) {
      $(this).siblings('.seat_avail').css({
        'background': '#09364d',
        'font-size': '0'
      });
      $(this).parents('li').siblings('li').children('.seat_avail').css({
        'background': '#09364d',
        'font-size': '0'
      });
      $(this).css('background', '#fe243c');
      $(this).css('font-size', '.33rem');
      $('.movieroom .seat_detail .seat_avail').addClass('on2');
      $('.seat_choose02 .seat_choose03').css('background', '#414141');
      $('.seat_choose02 .seat_choose03').addClass('on');
    }
  });
  $('.pay_wrap .discount .point02 li').on('click', function() {
    var idx = $(this).index();
    var tab_con = $(this).parent().parent().siblings('.tab_content');
    console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.removeClass('on');
    tab_con.eq(idx).addClass('on');
  });
  $('.pay_wrap .pay_method ul li').on('click', function() {
    var idx = $(this).index();
    var tab_con = $(this).parent().parent().siblings('.tab_content');
    console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.removeClass('on');
    tab_con.eq(idx).addClass('on');
  });
  $('.agree02 button').on('click', function() {
    $(this).next().stop().slideToggle();
    $(this).parent().toggleClass('on');
  });
  $(".pay_wrap .agree02 button").on("click", "#chk1_4", function() {
    $(this).parents(".pay_wrap .agree02").find('input').prop("checked", $(this).is(":checked"));
  });
  // 체크박스 개별 선택
  $(".pay_wrap .agree02 ul li ").on("click", ".check_02", function() {
    var is_checked = true;
    $(".pay_wrap .agree02 ul li .check_02").each(function() {
      is_checked = is_checked && $(this).is(":checked");
    });
    $("#chk1_4").prop("checked", is_checked);
  });


  //1)처음에 find부분에 input이 되어있었는데 label을 설정했어야 했고  2) $(".popup3 .agree02 span  .ab ").each(function(){ 이부분에서 span을 작성안하고 popup3 .agree02 .ab 이렇게 써서 안됐꼬 3)그리고 index에서 input에 class아주고 label에 줬어서 안됀것이다 근데 왜 label에 주면 안되는거지? class를??
});
