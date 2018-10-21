$(function () {
    var counter = 0;
    var progressWidth = 0;
    var isScroll = true
    var windowWidth = $(window).width();
    $(window).on('load', function () {
        $('.preloader').addClass('complete');
        $('.lds-ripple , .logo-loading').addClass('dissappear');
    });
    $('.menu').click(function () {
        $('.nav').toggleClass('animated');
        $('.nav').toggleClass('slideInRight');
        $('.menu').toggleClass('button-menu-slide');
        $('.fa-chevron-left').toggleClass('rotate');
    })
    $('.menu-button').click(function () {
        $('.menu-section').addClass('display');
        $('.menu-section').css('left', '0%');
        $('.header, section.skills').css('left', '100%');
        $('.projects-wrapper').css('left', '100%');
        $('.projects-wrapper').addClass('changeZindex')        
        $('.contact-form-wrapper').css('left', '150%');
        $('.contact-form-wrapper').css('scale', '0.35');
        $('.header, section.skills').addClass('scale');
        $('.social-icons').css('opacity', '0');
        $('section.skills').addClass('changeZindex')
        $('.menu-list a, .menu-contact').addClass('animated fadeInUp')
        $('.menu-question').addClass('animated slideInLeft')
    });
    $('.close-button').click(function () {
        $('.menu-section').removeClass('display');
        $('.menu-section').css('left', '-100%');
        $('.header, section.skills').css('left', '50%');
        $('.projects-wrapper').css('left', '50%');
        $('.contact-form-wrapper').css('left', '50%');
        $('.contact-form-wrapper').css('scale', '1');        
        $('.header, section.skills').removeClass('scale');
        $('.social-icons').css('opacity', '1');
        $('section.skills').removeClass('changeZindex')
        $('.projects-wrapper').removeClass('changeZindex')        
        $('.menu-list a, .menu-contact').removeClass('animated fadeInUp')
        $('.menu-question').removeClass('animated slideInLeft')
    });
    $('section.menu-bar').mousemove(function(e) { 
        var moveX = (($(window).width() / 2) - e.pageX) * 0.02;
        var moveY = (($(window).height() / 2) - e.pageY) * 0.02;   
        $('.tlt-name').css('margin-left', moveX + 'px');
        $('.tlt-name').css('margin-top', moveY + 'px'); 
        $('.subtitle').css('margin-left', moveX + 'px');
        $('.subtitle').css('margin-top', moveY + 'px'); 
    });

    ////Script for About Page
    $('html,body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta/120 > 0) { /////scroll Up
            if($('.about-wrapper').hasClass('scaleDissappear')) {
                $('.about-wrapper').removeClass('scaleDissappear');
                $('.about-wrapper').addClass('scaleAppear');
                $('.about-quote').removeClass('scaleAppear');
                $('.about-quote').addClass('scaleDissappear');
                $('.button-ripple   ').removeClass('display');
                $('section.skills').removeClass('display');
                $('.disk1').removeClass('diskRotate1')
                $('.disk2').removeClass('diskRotate2')
                $('.controlDisk').removeClass('controlDiskRotate')
                isScroll = true
            }
        }
        else{ /////scroll Down
            if($('.about-quote').hasClass('scaleDissappear')) {
                $('.about-quote').removeClass('scaleDissappear');
                $('.about-quote').addClass('scaleAppear');
                $('.about-wrapper').addClass('scaleDissappear');
                $('.about-wrapper').removeClass('scaleAppear');
            } else {
                $('.about-quote').addClass('scaleAppear');
                $('.about-wrapper').addClass('scaleDissappear');
            }
            // console.log('scrolling down !');
        }
    });
    // script for about more//////////////////////////////////////////

    $('html,body').bind('mousewheel', function(e) {  
        if(e.originalEvent.wheelDelta/120 < 0) {
            counter++
            progressWidth += 5;
            if(counter > 100) {
                counter = 100
            }
            if(progressWidth > 300) {
                progressWidth = 300
            }
        } else {
            counter--
            progressWidth -= 5;
            if(counter < 0) {
                counter = 0
            }
            if(progressWidth < 300) {
                progressWidth = 0
            }
        }

        ////script for progress bar
        
        $('.progress-bar').css('width', progressWidth+'px' )
        if(progressWidth === 300) {
            if(isScroll === true) {
                $('.about.header').css('top', '-100%')
                $('section.skills').addClass('display')
                $('section.skills').addClass('slideInDown')
                $('section.skills').on('webkitAnimationEnd', function () {
                    $('section.skills').removeClass('slideInDown')
                })
                $('.progress-bar').css('opacity', '0')
                $('html,body').bind('mousewheel', function(e) {  
                    if(e.originalEvent.wheelDelta/120 > 0) {
                        $('.about.header').css('top', '50%')
                        $('.progress-bar').css('opacity', '1')
                    }
                })
                isScroll = false
            }
            if($('section.skills').hasClass('display')) {
                console.log('yeah')
                $('.disk1').addClass('diskRotate1')
                $('.disk2').addClass('diskRotate2')
                $('.controlDisk').addClass('controlDiskRotate')
            }
        }
    })
    ////////Script for projects page

    $('.center').slick({
        variableWidth: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slideToShow: 1,
                dots: false
            }
        }, {
            breakpoint: 300,
            settings: "unslick" //destroy slick
        }]
    })




    ////////Script for contact form
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAxt6X_6L5oowndcQIkJFfIjGl4jvXAR7U",
        authDomain: "portfoliocontactform-dccda.firebaseapp.com",
        databaseURL: "https://portfoliocontactform-dccda.firebaseio.com",
        projectId: "portfoliocontactform-dccda",
        storageBucket: "portfoliocontactform-dccda.appspot.com",
        messagingSenderId: "868211474073"
    };
    firebase.initializeApp(config);

    var messagesRef = firebase.database().ref('messages');

    $('.input').on("focus blur", function() {
        if ($(this).val().length > 0 || $('.input').is(':focus')) {
            $(this).siblings().addClass('active');
            $(this).parent().addClass('active');
        } else {
            $(this).siblings().removeClass('active').addClass('not');
            $(this).parent().removeClass('active').addClass('not');
        }
    
        if ($(this).val().length < 2 
            && $('.input').is(':focus') != true 
            && $(this).is(':invalid') || $(this).is(':invalid') 
            && $('.input').is(':focus') != true) {
                $(this).parent().addClass('invalid');
                $(this).siblings().addClass('invalid');
        } else {
            $(this).parent().removeClass('invalid');
            $(this).siblings().removeClass('invalid');
        }
    
        if ($(this).val().length > 0 && $(this).is(':valid') && $('.input').is(':focus') != true) {
            $(this).parent().addClass('valid');
            $(this).siblings().addClass('valid');
        } else {
            $(this).parent().removeClass('valid');
            $(this).siblings().removeClass('valid');
        }
    
    });
    
    $('.input').blur(enableBtn);
    
    function enableBtn() {
        if ($('.input').parent('.input-wrap').hasClass('invalid') == true || $('.input').val().length < 2) {
            $("#confirm").prop("disabled", true);
        } else {
            $("#confirm").prop("disabled", false);
        }
    }
    enableBtn();
    
    $('#confirm').click(function() {
        $('form').submit(function(event) {
            var name = getInputVal($('#name'))
            var phone = getInputVal($('#phone'))
            var email = getInputVal($('#email'))
            var message = getInputVal($('#message'))
            var company = getInputVal($('#company'))
            saveMessage(name, phone, email, message, company)
            $('button#confirm').addClass('dissappear')
            $('.checkmark').addClass('checkmark-animation')
            $('.messages-success').addClass('slideInRight')
            event.preventDefault();
        });
    });
    function getInputVal(id) {
        return $(id).val();
    }
    function saveMessage(name, phone, email, message, company) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            phone: phone,
            email: email,
            message: message,
            company: company
        })
    }
})