$(function () {
    'use strict';
    //    slider
    $('#slider1').bxSlider({
        mode: 'vertical',
        controls: false
    });
    
    $('.features-section__item-wr:first-child').fadeIn();
    $('.features-filter__item').on('click', function () {
        $(this).addClass('features-filter__item--active')
            .siblings()
            .removeClass('features-filter__item--active');

        $('.features-section__item-wr').eq($(this).index())
            .fadeIn()
            .siblings()
            .hide();
    });
    
    $('.team-gallery__container:first-child').fadeIn();
    $('.team-filter__item').on('click', function () {
        $(this).addClass('team-filter__item--active')
            .siblings()
            .removeClass('team-filter__item--active');

        $('.team-gallery__container').eq($(this).index())
            .fadeIn()
            .siblings()
            .hide();
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
                galleryItems.filter('.gallery__item--' + dataClass).fadeIn();
            } else galleryItems.fadeIn();
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