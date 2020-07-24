$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(600,
        function() {
            $(this).parent().fadeOut(600);
            $("body").removeClass("overflow")
        });
})


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
            600: {
                items: 1,
                nav: false
            },
            1000: {
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
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            400: {
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
            1400: {
                items: 8,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })



    $('#best-sellers').owlCarousel({
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
            400: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 3,
                nav: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            },
            1400: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })


    $('.owl-carousel').owlCarousel({
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
            400: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 3,
                nav: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            },
            1400: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })


    $('.nav-tabs a').click(function() {
        $(this).tab('show');
    });

    $(".social button").click(function() {
        $(".small-list").toggleClass("display");
        $(".small-list").fadeToggle(600)
    });

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
});