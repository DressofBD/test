
$('#carousel1').owlCarousel({
    autoplay:false,
    dots: false,
    // mouseDrag: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            margin:10,
        },
        600:{
            items:2,
            margin:10,
        },
        992:{
            items:3,
            margin:30,
        },
        1300:{
            items:3,
            margin:30,
        }
    }
});