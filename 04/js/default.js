$(function() {
  // sub1-2 체크인&체크아웃 선택
  $('.check_in_day').on('click', function() {
    $('.check_in').text("2.17(수)");
    $(this).css('background', '#dc074a').css('color', '#fff');
    $(this).children().css('color', '#fff');
    $('.txt01 div').addClass('on');
    $('.btn01').text("체크아웃 날짜를 선택해주세요");
  });
  $('.check_out_day').on('click', function() {
    $('.check_out').text("2.18(목)");
    $(this).css('background', '#dc074a').css('color', '#fff');
    $(this).children().css('color', '#fff');
    $('.btn01').text("1박 선택 완료").css('color', '#fff').css('background', '#dc074a');
  });
  // 하단 menu bar
  $('.bar li').on('click', function() {
    var idx = $(this).index();
    console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });
  // sub1-5 예약자와 투숙자 다를경우 checkbox
  $('.check01 .txt06 input[type="checkbox"]').on('click', function() {
    var checked = $(this).is(":checked");
    if (checked) {
      $('.check02').css('display', 'block');
    } else {
      $('.check02').css('display', 'none');
    }
  });
  // sub1-5 결제수단
  $('.benefit ul li button').on('click', function() {
    $(this).parent().addClass('on').css('background', '#fdf1f1');
    $(this).parent().siblings().removeClass('on').css('background', 'none');
  });
  // sub1-5 동의사항
  $('.agree_info input[type="checkbox"]').on('click', function() {
    var checked = $(this).is(":checked");
    if (checked) {
      $('.agree_info_detail').css('display', 'block');
      $('.agree_info .txt06').addClass('on');
    } else {
      $('.agree_info_detail').css('display', 'none');
      $('.agree_info .txt06').removeClass('on');
    }
  });
  // sub1-5 결제하기 누를 시 팝업창
  $('.final_payment').on('click', function() {
    var wid = $(window).width();
    $('.pop').addClass('on').show();
    $('.dim').show();
  });
  $('.pop .close, .dim').on('click', function() {
    $('.pop').removeClass('on').hide();
    $('.dim').hide();
  });
  // 더보기
  var show_more = $('.info_wrap,.amenities_wrap ');
  $('.box .info, .amenities_more').on('click', function() {
    show_more.toggle();
  });
});

function pop_center(fname, wth, hgt) {
  var W = wth;
  var H = hgt;
  var X = screen.availWidth / 2 - W / 2;
  var Y = screen.availHeight / 2 - H / 2;
  var wname = fname.split(".")[0];
  while (wname.indexOf("/") != -1) {
    wname = wname.replace("/", "_");
  }
  newWin = window.open(fname, wname, "width=" + W + ",height=" + H + ",left=" + X + ",top=" + Y);
  newWin.focus();
}
