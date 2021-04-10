$(function() {
      // portfolio detailview
      $('.close').on('click', function() {
        $(this).parents().removeClass('on');
        $('body').removeAttr('style');
      });
      // portfolio btn_more
      $('.btn_more').on('click focusin', function() {
        $('.color').addClass('on');
        $('.project_wrap').addClass('on');
        $('.btn_more').css('opacity', '0');
        $('.btn_close01').css('opacity', '1');
        $('.btn1.view01').hide();
        $('.btn1').addClass('on');
        $('.btn_wr').addClass('on');
        $('.btn_prev01,.btn_next01').hide();
        $('.cross').addClass('on');
        $('.btn_prev02').css('opacity', '1');
        $('.btn_next02').css('opacity', '1');
        $('.paging02.swiper-pagination-clickable.swiper-pagination-bullets').addClass('on');
        return false;
      });
      $('.btn_close01').on('click focusout', function() {
        $('.color').removeClass('on');
        $('.project_wrap').removeClass('on');
        $('.btn_more').css('opacity', '1');
        $('.btn1.view01').show();
        $('.btn1').removeClass('on');
        $('.btn_close01').css('opacity', '0');
        $('.cross').removeClass('on')
        $('.btn_prev01,.btn_next01').show();
        $('.btn_wr').removeClass('on');
        $('.btn_prev02').css('opacity', '0');
        $('.btn_next02').css('opacity', '0');
        $('.paging02.swiper-pagination-clickable.swiper-pagination-bullets').removeClass('on');
        return false;
      });
      // portfolio detailview click
      $('.gnb li').on('mouseenter focusin', function() {
        $(this).children('div').stop().slideDown(500);
        $(this).addClass('active');
      });
      $('.gnb li').on('mouseleave focusout', function() {
        $(this).children('div').stop().slideUp(300);
        $(this).removeClass('active');
      });
        // portfolio list
        $('.list').on('click', function() {
          $('.popup2').addClass('on').show();
          $('.dim').show();
          $('iframe').css('width', '1290px');
        });
        $('.popup2 .close, .dim').on('click', function() {
          $('.popup2').removeClass('on').hide();
          $('.dim').hide();
          $('body').removeAttr('style');
        });
        // portfolio 작업물
        var tab01 = $('.tab .tab_1 li');
        tab01.on('click', function() {
          var idx = $(this).index();
          var tab_con = $(this).parent().parent().siblings('.tab_content');
          console.log(idx);
          $(this).addClass('on');
          $(this).siblings().removeClass('on');
          tab_con.removeClass('on');
          tab_con.eq(idx).addClass('on');
        });
        $(document).ready(function() {
          $('.size_wrap button').on('click', function() {
            var $frame = $('.frame')
            if ($(this).hasClass('size1')) {
              $frame.animate({
                width: 400
              });
            } else if ($(this).hasClass('size2')) {
              $frame.animate({
                width: 1260
              });
            } else if ($(this).hasClass('size3')) {
              $frame.animate({
                width: 1500
              });
            }
          });
        // 연습과제 list
        $('.p_list > ul > li:nth-child(1) > button').on('click', function() {
          $('iframe').attr('src', '06/table.html');
        });
        $('.p_list > ul > li:nth-child(2) > button').on('click', function() {
          $('iframe').attr('src', '06/form.html');
        });
        $('.p_list > ul > li:nth-child(3) > button').on('click', function() {
          $('iframe').attr('src', '06/list.html');
        });
        $(document).ready(function() {
          $('.p_wrap').addClass('on');
          return false;
        });
        // accessibility
        $('.bg1').on('click', function() {
          $('.popup1').addClass('on').show();
          $('.dim').show();

          $('iframe').css('width', '1205px');
        });

        $('.popup1 .close, .dim').on('click', function() {
          $('.popup1').removeClass('on').hide();
          $('.dim').hide();
          $('body').removeAttr('style');
        });
        // contact img
        $('.dim01').on('mouseenter', function() {
          $('.dim01').css('opacity', '.7');
          $('.txt02').css('opacity', '1');
        });
        $('.dim01').on('mouseleave', function() {
          $('.dim01').css('opacity', '0');
          $('.txt02').css('opacity', '0');
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
      });
      });
