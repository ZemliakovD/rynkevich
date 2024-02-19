$(function () {

  $(window).on('load pageshow', function () {
    $('body').removeClass("off");
    $('body').addClass("on");
  });
  $("a:not([href*=\\#])").click(function () {
    if (!$(this).attr('target')) {
      $('body').removeClass("on");
      $('body').addClass("off");
      let url = $(this).attr('href');
      window.setTimeout(function () {
        window.location.href = url;
      }, 400);
      return false;
    }
  });

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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>',
    asNavFor: '.slider-nav',
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
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          focusOnSelect: true,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          focusOnSelect: true,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $("#contacts").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });


   $(function() {
    $('div[youtube]').each(function() {
        $(this).wrap('<div class="youtube-wrap"></div>');
        let youtube = $(this).attr('youtube');
        let image = $(this).attr('poster');
        if (image) {
            $(this).html('<img alt="" src="'+ image +'" />');   
        } else {
            $(this).html('<img alt="" src="https://i.ytimg.com/vi/'+ youtube +'/sddefault.jpg" />'); 
        }
    }); 
    $('div[youtube]').click(function() {
        if (!$(this).hasClass('show')) {
            $(this).addClass('show');    
            $(this).append('<iframe src="https://www.youtube.com/embed/'+ $(this).attr('youtube') +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            $(this).children('img').fadeOut('slow');
        } 
    });
});

$('.page-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>'
});

});



