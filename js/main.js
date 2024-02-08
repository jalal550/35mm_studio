(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();
    
    
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


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel
    //
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });






    $(document).ready(function(){
        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to start the counter animation
        function startCounterAnimation() {
            $('.counter-value').each(function(){
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                },{
                    duration: 2500,
                    easing: 'easeInQuad',
                    step: function (now){
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

        // Check if the section is in the viewport on page load
        if (isElementInViewport($('.counter-section')[0])) {
            startCounterAnimation();
        }

        // Check if the section is in the viewport on scroll
        $(window).on('scroll', function() {
            if (isElementInViewport($('.counter-section')[0])) {
                startCounterAnimation();
                // Unbind the scroll event to prevent multiple executions
                $(window).off('scroll');
            }
        });
    });





     // Fact Counter

    //  $(document).ready(function(){
    //     $('.counter-value').each(function(){
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         },{
    //             duration: 2500,
    //             easing: 'easeInQuad',
    //             step: function (now){
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // });



})(jQuery);

