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

    function changeHeader() {

        let $mainMenuState = $('#srkMainMenuState');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function (e) {
                let $menu = $('#srkMainMenuJs');
                if (this.checked) {
                    $menu.hide().slideDown(250, function () {
                        // $menu.css('display', '');
                    });
                } else {
                    $menu.show().slideUp(250, function () {
                        // $menu.css('display', '');
                    });
                }
            });
        }

        $(window).scroll(function () {
            let headerTop = $('.headerTopWrapper').outerHeight(true)
            let scrollTop = $(window).scrollTop();
            if (scrollTop < headerTop) {
                $('.headerNavWrapper').removeClass('pft')
            } else {
                $('.headerNavWrapper').addClass('pft')
            }
        })

    }
    changeHeader()
    $(window).resize(function () {
        changeHeader()
    })
    let hover = false;
    let headHover = true

    if ($(window).width() > 767) {
        $('.srkMainMenu li').mouseover(function () {
            headHover = true
            $(this).addClass('on').siblings().removeClass('on');
        }).mouseleave(function () {
            headHover = false
            setTimeout(() => {
                if (headHover == false) {
                    $('.srkMainMenu li').removeClass('on')
                    hover = false
                }
            }, 300)
        })
    } else {
        $('.srkMainMenu li').on('click', 'a', function (evt) {
            evt.preventDefault();
            let $saCon = $(this).next('.srkASubmenus')
            if (!$saCon.hasClass('active')) {
                $saCon.hide().slideDown(250, function () {
                });
                $saCon.addClass('active')
            } else {
                $saCon.show().slideUp(250, function () {
                });
                $saCon.removeClass('active')
            }

        })
    }

    $('.srkFooterMore').on('click', function () {
        $(this).toggleClass('show')
    })



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


    }


    // $(window).resize(function () {

    // });


    var preTop = 0;
    var currTop = 0;
    if ($('.floatingNavGlobal').length) {
        var mlNav = $('.fnTop'); // navDIV
        $(window).scroll(function () {
            currTop = $(window).scrollTop();
            if ($(window).scrollTop() < 400) {
                mlNav.fadeOut(200);

            } else if ($(window).scrollTop() > 400) {
                mlNav.fadeIn(500);
            }
            preTop = $(window).scrollTop();
        });
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

    // new switchTab({
    //     'tabBtn': '#cdTabsBox .tabnav',
    //     'tabCon': '#cdTabsBox .tabcon',
    //     'cur': 'active'
    // });
})