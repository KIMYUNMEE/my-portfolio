$(function() {
  var swiper = new Swiper('.slide1', {
    pagination: {
      el: '.swiper-pagination.paging',
      type: 'fraction',
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  });
  var swiper1 = new Swiper('.slide2 , .slide3, .slide4, .slide5, .slide6, .slide7', {
    spaceBetween: 14,
    slidesPerView: 'auto'
  });


});
