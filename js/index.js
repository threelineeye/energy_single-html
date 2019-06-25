// $(document).ready(function(){
// $()ready(function(){
$(function () {
  // js working
  // js working
  // navbar
  // 鼠标移入
  $("#nab-btn").mouseenter(function () {
    $("#navbarSupportedContent").addClass("show")
  })
  // 鼠标移出
  $("#navbarSupportedContent").mouseleave(() => {
    $("#navbarSupportedContent").removeClass("show")
  })
  // 选中 active 标题
  $("#navbar-nav").click((e) => {
    $(e.target).parent().siblings().removeClass("active")
    // $(e.target).parent().addClass("active")
  })

  // carousal service slider
  // measure中arrows 
  $(document).on('ready', function () {
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });

  // carousal 
  // responsiveslides banner
  /* // You can also use "$(window).load(function() {" */
  $(function () {
    // Slideshow 4
    $("#slider4").responsiveSlides({
      auto: true,
      pager: true,
      nav: false,
      speed: 900,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });

  });

  // responsiveslides banner
  // About OnScroll-Number-Increase-JavaScript 
  $('.counter').countUp();

  // OnScroll-Number-Increase-JavaScript 
  // clients FlexSlider-JavaScript 
  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function (slider) {
        $('body').removeClass('loading');
      }
    });
  });

  // clients FlexSlider-JavaScript 
  // gallery-lightbox 
  $(window).load(function () {
    $.fn.lightspeedBox();
  });

  // gallery-lightbox
  // start-smoth-scrolling
  jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 900);
    });
  });

  // start-smoth-scrolling 
  // here stars scrolling icon 
  $(document).ready(function () {
    var defaults = {
      containerID: 'toTop', // fading element id
      containerHoverID: 'toTopHover', // fading element hover id
      scrollSpeed: 1200,
      easingType: 'linear'
    };

    $().UItoTop({
      easingType: 'easeOutQuart'
    });

  });
  // here ends scrolling icon 
  // bootstrap working
  // bootstrap working
})