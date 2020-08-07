(function (jQuery) {
  "use strict"

  // mobile_menu
  var menu = jQuery('ul#navigation');
  if (menu.length) {
    menu.slicknav({
      prependTo: '.mobile_menu',
      label : 'MENU',
      closedSymbol: '&#x25B2;',
      openedSymbol: '&#x25BC;',
      closedSymbol: '▾',
      openedSymbol: '▴',
    });
  };

  // /* 7.  Custom Sticky Menu  */
  // jQuery(window).on('scroll', function () {
  //   var scroll = jQuery(window).scrollTop();
  //   if (scroll < 245) {
  //     jQuery(".header-sticky").removeClass("sticky-bar");
  //   } else {
  //     jQuery(".header-sticky").addClass("sticky-bar");
  //   }
  // });

  // jQuery(window).on('scroll', function () {
  //   var scroll = jQuery(window).scrollTop();
  //   if (scroll < 245) {
  //     jQuery(".header-sticky").removeClass("sticky");
  //   } else {
  //     jQuery(".header-sticky").addClass("sticky");
  //   }
  // });

  /* 8. sildeBar scroll */
  jQuery.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-level-up-alt"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  /* 9. data-background */
  jQuery("[data-background]").each(function () {
    jQuery(this).css("background-image", "url(" + jQuery(this).attr("data-background") + ")")
  });


  /* 10. WOW active */
  new WOW().init();

  /* ----------------- Other Inner page Start ------------------ */

  // menu fixed js code
  jQuery(window).scroll(function () {
    var window_top = jQuery(window).scrollTop() + 1;
    if (window_top > 50) {
      jQuery('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      jQuery('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  // jQuery('.counter').counterUp({
  //   time: 2000
  // });

  // Search Toggle
  jQuery("#search_input_box").hide();
  jQuery("#search_1").on("click", function () {
    jQuery("#search_input_box").slideToggle();
    jQuery("#search_input").focus();
  });
  jQuery("#close_search").on("click", function (e) {
    e.preventDefault();
    jQuery('#search_input_box').slideUp(500);
  });
  /* ----------------- Other Inner page End ------------------ */

  // Modal Activation
  jQuery('.search-switch').on('click', function (e) {
    e.preventDefault();
    jQuery('.search-model-box').fadeIn(400);
  });

  jQuery('.search-close-btn').on('click', function (e) {
    e.preventDefault();
    jQuery('.search-model-box').fadeOut(400, function () {
      jQuery('#search-input').val('');
    });
  });

  jQuery('.sa-carousel').owlCarousel({
    items: 1,
    autoWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
  });

  var sync1 = jQuery("#carousel-1");
    var sync2 = jQuery("#carousel-2");
    var slidesPerPage = 5; 
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        responsive : {
            768 : {
                items : 2,
            }
        },
        slideSpeed: 2000,
        nav: false,
        dots: false,
        autoWidth: true,
        loop: true,
        responsiveRefreshRate: 200,
        onChanged: syncPosition,
    });

    sync2.owlCarousel({
        items: 7,
        margin: 8,
        dots: false,
        nav: false,
        autoWidth: true,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100,
        onInitialized: function() {
            sync2.find(".owl-item").eq(0).addClass("synced");
        },
        onChanged: syncPosition2
    });

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //end block
        
        sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
        sync2.trigger('to.owl.carousel', [current, 100, true]);
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.trigger('to.owl.carousel', [number, 100, true]);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = jQuery(this).index();
        sync1.trigger('to.owl.carousel', [number, 100, true]);
    });

    jQuery('.btn-app').hover(function () {
        jQuery('.btn-app img').attr('src', './assets/img/long-arrow-right.svg')
      }, function () {
        jQuery('.btn-app img').attr('src', './assets/img/long-arrow-right-white.svg')
      }
    );

    jQuery('.btn-app').focus(function () {
      var src = jQuery('.btn-app img').attr('src') = './assets/img/long-arrow-right.svg' ? './assets/img/long-arrow-right-white.svg' : './assets/img/long-arrow-right.svg';
      jQuery('.btn-app img').attr('src', src);
    }
    
  );
    
})(jQuery);