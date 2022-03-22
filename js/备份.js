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

    function backAndForthActive(me) {
        $(me).addClass("active").siblings().removeClass('active');
    }

    function navHiddenState() {
        $("#pcNav li").removeClass("active")
        $('#pcSubMen .tabs').removeClass("active")
    }

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


        } else {
            // PC
            let hover = false;
            let headHover = true
            $("#pcNav li").mouseover(function () {
                headHover = true
                if (headHover == true) {
                    $('#btnSearch').removeClass('show')
                    $('.searchWrap').removeClass('show')
                    backAndForthActive(this)
                    let num = $(this).index()
                    $('#pcSubMen .tabs').eq(num).addClass("active").siblings().removeClass('active');

                    if ($(this).hasClass("have")) {
                        $('.header').addClass('show')
                    } else {
                        $('.header').removeClass('show')
                        $(this).removeClass("active")
                    }
                }
            }).mouseleave(function () {
                headHover = false
                setTimeout(() => {
                    if (headHover == false) {
                        $("#pcNav li").removeClass('active')
                        navHiddenState()
                        hover = false
                    }
                }, 300)
            })
            $('.subMenuWrap .tabs').mouseenter(() => {
                hover = false
                headHover = true
            }).mouseleave(() => {
                if (hover == false) {
                    console.log('鼠标移开')
                    navHiddenState()
                    hover = false
                    headHover = false
                }
            })

            $('.subList li').hover(function () {
                backAndForthActive(this)
            })

            $('#btnSearch').on('click', function () {
                $(this).toggleClass('show')
                $('.searchWrap').toggleClass('show')
                $('.header').removeClass('show')
                $('#pcSubMen .tabs').removeClass("active")
            })
        }
    }
    pcHeader()
    $(window).resize(function () {
        pcHeader()
    })
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

    var thumbnailSwiper = new Swiper(".thumbnailSwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            "@0.00": {
                slidesPerView: 5,
                spaceBetween: 3,
            },
            "@0.75": {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            "@1.00": {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            "@1.50": {
                slidesPerView: 6,
                spaceBetween: 10,
            },
        },
    });
    var thumbnailSwiper2 = new Swiper(".thumbnailSwiper2", {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbnailSwiper,
        },
    });

    var pressTxtSwiper = null
    var pressImgSwiper = null
    pressTxtSwiper = new Swiper('.pressTxtSwiper', {
        effect: 'fade',
        loop: false,

    })

    pressImgSwiper = new Swiper('.pressImgSwiper', {
        loop: false,
        pagination: {
            el: '.swiperPagination',
            type: 'bullets',
            clickable: true,
        },
        controller: {
            control: pressTxtSwiper,
        }
    })

    if ($(".swiperApplication .items").length == 3) {
        $('.swiperApplication .swiperButtonNext').hide()
        $('.swiperApplication .swiperButtonPrev').hide()
    }
    var swiperApplication = new Swiper(".swiperApplication", {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper

        navigation: {
            nextEl: '.swiperButtonNext',
            prevEl: '.swiperButtonPrev',
        },
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            "@1.00": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "@1.50": {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });


    var newCancultureSwiperImg = null
    var newCancultureSwiper = null
    newCancultureSwiperImg = new Swiper('.newCancultureSwiperImg', {
        effect: 'fade',
        loop: false,

    })

    newCancultureSwiper = new Swiper('.newCancultureSwiper', {
        effect: 'fade',
        pagination: {
            el: '.swiperNewCanCulture',
            type: 'fraction',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiperButtonNext',
            prevEl: '.swiperButtonPrev',
        },
        controller: {
            control: newCancultureSwiperImg,
        }
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
        'tabBtn': '#solutionTab .tabnav',
        'tabCon': '#solutionTab .tabcon',
        'cur': 'active'
    });


    new switchTab({
        'tabBtn': '#newsTab .tabnav',
        'tabCon': '#newsTab .tabcon',
        'cur': 'active'
    });

    new switchTab({
        'tabBtn': '#coreTab .tabnav',
        'tabCon': '#coreTab .tabcon',
        'cur': 'active'
    });


    new switchTab({
        'tabBtn': '#scTab .tabnav',
        'tabCon': '#scTab .tabcon',
        'cur': 'active'
    });




    if ($(".mSolutionBox").length) {
        $(".mSolutionBox .tabs").click(function () {
            if ($(this).next(".con").css("display") == "block") {
                $(".mSolutionBox .con").slideUp(300);
                $(this).parents().removeClass("active");
            } else {
                $(".mSolutionBox .con").slideUp(300);
                $(this).next(".con").slideDown(300);
                $(this).parents().addClass("active").siblings().removeClass('active');
            }
        });
    }

    function contactInit() {
        var _para, _img, lnglat = [],
            x, y;
        _para = $('.aboutContactBgImg .tab-tit .item').eq(0).attr('data-para');
        _img = $('.aboutContactBgImg .tab-tit .item').eq(0).attr('data-ewm');
        lnglat = $('.aboutContactBgImg .tab-tit .item').eq(0).attr('data-lnglat');
        x = $('.aboutContactBgImg .tab-tit .item').eq(0).attr('x');
        y = $('.aboutContactBgImg .tab-tit .item').eq(0).attr('y');
        var map = new AMap.Map('map', {
            resizeEnable: true,
            scrollWheel: false,
            zoom: 17,
            center: [x, y],
            mapStyle: 'amap://styles/whitesmoke',
        });
        // var infoWindow = new AMap.InfoWindow({
        //     anchor: 'bottom-center',
        //     content: '<div class="map-cont"><div class="img-box cell-box"><img src="images/foot-logo.png" alt="" class="cell" /></div><div class="txt"></div></div>',
        //     offset: new AMap.Pixel(-14, -30)
        // });
        // infoWindow.open(map,[116.435671,39.934705])
        openInfo(_para, _img);
        var marker = new AMap.Marker({
            icon: 'images/contact/map.png',
            size: new AMap.Size(28, 35),
            offset: new AMap.Pixel(-28, -20),
            position: map.getCenter(),
            draggable: false,
            cursor: 'pointer'
        });
        marker.setMap(map);
        marker.on('click', function () {
            infoWindow.open(map, map.getCenter());
        });

        function openInfo(para, ewm) {
            //构建信息窗体中显示的内容
            var info = [];
            info.push(
                '<div class="map-cont"><div class="img-box cell-box"><img src="images/foot-logo.png" alt="" class="cell" /></div><div class="txt">' + para + '</div></div>');
            infoWindow = new AMap.InfoWindow({
                content: info.join(""),
                offset: new AMap.Pixel(-14, -40)
            });
            infoWindow.setAnchor('bottom-center')
            infoWindow.open(map, map.getCenter());
        }
        $('.aboutContactBgImg .tab-tit .item').click(function () {
            _para = $(this).attr('data-para');
            _img = $(this).attr('data-ewm');
            lnglat = $(this).attr('data-lnglat');
            x = $(this).attr('x');
            y = $(this).attr('y');
            AMap.plugin('AMap.Geocoder', function () {

                var geocoder = new AMap.Geocoder({
                    city: '全国'
                })
                geocoder.getAddress(lnglat, function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        console.log(status, result)
                        // console.log(result.regeocode.formattedAddress)
                        marker.setPosition(new AMap.LngLat(x, y));
                        map.setFitView(marker);
                        openInfo(_para, _img);
                    }
                    marker.setPosition(new AMap.LngLat(x, y));
                    map.setFitView(marker);
                    openInfo(_para, _img);
                })
            })
            $('.aboutContactBgImg .tab-tit .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
        })



    }

    $('.contact-page').length && contactInit();

    $('.count').length && $('.count').countUp();
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
})