$(function(){

   $('.slider__inner').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: true,
     autoplay:false,
     asNavFor: '.nav__slider'
   });
   $('.nav__slider').slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     asNavFor: '.slider__inner',
     dots: false,
     arrows: false,
     focusOnSelect: true,
     variableWidth: true,
       responsive: [
         {
           breakpoint: 961,
           settings: {
             slidesToShow: 5,
           }
         },
       ]
   });
     $('.header__menu-btn').on('click', function () {
       $('.header__menu > ul').slideToggle();
     });

   $('.slider__blog-inner').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: true,
     autoplay: false
   });

  $('.slider__text-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: false,
    dots:true
  });
  var mixer = mixitup('.portfolio__inner-box');
});