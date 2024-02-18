$(function(){

    $('.banners-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>'
      });


      $('.services-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


});