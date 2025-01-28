var heroSlider = new Swiper(".heroSlider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".heroSliderNext",
    prevEl: ".heroSliderPrev",
  },

});

var mainSlider = new Swiper(".mainSlider", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev",
  },

  breakpoints: {

    0: {
      slidesPerView: 1,
    },

  
    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    }
  }

});


var circleBoxSlider = new Swiper(".circleBoxSlider", {
  slidesPerView: 8,
  spaceBetween: 12,
  freeMode: {
  
  },
  navigation: {
    nextEl: ".circleBoxSliderNext",
    prevEl: ".circleBoxSliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },

    480: {
      slidesPerView: 4.5,
      spaceBetween: 15,
    },

    640: {
      slidesPerView: 6.5,
    },
    992: {
      slidesPerView: 8,
    }
  }
});


var circleBoxSlider2 = new Swiper(".circleBoxSlider2", {
  slidesPerView: 8,
  spaceBetween: 24,
  freeMode: {
  
  },
  navigation: {
    nextEl: ".circleBoxSlider2Next",
    prevEl: ".circleBoxSlider2Prev",
  },
  breakpoints: {

    0: {
      slidesPerView: 3.5,
       
    },

    480: {
      slidesPerView: 4.5,
     
    },

    640: {
      slidesPerView: 6.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 24,
    }
  }
});




var campaignsSlider = new Swiper(".campaignsSlider", {
  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: ".cSliderNext",
    prevEl: ".cSliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});


var packageSlider = new Swiper(".packageSlider", {
  slidesPerView: 3,
  spaceBetween: 24,
  
  navigation: {
    nextEl: ".pSliderNext",
    prevEl: ".pSliderPrev",

  },
  breakpoints: {

    0: {
      

      slidesPerView: 'auto',
      spaceBetween: 18,
      centeredSlides: true,
      preventClicks:true,
      loop:true, 

    },

    480: {
      

      slidesPerView: 'auto',
      spaceBetween: 18,
      centeredSlides: true,
      preventClicks:true,
      loop:true, 

    },

    640: {
      slidesPerView: 2,

  

    },
    992: {
      slidesPerView: 3,
    }
  }
});

var introducingSlider = new Swiper(".introducingSlider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var newProductsSlider = new Swiper(".newProductsSlider", {
  slidesPerView: 4,
  spaceBetween: 100,
  freeMode: true,
  navigation: {
    nextEl: ".nSliderNext",
    prevEl: ".nSliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 2.5,
    },

    480: {
      slidesPerView: 2.5,
    },

    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 80,
    }
  }
});

var bookSlider1 = new Swiper(".bookSlider1", {
  slidesPerView: 4,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".bsNext1",
    prevEl: ".bsPrev1",
  },
  breakpoints: {

    0: {
      slidesPerView: 2.5,
    },

    480: {
      slidesPerView: 2.5,
    },

    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});


var bookSlider2 = new Swiper(".bookSlider2", {
  slidesPerView: 4,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".bsNext2",
    prevEl: ".bsPrev2",
  },
  breakpoints: {

    0: {
      slidesPerView: 2.5,
    },

    480: {
      slidesPerView: 2.5,
    },

    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});


var bookSlider3 = new Swiper(".bookSlider3", {
  slidesPerView: 4,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".bsNext3",
    prevEl: ".bsPrev3",
  },
  breakpoints: {

    0: {
      slidesPerView: 2.5,
    },

    480: {
      slidesPerView: 2.5,
    },

    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});


var bookSlider3 = new Swiper(".bookSlider4", {
  slidesPerView: 4,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".bsNext4",
    prevEl: ".bsPrev4",
  },
  breakpoints: {

    0: {
      slidesPerView: 2.5,
    },

    480: {
      slidesPerView: 2.5,
    },

    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});


var haberSlider = new Swiper(".haberSlider", {
  slidesPerView: 4,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".nSliderNext",
    prevEl: ".nSliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    }
  }
});



