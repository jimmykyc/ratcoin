$(".menu-drop").click(function () {
  $("section.menu-sec").addClass("show-menu");
  $("body").css("overflow", "hidden");
  $("body").css("paddingRight", "15px");
});
$("img.close").click(function () {
  $("section.menu-sec").removeClass("show-menu");
  $("body").css("overflow", "auto");
  $("body").css("paddingRight", "0");
});

const breakpoint = window.matchMedia("(min-width:1199px)");

let swiperVariable1;
let swiperVariable2;

const enableSwiper = function () {
  swiperVariable1 = new Swiper(".madeSlider", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 0,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slideNext",
      prevEl: ".slidePrev",
    },
  });
  swiperVariable2 = new Swiper(".date_slider", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slideNext2",
      prevEl: ".slidePrev2",
    },
  });
};

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (swiperVariable1 !== undefined) swiperVariable1.destroy(true, true);
    if (swiperVariable2 !== undefined) swiperVariable2.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

/* advisor slider */
var swiper = new Swiper(".advisor-wrap", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1399: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Animation
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});