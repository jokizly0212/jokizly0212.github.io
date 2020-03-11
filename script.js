


$(function () {
    var scheduleCounter = 0;
    var scheduleProgressWidth = 10;
    var isScroll = true
 
    // $(window).on('load', function () {
    //     $('.preloader').addClass('complete');
    //     $('.lds-ripple , .logo-loading').addClass('dissappear');
    // });
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
        $('.header, section.skills').addClass('scale');
        $('.my-skill-mobile').css('display', 'none');
        $('.social-icons').css('opacity', '0');
        $('section.skills').addClass('changeZindex')
        $('section.skills').css('display', 'none');
        $('.menu-list a, .menu-contact').addClass('animated fadeInUp')
        $('.menu-question').addClass('animated slideInLeft')
        $('section.about').css('z-index', 98);
        $('.menu-button').css('z-index', 98);
        $('.projects-container').css('z-index', 98);
        $('.scroll').css('opacity', 0);
    });
    $('.close-button').click(function () {
        $('.menu-section').removeClass('display');
        $('.menu-section').css('left', '-100%');
        $('.header, section.skills').css('left', '50%');
        $('.my-skill-mobile').css('display', 'inline-block');
        $('.header, section.skills').removeClass('scale');
        $('.social-icons').css('opacity', '1');
        $('section.skills').css('display', 'block');
        $('section.skills').removeClass('changeZindex')       
        $('.menu-list a, .menu-contact').removeClass('animated fadeInUp')
        $('.menu-question').removeClass('animated slideInLeft')
        $('section.about').css('z-index', 999);
        $('projects-container').css('z-index', 999);
        $('.menu-button').css('z-index', 1000);
        $('.scroll').css('opacity', 1);

    });

    $('html,body').bind('mousewheel DOMMouseScroll', function(e) {  
        if(e.originalEvent.wheelDelta/120 < 0) {
            scheduleCounter++
            scheduleProgressWidth += 1;
            if(scheduleCounter > 100) {
                scheduleCounter = 100
            }
            if(scheduleProgressWidth > 100) {
                scheduleProgressWidth = 100
            }
            
        } else {
            scheduleCounter--
            scheduleProgressWidth -= 1;
            if(scheduleCounter < 0) {
                scheduleCounter = 0
            }
            if(scheduleProgressWidth < 10) {
                scheduleProgressWidth = 11
            }
        }

        ////script for progress bar
        
        $('.schedule-line').css('width', scheduleProgressWidth+'%' )

        if(scheduleProgressWidth === 11) {
            $('#schedule-7pm').css('font-weight', 400);
            $('#schedule-5pm').css('font-weight', 400);
            $('#schedule-12pm').css('font-weight', 400);
            $('#schedule-9am').css('font-weight', 400);
            $('#schedule-7am').css('font-weight', 700);
            $('.images-wrapper img').css('opacity', 0);
            $('#image-7am').css('opacity', 1);
            $('#image-7am').css('z-index', 9999);
        }
        if(scheduleProgressWidth === 29) {
            $('#schedule-7pm').css('font-weight', 400);
            $('#schedule-5pm').css('font-weight', 400);
            $('#schedule-12pm').css('font-weight', 400);
            $('#schedule-9am').css('font-weight', 700);
            $('.images-wrapper img').css('opacity', 0);
            $('#image-9am').css('opacity', 1);
            $('#image-9am').css('z-index', 9999);
        }
        if(scheduleProgressWidth === 49) {
            $('#schedule-7pm').css('font-weight', 400);
            $('#schedule-5pm').css('font-weight', 400);
            $('#schedule-12pm').css('font-weight', 700);
            $('.images-wrapper img').css('opacity', 0);
            $('#image-12pm').css('opacity', 1);
            $('#image-12pm').css('z-index', 9999);
        }
        if(scheduleProgressWidth === 69) {
            $('#schedule-7pm').css('font-weight', 400);
            $('#schedule-5pm').css('font-weight', 700);
            $('.images-wrapper img').css('opacity', 0);
            $('#image-5pm').css('opacity', 1);
            $('#image-5pm').css('z-index', 9999);
        }
        if(scheduleProgressWidth === 91) {
            $('#schedule-7pm').css('font-weight', 700);
            $('.images-wrapper img').css('opacity', 0);
            $('#image-7pm').css('opacity', 1);
            $('#image-7pm').css('z-index', 9999);
            if(isScroll === true) {
                isScroll = false
            }
        }
    })


    ////Script for About Page
    $('body, html').mousemove(function(e) { 
        var moveX = (($(window).width() / 2) - e.pageX) * 0.025;
        var moveY = (($(window).height() / 2) - e.pageY) * 0.025;   
        $('.top-image img').css('margin-left', moveX + 'px');
        $('.top-image img').css('margin-top', moveY + 'px'); 
    });

    $('.design').click(function () {
        $('.skills div').removeClass('active');
        $('.skill-wrapper').removeClass('active');
        $('.design').addClass('active');
        $('.design-skill').parent().addClass('active');
        $('.skill-title').removeClass('animated fadeInUp')
        $('.skill-desc').removeClass('animated fadeInUp')
        $('.design-skill .skill-title').addClass('animated fadeInUp');
        $('.design-skill .skill-desc').addClass('animated fadeInUp');
    })
    $('.application').click(function () {
        $('.skills div').removeClass('active');
        $('.skill-wrapper').removeClass('active');
        $('.application').addClass('active');
        $('.application-skill').parent().addClass('active');
        $('.skill-title').removeClass('animated fadeInUp')
        $('.skill-desc').removeClass('animated fadeInUp')
        $('.application-skill .skill-title').addClass('animated fadeInUp');
        $('.application-skill .skill-desc').addClass('animated fadeInUp');
    })
    $('.development').click(function () {
        $('.skills div').removeClass('active');
        $('.skill-wrapper').removeClass('active');
        $('.development').addClass('active');
        $('.development-skill').parent().addClass('active');
        $('.skill-title').removeClass('animated fadeInUp')
        $('.skill-desc').removeClass('animated fadeInUp')
        $('.development-skill .skill-title').addClass('animated fadeInUp');
        $('.development-skill .skill-desc').addClass('animated fadeInUp');
    })
    $('.illustration').click(function () {
        $('.skills div').removeClass('active');
        $('.skill-wrapper').removeClass('active');
        $('.illustration').addClass('active');
        $('.illustration-skill').parent().addClass('active');
        $('.skill-title').removeClass('animated fadeInUp')
        $('.skill-desc').removeClass('animated fadeInUp')
        $('.illustration-skill .skill-title').addClass('animated fadeInUp');
        $('.illustration-skill .skill-desc').addClass('animated fadeInUp');
    })
    $('.brand-identity').click(function () {
        $('.skills div').removeClass('active');
        $('.skill-wrapper').removeClass('active');
        $('.brand-identity').addClass('active');
        $('.brand-identity-skill').parent().addClass('active');
        $('.skill-title').removeClass('animated fadeInUp')
        $('.skill-desc').removeClass('animated fadeInUp')
        $('.brand-identity-skill .skill-title').addClass('animated fadeInUp');
        $('.brand-identity-skill .skill-desc').addClass('animated fadeInUp');
    })



    ////////Script for projects page
    $('.oodi .project-title').click(function() {
        $(this).toggleClass('title-color');
        $('.superpark .project-title').removeClass('slideRight')
        $('.superpark .project-number').removeClass('display-number');
        $('.superpark .project-right').removeClass('display-project animated fadeInRight faster')
        $('.superpark .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.superpark .project-title').removeClass('title-color');
        $('.porsche .project-title').removeClass('slideRight')
        $('.porsche .project-number').removeClass('display-number');
        $('.porsche .project-right').removeClass('display-project animated fadeInRight faster')
        $('.porsche .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.porsche .project-title').removeClass('title-color');
        $('.seriously .project-title').removeClass('slideRight')
        $('.seriously .project-number').removeClass('display-number');
        $('.seriously .project-right').removeClass('display-project animated fadeInRight faster')
        $('.seriously .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.seriously .project-title').removeClass('title-color');

        $('.oodi .project-title').toggleClass('slideRight')
        $('.oodi .project-number').toggleClass('display-number');
        $('.oodi .project-right').toggleClass('display-project animated fadeInRight faster')
        $('.oodi .project-detail-wrapper').toggleClass('detail-visible animated fadeInUp faster')
    })
    $('.superpark .project-title').click(function() {
        $(this).toggleClass('title-color');
        $('.superpark .project-title').toggleClass('slideRight')
        $('.superpark .project-number').toggleClass('display-number');
        $('.superpark .project-right').toggleClass('display-project animated fadeInRight faster')
        $('.superpark .project-detail-wrapper').toggleClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('slideRight')
        $('.oodi .project-number').removeClass('display-number');
        $('.oodi .project-right').removeClass('display-project animated fadeInRight faster')
        $('.oodi .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('title-color');
        $('.porsche .project-title').removeClass('slideRight')
        $('.porsche .project-number').removeClass('display-number');
        $('.porsche .project-right').removeClass('display-project animated fadeInRight faster')
        $('.porsche .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.porsche .project-title').removeClass('title-color');
        $('.seriously .project-title').removeClass('slideRight')
        $('.seriously .project-number').removeClass('display-number');
        $('.seriously .project-right').removeClass('display-project animated fadeInRight faster')
        $('.seriously .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.seriously .project-title').removeClass('title-color');
        $('.messukeskus .project-title').removeClass('slideRight')
        $('.messukeskus .project-number').removeClass('display-number');
        $('.messukeskus .project-right').removeClass('display-project animated fadeInRight faster')
        $('.messukeskus .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.messukeskus .project-title').removeClass('title-color');
    })
    $('.porsche .project-title').click(function() {
        $(this).toggleClass('title-color');
        $('.porsche .project-title').toggleClass('slideRight')
        $('.porsche .project-number').toggleClass('display-number');
        $('.porsche .project-right').toggleClass('display-project animated fadeInRight faster')
        $('.porsche .project-detail-wrapper').toggleClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('slideRight')
        $('.oodi .project-number').removeClass('display-number');
        $('.oodi .project-right').removeClass('display-project animated fadeInRight faster')
        $('.oodi .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('title-color');
        $('.seriously .project-title').removeClass('slideRight')
        $('.seriously .project-number').removeClass('display-number');
        $('.seriously .project-right').removeClass('display-project animated fadeInRight faster')
        $('.seriously .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.seriously .project-title').removeClass('title-color');
        $('.superpark .project-title').removeClass('slideRight')
        $('.superpark .project-number').removeClass('display-number');
        $('.superpark .project-right').removeClass('display-project animated fadeInRight faster')
        $('.superpark .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.superpark .project-title').removeClass('title-color');
        $('.messukeskus .project-title').removeClass('slideRight')
        $('.messukeskus .project-number').removeClass('display-number');
        $('.messukeskus .project-right').removeClass('display-project animated fadeInRight faster')
        $('.messukeskus .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.messukeskus .project-title').removeClass('title-color');
    })
    $('.seriously .project-title').click(function() {
        $(this).toggleClass('title-color');
        $('.seriously .project-title').toggleClass('slideRight')
        $('.seriously .project-number').toggleClass('display-number');
        $('.seriously .project-right').toggleClass('display-project animated fadeInRight faster')
        $('.seriously .project-detail-wrapper').toggleClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('slideRight')
        $('.oodi .project-number').removeClass('display-number');
        $('.oodi .project-right').removeClass('display-project animated fadeInRight faster')
        $('.oodi .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('title-color');
        $('.porsche .project-title').removeClass('slideRight')
        $('.porsche .project-number').removeClass('display-number');
        $('.porsche .project-right').removeClass('display-project animated fadeInRight faster')
        $('.porsche .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.porsche .project-title').removeClass('title-color');
        $('.superpark .project-title').removeClass('slideRight')
        $('.superpark .project-number').removeClass('display-number');
        $('.superpark .project-right').removeClass('display-project animated fadeInRight faster')
        $('.superpark .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.superpark .project-title').removeClass('title-color');
        $('.messukeskus .project-title').removeClass('slideRight')
        $('.messukeskus .project-number').removeClass('display-number');
        $('.messukeskus .project-right').removeClass('display-project animated fadeInRight faster')
        $('.messukeskus .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.messukeskus .project-title').removeClass('title-color');
    })
    $('.messukeskus .project-title').click(function() {
        $(this).toggleClass('title-color');
        $('.messukeskus .project-title').toggleClass('slideRight')
        $('.messukeskus .project-number').toggleClass('display-number');
        $('.messukeskus .project-right').toggleClass('display-project animated fadeInRight faster')
        $('.messukeskus .project-detail-wrapper').toggleClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('slideRight')
        $('.oodi .project-number').removeClass('display-number');
        $('.oodi .project-right').removeClass('display-project animated fadeInRight faster')
        $('.oodi .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.oodi .project-title').removeClass('title-color');
        $('.porsche .project-title').removeClass('slideRight')
        $('.porsche .project-number').removeClass('display-number');
        $('.porsche .project-right').removeClass('display-project animated fadeInRight faster')
        $('.porsche .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.porsche .project-title').removeClass('title-color');
        $('.superpark .project-title').removeClass('slideRight')
        $('.superpark .project-number').removeClass('display-number');
        $('.superpark .project-right').removeClass('display-project animated fadeInRight faster')
        $('.superpark .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.superpark .project-title').removeClass('title-color');
        $('.seriously .project-title').removeClass('slideRight')
        $('.seriously .project-number').removeClass('display-number');
        $('.seriously .project-right').removeClass('display-project animated fadeInRight faster')
        $('.seriously .project-detail-wrapper').removeClass('detail-visible animated fadeInUp faster')
        $('.seriously .project-title').removeClass('title-color');
    })
})

const math = {
    lerp: (a, b, n) => {
      return (1 - n) * a + n * b
    }
  }
  
  class Cursor {
    constructor() {
      this.el = document.querySelector('[data-cursor]')
      this.stickies = [...document.querySelectorAll('[data-stick-cursor]')]
        console.log(this.stickies = [...document.querySelectorAll('[data-stick-cursor]')]);
      this.data = {
        mouse: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        ease: 0.15,
        dist: 100,
        fx: {
          diff: 0,
          acc: 0,
          velo: 0,
          scale: 0
        }
      }
  
      this.bounds = {
        h: 0,
        a: 0
      }
  
      this.rAF = null
      this.targets = null
  
      this.run = this.run.bind(this)
      this.mousePos = this.mousePos.bind(this)
      this.stick = this.stick.bind(this)
  
      this.state = {
        stick: false
      }
  
      this.init()
    }
  
    mousePos(e) {
      this.data.mouse.x = e.pageX
      this.data.mouse.y = e.pageY
  
      this.data.current.x = e.pageX
      this.data.current.y = e.pageY
    }
  
    getCache() {
      this.targets = []
  
      this.stickies.forEach((el, index) => {
        const bounds = el.getBoundingClientRect()
  
        this.targets.push({
          el: el,
          x: bounds.left + bounds.width / 2,
          y: bounds.top + bounds.height / 2
        })
      })
    }
  
    stick(target) {
      const d = {
        x: target.x - this.data.mouse.x,
        y: target.y - this.data.mouse.y
      }
  
      const a = Math.atan2(d.x, d.y)
      const h = Math.sqrt(d.x * d.x + d.y * d.y)  
  
      if (h < this.data.dist && !this.state.stick) {
  
        this.state.stick = true
        this.data.ease = 0.075
  
        this.data.current.x = target.x - Math.sin(a) * h / 2.5
        this.data.current.y = target.y - Math.cos(a) * h / 2.5
  
        this.el.classList.add('is-active')
      } else if (this.state.stick) {
  
        this.state.stick = false
        this.data.ease = 0.15
      } else if (h > this.data.dist) {
  
        this.el.classList.remove('is-active')
      }
    }
  
    run() {
      this.targets.forEach(this.stick)
  
      this.data.last.x = math.lerp(this.data.last.x, this.data.current.x, this.data.ease)
      this.data.last.y = math.lerp(this.data.last.y, this.data.current.y, this.data.ease)   
  
      this.data.fx.diff = this.data.current.x - this.data.last.x
      this.data.fx.acc = this.data.fx.diff / window.innerWidth
      this.data.fx.velo =+ this.data.fx.acc
      this.data.fx.scale = 1 - Math.abs(this.data.fx.velo * 5)
  
      this.el.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y}px, 0) scale(${this.data.fx.scale})`
  
      this.raf()
    }
  
    raf() {
      this.rAF = requestAnimationFrame(this.run)
    }
  
    addListeners() {
      window.addEventListener('mousemove', this.mousePos, { passive: true })
    }
  
    init() {
      this.getCache()
      this.addListeners()
      this.raf()
    }
  }
  
  const cursor = new Cursor()

  $('.sticky-cursor').bind('mouseover',function () {
    $('.cursor').addClass('is-active');
})
  $('.sticky-cursor').bind('mouseleave',function () {
    $('.cursor').removeClass('is-active');
})

$('.social-icons').bind('mouseover', function () {
  $('.scroll').css('opacity', 0);
})
$('.social-icons').bind('mouseleave', function () {
  $('.scroll').css('opacity', 1);
})