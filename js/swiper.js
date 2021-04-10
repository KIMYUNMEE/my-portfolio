
// 전체 슬라이드
$(function() {
  var swiper = new Swiper('.slide1', {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    direction: 'vertical',
    navigation: {
      prevEl: '.btn_up',
      nextEl: '.btn_down',
    },
    pagination: {
      el: '.main-menu',
      clickable: true,
    },
  });
      // portfolio
      var swiper2 = new Swiper('.slide2', {
        navigation: {
          nextEl: '.btn_next01,.btn_next02',
          prevEl: '.btn_prev01,.btn_prev02',
        },
        pagination: {
          el: '.paging02',
          clickable: true,
        }
      });
    // portfolio 작업물
  var menu = ['동국제강', '교원라이프','건국대학병원', '데일리호텔','롯데시네마','생명보험협회','연습과제']
  var swiper3 = new Swiper('.slide3', {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    navigation: {
      prevEl: '.btn_pj_prev',
      nextEl: '.btn_pj_next'
    },
    pagination: {
      el: '.paging03',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    on:{
slideChangeTransitionEnd: function(){
  var size =$('.size1,.size2,.size3');
if(this.activeIndex == 0 || this.activeIndex == 0){
   $(".pj_01").show();
   $(".pj_01_page").show();
   $(".pj_01").siblings().hide();
   $(".pj_01_page").siblings().hide();
   $(".size3").show();
   $(".size3").siblings().hide();

}
else if(this.activeIndex == 1 || this.activeIndex == 0){
  $(".pj_02").show();
  $(".pj_02_page").show();
  $(".pj_02").siblings().hide();
  $(".pj_02_page").siblings().hide();
  $(".size3").show();
  $(".size3").siblings().hide();
}
else if(this.activeIndex == 2 || this.activeIndex == 0){
  $(".pj_03").show();
  $(".pj_03_page").show();
  $(".pj_03").siblings().hide();
  $(".pj_03_page").siblings().hide();
  $(".size3").show();
  $(".size3").siblings().hide();
}
else if(this.activeIndex == 3 || this.activeIndex == 0){
  $(".pj_04").show();
  $(".pj_04_page").show();
  $(".pj_04").siblings().hide();
  $(".pj_04_page").siblings().hide();
  $(".size3").hide();
  $(".size1").show();
}
else if(this.activeIndex == 4 || this.activeIndex == 0){
  $(".pj_05").show();
  $(".pj_05_page").show();
  $(".pj_05").siblings().hide();
  $(".pj_05_page").siblings().hide();
  $(".size3").hide();
  $(".size1").show();
}
else if(this.activeIndex == 5 || this.activeIndex == 0){
  $(".pj_06").show();
  $(".pj_06_page").show();
  $(".pj_06").siblings().hide();
  $(".pj_06_page").siblings().hide();
  size.show();
}
else if(this.activeIndex == 6 || this.activeIndex == 0){
  $(".pj_07").show();
  $(".pj_07_page").show();
  $(".pj_07").siblings().hide();
  $(".pj_07_page").siblings().hide();
  $(".p_list").show();
size.hide();
}

console.log(this.activeIndex);
},
},
  });
  });
