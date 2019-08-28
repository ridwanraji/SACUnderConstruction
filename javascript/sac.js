(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sacNav',
        offset: 100
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($(".sac-nav").offset().top > 100) {
            $(".sac-nav").addClass("navbar-shrink");
        } else {
            $(".sac-nav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // $(document).ready(function(){

    //     var checkScrollBar = function(){
    //       $('.sac-nav').css({
    //         backgroundColor: $(this).scrollTop() > 1 ?
    //           'rgb(0, 0, 0)' : 'transparent'
    //       })
    //     }
    //     $(window).on('load resize scroll', checkScrollBar)
    //     });

})(jQuery); // End of use strict