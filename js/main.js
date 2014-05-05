$(function () {
    $('#slider1').bxSlider({
        mode: 'vertical',
        responsive: false,
        controls: false
    });
    $('#slider2').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 390,
        useCss: true,
        responsive: false,
        controls: false
    });
    $('#slider3').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 270,
        slideMargin: 30,
        useCss: true,
        responsive: false,
        controls: false
    });
});