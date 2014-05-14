$(function () {
    'use strict';
    //    slider
    $('#slider1').bxSlider({
        mode: 'vertical',
        controls: false
    });
    $('#slider2').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 390,
        useCss: true,
        controls: false
    });
    $('#slider3').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 270,
        slideMargin: 30,
        useCss: true,
        controls: false
    });
    //    filter
    $('.filter__item').on('click', function (e) {
        e.preventDefault();
        var activeClass = 'filter__item--active';
        if (!$(this).hasClass(activeClass)) {
            $(this).addClass(activeClass)
                .siblings()
                .removeClass(activeClass);
            var dataClass = $(this).data('class');
            var galleryItems = $('.gallery__item');
            if (dataClass != 'all') {
                galleryItems.hide();
                galleryItems.filter('.gallery__item--' + dataClass).show();
            } else galleryItems.show();
        }
    });
    //    nav
    $('.nav__item').on('click', function () {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });
});