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
    function pcHeader() {
        if ($(window).width() < 1199) {
            $(".mMmenuLay dl").each(function (i) {
                var _this = $(this);
                if (_this.find("dd").size() > 0) {
                    _this.find(".mToggle").show();
                }
            });
            $(".mToggle").click(function (e) {
                e.stopPropagation();
                var _this2 = $(this);
                if (_this2.parents("dl").hasClass("on")) {
                    _this2.parents("dl").removeClass("on");
                    _this2.removeClass("mToggle2");

                    _this2.parents("dl").find(".mToggle_a").removeClass("mToggle2_a");
                    _this2.parents("dl").find(".mMenu_dd3").slideUp(300);

                } else {
                    $(".mMmenuLay dl").removeClass("on");
                    $(".mToggle").removeClass("mToggle2");
                    _this2.addClass("mToggle2");
                    _this2.parents("dl").addClass("on");

                    $(".mToggle_a").removeClass("mToggle2_a");
                    $(".mMenu_dd3").slideUp(300);

                }
            });

            $(".mToggle_a").click(function (event) {
                event.stopPropagation();
                var _this3 = $(this);
                _this3.toggleClass("mToggle2_a");
                _this3.parents("dd").next(".mMenu_dd3").slideToggle(300);
            });

            $(".mOpenBtn").click(function (e) {
                $(".mMenuLayBg,.mMmenuLay,.mCloseBtn").addClass("on");
                $("body").css("overflow", "hidden");
            });
            $(".mCloseBtn,.mMenuLayBg").click(function () {
                $(".mMenuLayBg,.mMmenuLay,.mCloseBtn").removeClass("on");
                $("body").css("overflow", "inherit");
            });
            //搜素
            $(".topSerBtn").click(function () {
                $(".serBg,.serLayer").fadeIn(500);
                $(".serClose").removeClass("on");
            });
            $(".serClose").click(function () {
                $(".serBg,.serLayer").fadeOut(500);
                $(".serClose").addClass("on");
            });


        }
    }
    pcHeader()
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
    var noticeWrapper = new Swiper(".noticeWrapper", {
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            993: {
                slidesPerView: 1,
                spaceBetween: 0
            },
        }
    });
    noticeWrapper.el.onmouseover = function () { //鼠标放上暂停轮播
        noticeWrapper.autoplay.stop();
    }
    noticeWrapper.el.onmouseleave = function () {
        noticeWrapper.autoplay.start();
    }

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


            if ($(document).scrollTop() > ($('.footTop').offset().top - $(window).height() - 250)) {
                $("#hotNews").css("opacity", 0);
            } else {
                $("#hotNews").css("opacity", 1);
            }
        })
    }

})