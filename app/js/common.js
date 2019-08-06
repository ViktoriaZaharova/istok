$(function () {

    $('.city__wrapper span').click(function () {
        $(this).toggleClass('in');
        $('.drop__menu').fadeToggle();
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $('.news__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $('.brands__content-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    // $('.list__drop').click(function () {
    //     $('.drop__menu-catalog').fadeToggle().css('display', 'flex');
    // });

    $('#mobile__menu').click(function () {
        $('.menu').slideToggle();
    });


});



