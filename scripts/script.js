$(document).ready(function () {
    $(".section__team-slider").slick({
        // dots: true,
        slidesToShow: 3,
        arrows: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});


new Swiper('.section__reviews-slider', {
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
loop: true,
});