var newsSlider = new Swiper(".newsSlider", {
  slidesPerView: 3,
  spaceBetween: 24,
  
  navigation: {
    nextEl: ".nSliderNext",
    prevEl: ".nSliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 1.16,
      spaceBetween: 16,
    },

    480: {
      slidesPerView: 1.16,
      spaceBetween: 16,
    },

    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});


var blogSlider = new Swiper(".blogSlider", {
  slidesPerView: 2,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".blogSlideNext",
    prevEl: ".blogSlidePrev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {

    0: {
      slidesPerView: 1.16,
    },

    480: {
      slidesPerView: 1.16,
    },

    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    }
  }
});


var studentCommentsSlider = new Swiper(".studentCommentsSlider", {
  slidesPerView: 3,
  spaceBetween: 33,
  freeMode: true,
  navigation: {
    nextEl: ".scSliderNext",
    prevEl: ".scSliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 1.16,
      spaceBetween: 16,
    },

    480: {
      slidesPerView: 1.16,
      spaceBetween: 16,
    },

    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});

var youtubeVideosSlider = new Swiper(".youtubeVideosSlider", {
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".ytSliderNext",
    prevEl: ".ytSliderPrev",
  },
 
  breakpoints: {

    0: {
      slidesPerView: 1.16,
      spaceBetween: 16,
     
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    992: {
      slidesPerView: 3,
    }
  }
});


var lessonProgramsSlider = new Swiper(".lessonProgramsSlider", {
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
  navigation: {
    nextEl: ".sliderNext",
    prevEl: ".sliderPrev",
  },
  breakpoints: {

    0: {
      slidesPerView: 1.5,
    },

    480: {
      slidesPerView: 1.5,
    },

    640: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    }
  }
});


/* Mobile Hamburger Menu Config */
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});


/* Play Button - Trigger Modal Video */
$(document).ready(function () {
  $('.youtubeVideo').click(function () {
    var video = $(this).attr('data-bs-src');
    var video_title = $(this).attr('data-bs-title');

    

    $('.videoModal')
      .on('shown.bs.modal', function () {
        $('#video').attr('src', video + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
        $('#videoModalTitle').text(video_title);
      })
      .modal('show');

    $('.videoModal')
      .on('hide.bs.modal', function () {
        $('#video').attr('src', video);
      })
      .modal('show');
  });
});


/* Mega Menu Config */
if ($(window).width() >= 991) {
  $('#mainMenu .nav-item').hover(function () {
    $(this).children('.dropdown-menu.mega-menu').addClass('showSubMenu');
    $(this).addClass('active');
  }, function () {
    $(this).children('.dropdown-menu.mega-menu').removeClass('showSubMenu');//hover off
    $(this).removeClass('active');
  });
}
else {
  $('#mainMenu .nav-item').click(function () {
    $(this).children('.dropdown-menu.mega-menu').toggleClass('showMobileSubMenu');
    $(this).children('.dropdown-menu.mega-menu').toggle();

    $('#mainMenu .nav-item').removeClass('active');
    $(this).addClass('active');
  });
}






/* Product Detail Image Sticky */
$(window).scroll(function () {
  var scroll_top = $(this).scrollTop();
  if (scroll_top > 800) {//height of header
    // $('.mainHeader').addClass('sticky');
    $('.productDetail .productImg').addClass('stickyContent');
  } else {
    // $('.mainHeader').removeClass('sticky');
    $('.productDetail .productImg').removeClass('stickyContent');
  }
});


/* AOS Animate Activate */
// AOS.init({
//   disable: function() {
//     let maxWidth = 991;
//     return window.innerWidth < maxWidth;
//   }
// });



/* Back To Top Button */
let backToTop = $('#backToTop');
$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    backToTop.addClass('show');
  } else {
    backToTop.removeClass('show');
  }
});

backToTop.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});



