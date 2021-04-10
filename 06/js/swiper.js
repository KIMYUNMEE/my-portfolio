$(function () {
  // visual left notice
  var notice_1swiper = new Swiper('.notice .left .swiper-container',{
 direction: 'vertical',
 navigation:{
   nextEl: '.notice .left .btn_next'
 },

 loop:true,
 autoplay:{
   delay:4000,
   disableOnInteraction:false
 },
});
  // visual right notice
var notice_2swiper = new Swiper('.notice .right .swiper-container',{
 direction: 'vertical',
 navigation:{
   nextEl: '.notice .right .btn_next'
 },
 loop:true,
 autoplay:{
   delay:4000,
   disableOnInteraction:false
 },
});
// association paging
var ban_swiper = new Swiper('.association .swiper-container',{
  pagination:{
    el:'.association .paging',
    clickable: true,

  },
  loop: true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false
  }
});

// association ad paging stop&play
$('.association  .ad .btn_stop').on('click', function(){
  if( $('.association  .ad .btn_stop').hasClass('play') ){
    ban_swiper.autoplay.start();
    $(this).removeClass('play');

    // return;
  }else{
    ban_swiper.autoplay.stop();
    $(this).addClass('play');

  }
});
// slide2
  var swiper2 = new Swiper('.slide2', {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      disableOnInteraction: false,
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1279: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },

    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });

});
