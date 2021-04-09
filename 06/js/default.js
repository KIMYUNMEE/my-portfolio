$(function() {
  var ddd = $('#fullpage').fullpage({
    //메뉴연결
    //각 섹션 색상
anchors: ['section01', 'section02', 'section03', 'section04', 'section05', 'section06'],
    scrollBar: false, //스크롤바 출력 여부
    menu: '#menu', // 메뉴연결
    navigation: true, //블릿 출력 여부
    navigationPosition: 'right', //블릿 위치
    responsiveWidth: 1279,
    navigationTooltips: ['HOME', '생명보험협회', '소비자', '모집종사자', '회원사'], //블릿 툴팁
    normalScrollElements: '.over ', //특정요소 스크롤 가능하며 다중클래스로 추가 가능
    autoScrolling: true, //자동스크롤 되지않고 브라우저 스크롤로 제어하기
    scrollOverflow: false,// scrolloverflow.js가 필요하며 특정 구간을 보통 스크롤로 제어하기\
    fixedElements: '#up, #down, #top',
    afterLoad: function (anchorLink, index) {
      if (anchorLink == 'section01' || index == 0) {
        $('.visual .animate').css('animation-play-state', 'running');
      } else if (anchorLink == 'section02' || index == 1) {
        $('.association .animate').css('animation-play-state', 'running');
      } else if (anchorLink == 'section03' || index == 2) {
        $('.customer .animate').css('animation-play-state', 'running');
      } else if (anchorLink == 'section04' || index == 3) {
        $('.employee .animate').css('animation-play-state', 'running');
      } else {
        $('.member .animate').css('animation-play-state', 'running');
      }
    },

  });
  // sub의 snb
  $('.content .snb .list_type1 > li > button').on('click', function() {
    var siblings = $(this).parent().siblings();
    siblings.children('.dash').hide();
    siblings.children('button').removeClass('on');
    $(this).addClass('on');
    $(this).next().show();
  });
// list_type2 button
  $('.list_type2 > li button').on('click', function() {
    var siblings = $(this).parent().siblings();
    siblings.removeClass('on');
    $(this).parent().toggleClass('on');
    $(this).next().stop().slideToggle();
  });
  // list_type6 button
  $('.list_type6 > li button').on('click', function() {
    var siblings = $(this).parent().siblings();
    siblings.removeClass('on');
    $(this).parent().toggleClass('on');
    $(this).next().stop().slideToggle();
  });
// gnb_dep1 & lnb_dep2
  $('.gnb_dep1 > li > a').on('mouseenter focusin', function() {
    $(this).next().stop().slideDown(500);
    return false;
  });
  $('.gnb_dep1 > li > a').on('mouseleave focusout', function() {
    $(this).next().stop().slideUp();
    return false;
  });
  $('.lnb_dep2').on('mouseenter focusin', function() {
    $(this).stop().slideDown(500);
    return false;
  });
  $('.lnb_dep2').on('mouseleave focusout', function() {
    $(this).stop().slideUp();
    return false;
  });
// window 크기에 따른 버튼들 변화
  $(window).on('resize', function() {
    var width = window.innerWidth;
    if (width < 768) {
      $('#fp-nav').css('display', 'none');
      $('#up').css('display', 'none');
      $('#down').hide();
      $('#top').show();
    } else if (width < 1280) {
      $('#fp-nav').css('display', 'none');
      $('#up').css('display', 'none');
      $('#down').hide();
      $('#top').hide();
    } else {
      $('#fp-nav').css('display', 'block');
      $('#up').show();
      $('#down').show();
      $('#top').show();
    }
  });
  $('#top').on('click', function(){
      $('html').animate({
        scrollTop:0
      });
  });
  $('#down').on('click', function() {
    $.fn.fullpage.moveSectionDown();
  });
  $('#up').on('click', function() {
    $.fn.fullpage.moveSectionUp();
  });
  $('#top').on('click', function() {
    $.fn.fullpage.moveTo(1);
  });
  // index.html tab1 &tab 버튼
  $('.tab1 button').on('click', function () {
    var idx = $(this).index();
    var tab_wrap = $(this).parent().parent().siblings('.tab_wrap');
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_wrap.removeClass('on');
    tab_wrap.eq(idx).addClass('on');
  });
  $('.tab button').on('click', function() {
    var idx = $(this).parent().siblings().children();
    $(this).addClass('on');
    idx.removeClass('on');
  });
  // sub9 select
  $('.slect_wrap ul').hide();
  $('.slect_wrap .select.type01').on('click', function() {
    $(this).next().stop().slideToggle();
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
