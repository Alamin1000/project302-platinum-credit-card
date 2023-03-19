(function ($) {
  "use strict";

  // offcanvas-js
  $(".sidebar__toggler").click(function () {
    $("body").addClass("sidebar-active");
  });
  $(".offcanvas-menu a:not(.dont-close)").click(function () {
    $("body").removeClass("sidebar-active");
  });
  $(".close-offcanvas").click(function () {
    $("body").removeClass("sidebar-active");
  });
  $(document).mouseup(function (e) {
    var container = $(".main__sidebar");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $("body").removeClass("sidebar-active");
    }
  });

  // owl-carousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  $(".password-field-toggler").click(function () {
    $(this).toggleClass("open");
    $(this).find("i").toggleClass("fa-eye fa-eye-slash");
    var thisInput = $(this).siblings("input");
    if (thisInput.attr("type") == "password") {
      $(thisInput).attr("type", "text");
    } else {
      $(thisInput).attr("type", "password");
    }
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});
