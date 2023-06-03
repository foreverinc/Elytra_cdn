(function ($) {
    "use strict";

	

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-gray shadow');
            } else {
                $('.fixed-top').removeClass('bg-gray shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-gray shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-gray shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
		autoplay: false,
		smartSpeed: 1000,
		center: true,
		dots: false,
		loop: true,
		nav: true,
		navText: [
			'<i class="fa-solid  fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
		},
	});

    
})(jQuery);