/* Sidebar Show & Hide */
$(".sidebarProductFilterItems").each(function () {
  var $maxHeight = 400;

  if ($(this).height() + 40 > $maxHeight) {

    $(this).addClass('filterItemsHeightConfig');
  }
});



/* Search Filter */
var $targets = $('.withFiltered .form-check');
$('.filter-lesson-input').on('input', function () {
  $targets.show();

  var text = $(this).val().toLowerCase();
  if (text) {
    $targets.filter(':visible').each(function () {
      var $target = $(this);
      var $matches = 0;
      $target.find('span').add($target).each(function () {
        if ($(this).text().toLowerCase().indexOf("" + text + "") !== -1) {
          $matches++;
        }
      });
      if ($matches === 0) {
        $target.hide();
      }
    });
  }

});




/* Custom Dropdown */
$('.select-dropdown__button').on('click', function () {
  $(this).parent().children('.select-dropdown__list').toggleClass('active');
});
$('.select-dropdown__list-item').on('click', function () {
  var itemValue = $(this).data('value');
  $(this).parent().parent().children('.select-dropdown__button').text($(this).text()).parent().attr('data-value', itemValue)
  $(this).parent().parent().children('.select-dropdown__list').toggleClass('active');
});
$(document).click(function () {
  $('.select-dropdown__list').removeClass('active');
});

$(".select-dropdown__button").click(function (e) {
  e.stopPropagation();
});



/* Product Detail Colon Switch Config */
$('.view-button-3').click(function () {
  $('.view-button-3').addClass('active');
  $('.view-button-4').removeClass('active');
  $('.productContain').addClass('col-lg-4');
  $('.productContain').removeClass('col-lg-3');
});

$('.view-button-4').click(function () {
  $('.view-button-4').addClass('active');
  $('.view-button-3').removeClass('active');

  $('.productContain').removeClass('col-lg-4');
  $('.productContain').addClass('col-lg-3');
});



/* Mini Cart Show & Hide */
$('.miniCartClose').click(function () {
  $('.miniCart').removeClass('miniCartActive');
  $('.miniCart').addClass('miniCartDeactive');
});

$('.addToCart').click(function () {
  $('.miniCart').addClass('miniCartActive');
  $('.miniCart').removeClass('miniCartDeactive');


 


//   $('.productAddToCartInfo').addClass('showAddToCartAlert');


//   setTimeout(function() { 
//     $('.productAddToCartInfo').removeClass('showAddToCartAlert');
// }, 2000);


});



/* Login & Register Buton Tabs Config */
$('#registerBtn').click(function () {
  $('.loginRegisterTabs').hide();
  $('.confirmEmail').show();

});

$('#backToRegister').click(function () {
  $('.loginRegisterTabs').show();
  $('.confirmEmail').hide();

});

$('.registerBtn').click(function () {
  $('#pills-register-tab').addClass("active");
  $('#pills-login-tab').removeClass("active");

  $('#pills-login').removeClass("active");
  $('#pills-login').removeClass("show");

  $('#pills-register').addClass("active");
  $('#pills-register').addClass("show");
});

$('.loginBtn').click(function () {
  $('#pills-register-tab').removeClass("active");
  $('#pills-login-tab').addClass("active");

  $('#pills-login').addClass("active");
  $('#pills-login').addClass("show");

  $('#pills-register').removeClass("active");
  $('#pills-register').removeClass("show");
});





/* Password Input Show & Hide */
$(".passwordToggle").click(function () {

  $('i', this).toggleClass("bi-eye bi-eye-slash");

  if ($(this).siblings('input').attr('type') == "password") {
    $(this).siblings('input').attr("type", "text");
  } else {
    $(this).siblings('input').attr("type", "password");
  }
});


var swiper = new Swiper(".whyUsSlider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
});



const html = document.querySelector('html');
function switchTheme(theme) {
  html.dataset.theme = `theme-${theme}`;
}


 
$(".notification .close").click(function () {
  $(".notification").fadeOut("normal", function() {
    $(this).remove();
});
});




