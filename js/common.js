jQuery(document).ready(function ($) {
    animateImg();

    function animateImg() {
        // var wow = new WOW({
        //     mobile: false,
        //     live: true
        // });
        // wow.init();
        // http://michalsnik.github.io/aos/
        AOS.init({
            disable: 'mobile',
            // easing: 'ease-out-back',
            duration: 1000
        });
    }

    //导航
 
    // $(window).resize(function () {
 
    // })
    // https://swiperjs.com/swiper-api#autoplay
    var Swiper1 = new Swiper('.swiper-homeBanner', {
        effect: 'fade', // cards
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiperHomePagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiperButtonNext',
            prevEl: '.swiperButtonPrev',
        },
    })

    var num = 0
    if ($('#hotNews').length) {
        $(window).resize(function () {
            num = $('#hotNews').offset().left
        });
        $(window).scroll(function () {
            num = $('#hotNews').offset().left
            var win = $(window).scrollTop();
            $('.flex-b').each(function () {
                var fis = $(this).offset().top;
                if ($(window).width() < 1025) {
                    var tt = ($(window).scrollTop() - $(this).offset().top) / 8;
                    $(this).find('.flex-pic').stop().animate({
                        top: tt
                    }, 0);
                } else {
                    var tt = ($(window).scrollTop() - $(this).offset().top) / 4.5;
                    $(this).find('.flex-pic').stop().animate({
                        top: tt
                    }, 0);
                }

            })
            if ($(window).width() > 993) {
                if ($('.scroll-top').length > 0) {
                    var top = $('.scroll-top').offset().top;
                } else {
                    var top = 100
                }

                if (win > top) {
                    $('.product-none').show();
                    $('.product-nav').addClass('fex').stop().animate({
                        top: 0
                    }, 300);

                    // $('#hotNews').offset().left
                    $('#hotNews').css('left', num)
                } else {
                    $('.product-none').hide();
                    $('.product-nav').removeClass('fex').removeAttr('style');
                }
            }


            if ($(document).scrollTop() > ($('.footTop').offset().top - $(window).height()-250)) {
                $("#hotNews").css("opacity", 0);
            } else {
                $("#hotNews").css("opacity", 1);
            }
        })
    }

})