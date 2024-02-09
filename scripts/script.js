$(document).ready(function () {
    $(".section__team-slider").slick({
        // dots: true,
        slidesToShow: 3,
        arrows: true,
        // centerMode: true,
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

// $(document).ready(function () {
// 	$(".reviews__slider-block").slick({
// 		// dots: true,
// 		slidesToShow: 1,
// 		// centerMode: true,
// 		responsive: [
// 		{
// 			breakpoint: 1100,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 800,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 			},
// 	]
// 	});
// })