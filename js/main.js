$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(600,
        function() {
            $(this).parent().fadeOut(600);
            $("body").removeClass("overflow")
        });
})

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

$(document).ready(function() {
    $('#main-slider').owlCarousel({
        loop: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            500: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                loop: true
            },
            1490: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })

    $('#cat').owlCarousel({
        loop: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            500: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 5,
                nav: true,
                loop: true
            },
            1200: {
                items: 6,
                nav: true,
                dots: false,
                loop: true
            },
            1490: {
                items: 8,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })

    $('.best-sellers .owl-carousel').owlCarousel({
        loop: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            500: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            },
            1490: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })

    /*$('.nav-tabs a').click(function() {
        $(this).tab('show');
    });*/
    // This is to open & close menu in small screens
    $(".social .hidden-button").click(function() {
        $("body").addClass("overflow");
        $(".small-list").addClass("overflow");
        $(".small-list").addClass("display");
        $(".black-back-small").fadeIn(600);
    });
    $(".social .hidden-button").click(function() {
        $(".small-list").addClass("overflow");
        $(".small-list").fadeIn(600);
    });
    $(".black-back-small").click(function() {
        $("body").removeClass("overflow");
        $(".small-list").removeClass("overflow");
        $(".small-list").removeClass("display");
        $(".black-back-small").fadeOut(600);
    });
    $(".black-back-small").click(function() {
        $(".small-list").removeClass("overflow");
        $(".small-list").fadeOut(600);
    });
    //------------------------------------------------------------------------------------
    //this is to open Search in small screens
    $(".social .search-hidden").click(function() {
        $("body").addClass("overflow")
        $(".social .search-hidden").toggleClass("overflow");
        $(".small-search").fadeIn(600);
    });
    //this is to close Search in small screens
    $(".small-search .close").click(function() {
        $("body").removeClass("overflow")
        $(".small-search").fadeOut(600);
    });
    //-------------------------------------------------------------------------------------
    // This is To open user config in small screens side menu
    $(".user-config").click(function() {
        $(".user-config ul").toggleClass("display");
        $(".user-config ul").fadeToggle(600)
    });

    $(".lang").click(function() {
        $(".lang ul").toggleClass("display");
        $(".lang ul").fadeToggle(600)
    });

    $(".curr").click(function() {
        $(".curr ul").toggleClass("display");
        $(".curr ul").fadeToggle(600)
    });

    $(".shop-by").click(function() {
        $(".shop-by ul").toggleClass("display");
        $(".shop-by ul").fadeToggle(600)
    });

    $(".one h3").click(function() {
        $(".one .footer-links").slideToggle(600);
    });

    $(".two h3").click(function() {
        $(".two .footer-links").slideToggle(600);
    });

    $(".three h3").click(function() {
        $(".three .footer-links").slideToggle(600);
    });

    $(".four h3").click(function() {
        $(".four .footer-links").slideToggle(600);
    });

    // // clients Slider
    // [...document.querySelectorAll(".best-sellers .owl-carousel")].forEach(el => {
    //     $(el).owlCarousel({
    //         loop: true,
    //         navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    //         dots: true,
    //         margin: 10,
    //         responsiveClass: true,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //                 nav: false,
    //                 dots: true,
    //                 loop: true
    //             },
    //             400: {
    //                 items: 2,
    //                 nav: false,
    //                 dots: true,
    //                 loop: true
    //             },
    //             768: {
    //                 items: 2,
    //                 nav: false,
    //                 dots: true,
    //                 loop: true
    //             },
    //             992: {
    //                 items: 3,
    //                 nav: true,
    //                 loop: true
    //             },
    //             1200: {
    //                 items: 4,
    //                 nav: true,
    //                 dots: false,
    //                 loop: true
    //             },
    //             1400: {
    //                 items: 4,
    //                 nav: true,
    //                 dots: false,
    //                 loop: true
    //             }
    //         }
    //     });
    // });


    $(".mo-tabs a").on("shown.bs.tab", function(e) {
        let $owl = $(".best-sellers .owl-carousel");
        $owl.trigger('refresh.owl.carousel');
    });
});