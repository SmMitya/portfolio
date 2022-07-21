$(function(){

  $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
      $(".header__top").addClass('header__top--blue'); 
    } else {
      $(".header__top").removeClass('header__top--blue'); 
    }
  }).trigger("scroll");

  $('.header a, .footer a').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.menu__btn').on('click', function (){
    $('body').toggleClass('hidden')
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu a').on('click', function (){
    $('body').removeClass('hidden')
    $('.menu__list').removeClass('menu__list--active');
    $('.menu__btn').removeClass('menu__btn--active');
  });

  $('.testimonial__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev" style="display: none;"></button>',
    nextArrow: '<button type="button" class="slick-next" style="display: none;"></button>',
    adaptiveHeight: true,
  });

  var mixer = mixitup('.portfolio__gallery');
});

