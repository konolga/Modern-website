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


/*==================================
            NAVIGATION
==================================*/
$(function () {
//on scroll event
$(window).scroll(function(){ 
if ($(this).scrollTop()<50){
//hide navigation bar
$("nav").removeClass("res-top-nav");
}else{
//show navigation bar
$("nav").addClass("res-top-nav");
}
});

});

//smoothscrollig
$(function(){
$("a.nav-link").click(function(event){
event.preventDefault();

//get /return id like #about, #work, #item etc.
let section = $(this).attr("href");

$('html, body').animate(
    {
        scrollTop: $(section).offset().top -67
    }, 1250, "easeInOutExpo"); //easy jquery
    });
});