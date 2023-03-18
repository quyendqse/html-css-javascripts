$(document).ready(function(){
    $('.all-service-items').slick({
        slidesToShow: 4 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false,
       
    });
  });
 
  $('.background7').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

  });