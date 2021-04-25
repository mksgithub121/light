$(document).ready(function () {
    var fixHeight = function () {
        $('.navbar-nav').css(
            'max-height',
            document.documentElement.clientHeight - 150
        );
    };
    fixHeight();
    $(window).resize(function () {
        fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function () {
        fixHeight();
    });
    $('.navbar-toggler').on('click', function () {
        $('.mobileMenu').toggleClass('open');
        $("body").toggleClass("scrollHidden");
    });
    $(" .src_btn").on("click", function () {
        $(".search_wrapper").toggleClass("search_active");
    });
    $(" .cart_btn").on("click", function () {
        $(".cart_full").toggleClass("cart_active");
    });
});