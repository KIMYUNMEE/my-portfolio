$(function(){
  // gnb
var show_ui = $('nav > ul , .dim')
var gnb = $('nav > ul')
var nav_wrap = $('.dim')

show_ui.on('mouseenter focusin' , function(){
    gnb.find('ul').show();
    nav_wrap.show();
    $('header').css('background','#fff');
});
show_ui.on('mouseleave' , function(){
    gnb.find('ul').hide();
    nav_wrap.hide();
$('header').css('background','none');
});
});
