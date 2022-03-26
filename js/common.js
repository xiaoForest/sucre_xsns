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
    const onSwiperver = (e) => {
        e.el.onmouseover = () => { //鼠标放上暂停轮播
            e.autoplay.stop();
        }
    }

    const onSwiperave = (e) => {
        e.el.onmouseleave = () => {
            e.autoplay.start();
        }
    }
    if ($('.noticeWrapper').length) {
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
        onSwiperver(noticeWrapper)
        onSwiperave(noticeWrapper)
    }

    if ($('.hotNewsSwiper').length) {
        var hotNewsSwiper = new Swiper('.hotNewsSwiper', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiperButtonNext',
                prevEl: '.swiperButtonPrev',
            },
        })
        onSwiperver(hotNewsSwiper)
        onSwiperave(hotNewsSwiper)

    }

    if ($('.schoolListSwiper').length) {
        var schoolListSwiper = new Swiper('.schoolListSwiper', {
            slidesPerView: 6,
            spaceBetween: 0,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 500,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                993: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
            }
        })
        onSwiperver(schoolListSwiper)
        onSwiperave(schoolListSwiper)
    }

    if ($('.cdSwiper').length) {
        var cdSwiper = new Swiper('.cdSwiper', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        })
        onSwiperver(cdSwiper)
        onSwiperave(cdSwiper)

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

                if ($(document).scrollTop() > ($('.footerWrap   ').offset().top - $(window).height() - 250)) {
                    $("#hotNews").css("opacity", 0);
                } else {
                    $("#hotNews").css("opacity", 1);
                }
            }


        })
    }

    function switchTab(option) {
        this.oTab_btn = this.getDom(option.tabBtn);
        this.oTab_clist = this.getDom(option.tabCon);
        if (!this.oTab_btn || !this.oTab_clist) return;
        this.sCur = option.cur;
        this.type = option.type || 'click';
        this.nLen = this.oTab_btn.length;
        this.int();
    }
    switchTab.prototype = {
        getId: function (id) {
            return document.getElementById(id);
        },
        getByClassName: function (className, parent) {
            var elem = [],
                node = parent != undefined && parent.nodeType == 1 ? parent.getElementsByTagName('*') : document.getElementsByTagName('*'),
                p = new RegExp("(^|\\s)" + className + "(\\s|$)");
            for (var n = 0, i = node.length; n < i; n++) {
                if (p.test(node[n].className)) {
                    elem.push(node[n]);
                }
            }
            return elem;
        },
        getDom: function (s) {
            var nodeName = s.split(' '),
                p = this.getId(nodeName[0].slice(1)),
                c = this.getByClassName(nodeName[1].slice(1), p);
            if (!p || c.length == 0) return null;
            return c;
        },
        change: function () {
            var cur = new RegExp(this.sCur, 'g');
            for (var n = 0; n < this.nLen; n++) {
                this.oTab_clist[n].style.display = 'none';
                this.oTab_clist[n].className = 'boxes tabcon'
                this.oTab_btn[n].className = this.oTab_btn[n].className.replace(cur, '');
            }
        },
        int: function () {
            var that = this;
            this.oTab_btn[0].className += ' ' + this.sCur;
            this.oTab_clist[0].style.display = 'block';

            for (var n = 0; n < this.nLen; n++) {
                this.oTab_btn[n].index = n;
                this.oTab_btn[n]['on' + this.type] = function () {
                    that.change();
                    that.oTab_btn[this.index].className += ' ' + that.sCur;
                    that.oTab_clist[this.index].style.display = 'block';
                    setTimeout(() => {
                        that.oTab_clist[this.index].className = 'boxes tabcon show'
                    }, 100)

                }
            }
        }
    }

    new switchTab({
        'tabBtn': '#cdTabsBox .tabnav',
        'tabCon': '#cdTabsBox .tabcon',
        'cur': 'active'
    });

    $('.backop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    })

    jQuery.divselect = function (divselectid, inputselectid) {
        var inputselect = $(inputselectid);
        $(divselectid + " cite").click(function () {
            var ul = $(divselectid + " ul");
            if (ul.css("display") == "none") {
                ul.slideDown("fast");
            } else {
                ul.slideUp("fast");
            }
        });
        $(divselectid + " ul li a").click(function () {
            var txt = $(this).text();
            $(divselectid + " cite").html(txt);
            var value = $(this).attr("selectid");
            inputselect.val(value);
            $(divselectid + " ul").hide();

        });
    };
    $.divselect("#divselect", "#inputselect");
    $.divselect("#currentLocation", "#inputCc");
    $.divselect("#intentionArea", "#inputIa");
    $.divselect("#yearsWorking", "#inputYw");
    $.divselect("#educationalBackground", "#inputEb");
    $.divselect("#qualifications", "#inputQ");
    $.divselect("#EnglishLevel", "#inputEl");
})