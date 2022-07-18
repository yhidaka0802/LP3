'use strict';

$(document).ready(function(){
  let window = $(this).width();
  let bp = 768;
  if(window > bp){
    $(".navnar").show();
  }
})

$('.drawer1').click(function(){
  $(this).toggleClass('active');
  $('header').toggleClass('active');
  // $('.header_top').fadeIn(1000);
});

function fadeIn(){
  $('.fadeUpTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('fadeUp');
    }else{
      $(this).removeClass('fadeUp');
    }
  });

  $('.rotateYTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('rotateY');
    }else{
      $(this).removeClass('rotateY');
    }
  });

  $('.fripLeftTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if(scroll >= triTop - winHeight){
      $(this).addClass('fripLeft');
    }else{
      $(this).removeClass('fripLeft');
    }
  });
}

$(window).scroll(function(){
  fadeIn();
});

$('.title').on('click', function(){
  $('.box').slideUp(500);
  
  let findElm = $(this).next(".box");

  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(findElm).slideDown(500);    
  }
})

$('#js-nav a').on('click', function(){
  let hrefElement = $(this).attr('href');
  let headerHeight = $('.header_top').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});

const loadAnime = $('.load_animation');
$(window).on('load', function(){
  loadAnime.delay(2000).fadeOut(1000);
  loadAnime.delay(500).fadeOut(500,function(){
    $('body').addClass('appear');
  });
});

function stopload(){
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);
