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
});
