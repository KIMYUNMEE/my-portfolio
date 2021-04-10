$(function(){

  var user = navigator.userAgent;

  console.log(user);

  if(user.match(/iphone | ipad/gi)){
    $('head').append('<link rel="stylesheet" href="css/ios.css">');
  }else if(user.match(/JRO03C/gi)) {
    $('head').append('<link rel="stylesheet" href="css/aa.css">');
  }







// 헤더가 고정이다. >>  posiiton fixed









});

















//
