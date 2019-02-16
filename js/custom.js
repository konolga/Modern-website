/*==================================
            SERVICES
==================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});

/*==================================
            WORK
==================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*==================================
            TEAM
==================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==================================
            TESTIMONIALS
==================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==================================
            STATISTICS
==================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

});
