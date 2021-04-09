$(function() {
  // gnb
  var show_ui = $('.gnb,.dim');
  var lnb_ul = $('header nav > ul > li > ul');
  var dim = $('.dim');
  show_ui.on('mouseenter focusin', function() {
    $('.fixheader ').addClass('on');
    $('.fixheader nav > .gnb > li > a').css('color', '#000');
    lnb_ul.css('display', 'block');
    dim.stop().slideDown(300).css('opacity', '1');
  });
  show_ui.on('mouseleave', function() {
    $('.fixheader').removeClass('on');
    $('.fixheader fixed nav .gnb li a').css('color', '#000');
    $('.fixheader nav > .gnb > li > a').css('color', '#fff');
    $('.fixheader.fixed nav > .gnb > li > a').css('color', '#000');
    ui_hide();
  });
  $('header .lnb_bottom ul li a').on('focusout', function() {
    ui_hide();

  });
  function ui_hide() {
    lnb_ul.css('display', 'none');
    dim.stop().slideUp(300).css('opacity', '.6');
  }
  //scroll fixed 시 header
  $(window).on('scroll', function() { // 사용자가 스크롤을 내렸을때
    var scroll = $(this).scrollTop();
    console.log(scroll);
    if (scroll > 400) { // 특정 구간이 되면
      $('.fixheader').addClass('fixed')
      $('.fixheader nav .gnb > li > a').css('color', '#000');
      $('header .util .btn_lanugage').css('color', '#000');
    } else if (scroll < 80) {
      $('.fixheader').removeClass('fixed')
      $('.fixheader nav .gnb > li > a').css('color', '#fff');
      $('header .util .btn_lanugage').css('color', '#fff');
    }
  });
  // sub6_1 더보기
  $('.btn_view').on('click', function() {
    $('.news_detail_wrap').show();
  });
  //tab
  $('.tabs .tab_nav li').on('click', function() {
    var idx = $(this).index();
    var tab_con = $(this).parent().parent().siblings('.tab_content');
    console.log(idx);
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.removeClass('on');
    tab_con.eq(idx).addClass('on');
  });
});