/* Mobile Menu  */



(function($) {

  // Reverse
  // =============================================
  $.fn.reverse = [].reverse;

  // jQuery Extended Family Selectors
  // =============================================
  $.fn.cousins = function(filter) {
    return $(this).parent().siblings().children(filter);
  };

  $.fn.piblings = function(filter) {
    return $(this).parent().siblings(filter);
  };

  $.fn.niblings = function(filter) {
    return $(this).siblings().children(filter);
  };

  // Update
  // =============================================
  $.fn.update = function() {
    return $(this);
  };

  // Dropdown
  // =============================================
  $.fn.dropdown = function(options) {

    // Store object
    var $this = $(this);

    // Settings
    var settings = $.extend({
      className : 'toggled',
    }, options);

    // Simplify variable names
    var className = settings.className;

    // List selectors
    var $ul = $this.find('ul'),
        $li = $this.find('li'),
        $a  = $this.find('a');

    // Menu selectors
    var $drawers = $a.next($ul),      // All unordered lists after anchors are drawers
        $buttons = $drawers.prev($a), // All anchors previous to drawers are buttons
        $links   = $a.not($buttons);  // All anchors that are not buttons are links

    // Toggle menu on-click
    $buttons.on('click', function() {
      var $button = $(this),
          $drawer = $button.next($drawers),
          $piblingDrawers = $button.piblings($drawers);

      // Toggle button and drawer
      $button.toggleClass(className);
      $drawer.toggleClass(className).css('height', '');

      // Reset children
      $drawer.find($buttons).removeClass(className);
      $drawer.find($drawers).removeClass(className).css('height', '');

      // Reset cousins
      $piblingDrawers.find($buttons).removeClass(className);
      $piblingDrawers.find($drawers).removeClass(className).css('height', '');

      // Animate height auto
      $drawers.update().reverse().each(function() {
        var $drawer = $(this);
        if($drawer.hasClass(className)) {
          var $clone = $drawer.clone().css('display', 'none').appendTo($drawer.parent()),
              height = $clone.css('height', 'auto').height() + 'px';
          $clone.remove();
          $drawer.css('height', '').css('height', height);
        }
        else {
          $drawer.css('height', '');
        }
      });
    });

    // Close menu
    function closeMenu() {
      $buttons.removeClass(className);
      $drawers.removeClass(className).css('height', '');
    }

    // Close menu after link is clicked
    $links.click(function() {
      closeMenu();
    });

    // Close menu when off-click and focus-in
    $(document).on('click focusin', function(event) {
      // if(!$(event.target).closest($buttons.parent()).length) {
      //   closeMenu();
      // }
    });
  };
})(jQuery);

$('#mobileMenuContent').dropdown();

$('#mobileHeroNav').dropdown();




$(".fixedSidebar .show-all-item").click(function () {
  $(".fixedSidebar .box").toggleClass("showFixedSidebarItem");

 
});



var back_top = $('.back-top');
var fixed_sidebar = $('.fixedSidebar');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    back_top.addClass('show');
    fixed_sidebar.addClass('show');
  } else {
    back_top.removeClass('show');
    fixed_sidebar.removeClass('show');
  }
});



back_top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





$(".mobileSidebarTrigger").click(function () {
  $(".blogSidebar").slideToggle();
 
   

  $(".sidebarMenuMobile").show();
  $(".bg-soft-black").show();
  $(".mobileSidebarClose").show();

  $("form input").addClass('form-color-config');
  $("form select").addClass('form-color-config');
   
});

$(".mobileSidebarClose").click(function () {
  $(".blogSidebar").slideToggle();
 
  $(this).toggle();
  $(".sidebarMenuMobile").hide();
  $(".bg-soft-black").hide();
  $(".mobileSidebarClose").hide();
   
});
 
 



$(".faq .accordion-item").click(function () {
  $('.faq .accordion-item').removeClass('active-accordion');
  $(this).addClass('active-accordion');
});
