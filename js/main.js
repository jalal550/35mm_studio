!function (t) {
    "use strict";
    t("#spinner").addClass("show"), t(window).on("load", function () {
        t("#spinner").removeClass("show")
    }), new WOW().init(), t(window).scroll(function () {
        t(this).scrollTop() > 300 ? t(".back-to-top").fadeIn("slow") : t(".back-to-top").fadeOut("slow")
    }), t(".back-to-top").click(function () {
        return t("html, body").animate({scrollTop: 0}, 5e3, "easeInOutExpo"), !1
    }), t(".team-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        center: !1,
        dots: !1,
        loop: !0,
        margin: 50,
        nav: !0,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 3}}
    }), t(".review-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1500,
        center: !0,
        dots: !0,
        loop: !0,
        margin: 0,
        nav: !0,
        navText: !0,
        responsiveClass: !0,
        responsive: {0: {items: 1}, 576: {items: 1}, 768: {items: 2}, 992: {items: 3}}
    }), t(document).ready(function () {
        function e(t) {
            var e = t.getBoundingClientRect();
            return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
        }

        function n() {
            t(".counter-value").each(function () {
                t(this).prop("Counter", 0).animate({Counter: t(this).text()}, {
                    duration: 2500,
                    easing: "easeInQuad",
                    step: function (e) {
                        t(this).text(Math.ceil(e))
                    }
                })
            })
        }

        e(t(".counter-section")[0]) && n(), t(window).on("scroll", function () {
            e(t(".counter-section")[0]) && (n(), t(window).off("scroll"))
        })
    })
}(jQuery);