$(function () {
    'use strict';
    //    slider
    if ($(window).width() > -1) $('#slider').bxSlider({
        mode: 'vertical',
        controls: false
    });
    //else $('.slider').hide();

    //    nav
    responsiveNav(".nav-collapse");
    $('.nav-toggle').html('<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');

    //    tabs
    function getTabs(tabItem, tabContent) {
        $('.' + tabContent + ':first-child').fadeIn();
        $('.' + tabItem).on('click', function () {
            $(this).addClass(tabItem + '--active')
                .siblings()
                .removeClass(tabItem + '--active');
            $('.' + tabContent).eq($(this).index())
                .fadeIn()
                .siblings()
                .hide();
        });
    }

    getTabs('features-filter__item', 'features-section__item-wr');
    getTabs('team-filter__item', 'team-gallery__container');

    //    filter
    $('.filter__item-link').on('click', function (e) {
        e.preventDefault();
        var activeClass = 'filter__item-link--active';
        if (!$(this).hasClass(activeClass)) {
            $('.filter__item-link').removeClass(activeClass);
            $(this).addClass(activeClass);
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