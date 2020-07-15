$(function() {

    "use strict";

    var wind = $(window);
    var header = $('header');
    var range = 200;

    console.clear();


    /* Navbar
    -------------------------------------------------------*/
    var app = function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;

        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');

            applyListeners();
        };

        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function() {
                return toggleClass(body, 'nav-active');
            });
        };

        $('.nav__list-item').on("click", function() {
            $('body').removeClass('nav-active');
        });

        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };

        init();
    }();


    /* smooth scroll
    -------------------------------------------------------*/
    $.scrollIt({

        upKey: 40, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1500, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed

    });


    /* typejs
    -------------------------------------------------------*/
    $('.info h4 span').typed({
        strings: ["Cloud Engineer", "IT Engineer"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });


    /* Change Color Menu
    -------------------------------------------------------*/
    $('.bg-nav')
        .scrollie({
            direction: 'both',
            scrollOffset: 0,
            scrollRatio: 0,
            scrollingOutOfView: function(elem, offset, direction, coords, scrollRatio, thisTop, winPos) {

                var bgColor = elem.data('background');

                $('.menu-icon__line').css('background-color', bgColor);

            }
        });

    /* matchHeight
    -------------------------------------------------------*/
    $('.half').matchHeight({ property: 'min-height' });


    /* progress bar
    -------------------------------------------------------*/
    wind.on('scroll', function() {
        $(".skills-prog").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $('#bar1').barfiller({
                    // color of bar
                    barColor: '#323232',
                    // duration in ms
                    duration: 2000
                });

                $('#bar2').barfiller({
                    // color of bar
                    barColor: '#323232',
                    // duration in ms
                    duration: 2000
                });

                $('#bar3').barfiller({
                    // color of bar
                    barColor: '#323232',
                    // duration in ms
                    duration: 1600
                });

                $('#bar4').barfiller({
                    // color of bar
                    barColor: '#323232',
                    // duration in ms
                    duration: 1700
                });

                $('#bar5').barfiller({
                    // color of bar
                    barColor: '#323232'
                });

                $('#bar6').barfiller({
                    // color of bar
                    barColor: '#323232',
                    // duration in ms
                    duration: 1800
                });

                $('#bar7').barfiller({
                    // color of bar
                    barColor: '#323232',
                    // duration in ms
                    duration: 1800
                });

                $('#bar8').barfiller({
                    // color of bar
                    barColor: '#323232'
                });
            }
        });
    });




    /* number counter
    -------------------------------------------------------*/
    wind.on('scroll', function() {
        $(".counter").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                setTimeout(function() {
                    odometer.innerHTML = 730;
                }, 1500);

                setTimeout(function() {
                    projects.innerHTML = 347;
                }, 1500);


                setTimeout(function() {
                    customers.innerHTML = 622;
                }, 1500);


                setTimeout(function() {
                    awwards.innerHTML = 12;
                }, 1500);
            }
        });
    });
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop()

        if (bodyScroll > 1200) {

        }
    });


    /* owlCarousel Serives
    -------------------------------------------------------*/
    $('.services .owl-carousel').owlCarousel({

        items: 3,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
            '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'
        ],
        responsive: {
            0: {
                items: 1,
                loop: true,
            },
            676: {
                items: 2,
                nav: false,
                loop: true,
            },
            1000: {
                items: 3,
                loop: true,
            }
        }

    });


    /* slick
    -------------------------------------------------------*/
    $('.testimonel .carousel-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '5px',
                slidesToShow: 1
            }
        }]
    });


    /* magnificPopup
    -------------------------------------------------------*/
    $('.portfolio .link').magnificPopup({

        delegate: 'a',
        type: 'image'

    });


    /* stellar
    -------------------------------------------------------*/
    wind.stellar();


    /* sparallax
    -------------------------------------------------------*/
    $('.parallax').sparallax();


    /* Preloader
      -------------------------------------------------------*/
    $(window).on("load", function() {

        $("#preloader").fadeOut(500);

    });

    $('#iconified').on('keyup', function() {
        var input = $(this);
        if (input.val().length === 0) {
            input.addClass('empty');
        } else {
            input.removeClass('empty');
        }
    });

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator
    // contact form
    // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


$(window).load(function() {

    /* isotope
    -------------------------------------------------------*/
    var $gallery = $('.gallery').isotope({});
    $('.gallery').isotope({

        itemSelector: '.item-img',
        transitionDuration: '0.5s',

    });


    /* filter items on button click
    -------------------------------------------------------*/
    $('.filtering').on('click', 'button', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on('click', 'button', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

})