


$(document).ready(function(){
    $('.ham').on('click', function() {
        $('.nav__container--list').toggleClass('click');
        $('.ham').toggleClass('close');
    })
    
    $('#home .description .description__iz').on('mouseenter', function() {
        $("#home .description .description__iz").addClass('width');
        $("#home .description .description__de").addClass('width0');
    })
    
    $('#home .description .description__iz').on('mouseleave', function() {
        $("#home .description .description__iz").removeClass('width');
        $("#home .description .description__de").removeClass('width0');
    
    })
    
    $('#home .description .description__de').on('mouseenter', function() {
        $("#home .description .description__de").addClass('width');
        $("#home .description .description__iz").addClass('width0');
    })
    
    $('#home .description .description__de').on('mouseleave', function() {
        $("#home .description .description__de").removeClass('width');
        $("#home .description .description__iz").removeClass('width0');
    
    })


    $('#home .slider .mezcales').slick({
        slidesToShow: 1,
        // autoplay: true,
        nextArrow: $('.arrow'),
    });


    $('#home section.ourFarm .texto .texto1').on('mouseenter', function() {
        $('#home section.ourFarm .texto1').addClass('farm1')
        $('#home section.ourFarm .image1').addClass('imagew1')
    })
    $('#home section.ourFarm .texto .texto1').on('mouseleave', function() {
        $('#home section.ourFarm .texto1').removeClass('farm1')
        $('#home section.ourFarm .image1').removeClass('imagew1')
    })


    $('#home section.ourFarm .texto .texto2').on('mouseenter', function() {
        $('#home section.ourFarm .texto2').addClass('farm2')
        $('#home section.ourFarm .image2').addClass('imagew2')
    })
    $('#home section.ourFarm .texto .texto2').on('mouseleave', function() {
        $('#home section.ourFarm .texto2').removeClass('farm2')
        $('#home section.ourFarm .image2').removeClass('imagew2')
    })


    $('#mezcal section.hero .sliderContainer').slick({
        slidesToShow: 1,
        arrows: true,
        nextArrow: $('.arrowRight'),
        prevArrow: $('.arrowLeft'),
    });


    $('#mezcal section.mezcales .cont').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        centerPadding: '100px',
        centerMode: true,
        arrows: false,
        verticalSwiping: true,
        // autoplay: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                verticalSwiping: false,
                vertical: false,
                centerPadding: '0',
              }
            },
          ]
    });

    $('#masters section.sliderMasters .container').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
    });


    $('#masters section.ourPeople .images .image').on('mouseenter', function(){
        $(this).addClass('grande');
    })
    $('#masters section.ourPeople .images .image').on('mouseleave', function(){
        $(this).removeClass('grande');
    })




    //Menu
    $('section.secondaryMenu ul.links li').on('click', function() {
        $(this).children('button').addClass('active')
        $(this).siblings().children('button').removeClass('active')
    })

    $('section.secondaryMenu ul.links li button.link1').on('click', function(){
        $('section.secondaryMenu .abajo .section .link1').show()
        $('section.secondaryMenu .abajo .section .link2').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link3').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link4').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link5').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link6').hide('fade', 450)
        $('section.secondaryMenu .abajo').addClass('link1')
        $('section.secondaryMenu .abajo').removeClass('link2')
        $('section.secondaryMenu .abajo').removeClass('link3')
        $('section.secondaryMenu .abajo').removeClass('link4')
        $('section.secondaryMenu .abajo').removeClass('link5')
        $('section.secondaryMenu .abajo').removeClass('link6')

    })
    $('section.secondaryMenu ul.links li button.link2').on('click', function(){
        $('section.secondaryMenu .abajo .section .link1').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link3').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link4').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link5').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link6').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link2').show()
        $('section.secondaryMenu .abajo').removeClass('link1')
        $('section.secondaryMenu .abajo').removeClass('link3')
        $('section.secondaryMenu .abajo').removeClass('link4')
        $('section.secondaryMenu .abajo').removeClass('link5')
        $('section.secondaryMenu .abajo').removeClass('link6')
        $('section.secondaryMenu .abajo').addClass('link2')

    })

    $('section.secondaryMenu ul.links li button.link3').on('click', function(){
        $('section.secondaryMenu .abajo .section .link1').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link2').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link3').show()
        $('section.secondaryMenu .abajo .section .link4').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link5').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link6').hide('fade', 450)
        $('section.secondaryMenu .abajo').removeClass('link1')
        $('section.secondaryMenu .abajo').removeClass('link2')
        $('section.secondaryMenu .abajo').addClass('link3')
        $('section.secondaryMenu .abajo').removeClass('link4')
        $('section.secondaryMenu .abajo').removeClass('link5')
        $('section.secondaryMenu .abajo').removeClass('link6')

    })
    $('section.secondaryMenu ul.links li button.link4').on('click', function(){
        $('section.secondaryMenu .abajo .section .link1').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link2').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link3').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link4').show()
        $('section.secondaryMenu .abajo .section .link5').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link6').hide('fade', 450)
        $('section.secondaryMenu .abajo').removeClass('link1')
        $('section.secondaryMenu .abajo').removeClass('link2')
        $('section.secondaryMenu .abajo').removeClass('link3')
        $('section.secondaryMenu .abajo').addClass('link4')
        $('section.secondaryMenu .abajo').removeClass('link5')
        $('section.secondaryMenu .abajo').removeClass('link6')

    })
    $('section.secondaryMenu ul.links li button.link5').on('click', function(){
        $('section.secondaryMenu .abajo .section .link1').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link2').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link3').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link4').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link5').show()
        $('section.secondaryMenu .abajo .section .link6').hide('fade', 450)
        $('section.secondaryMenu .abajo').removeClass('link1')
        $('section.secondaryMenu .abajo').removeClass('link2')
        $('section.secondaryMenu .abajo').removeClass('link3')
        $('section.secondaryMenu .abajo').removeClass('link4')
        $('section.secondaryMenu .abajo').addClass('link5')
        $('section.secondaryMenu .abajo').removeClass('link6')

    })
    $('section.secondaryMenu ul.links li button.link6').on('click', function(){
        $('section.secondaryMenu .abajo .section .link1').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link2').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link3').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link4').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link5').hide('fade', 450)
        $('section.secondaryMenu .abajo .section .link6').show()
        $('section.secondaryMenu .abajo').removeClass('link1')
        $('section.secondaryMenu .abajo').removeClass('link2')
        $('section.secondaryMenu .abajo').removeClass('link3')
        $('section.secondaryMenu .abajo').removeClass('link4')
        $('section.secondaryMenu .abajo').removeClass('link5')
        $('section.secondaryMenu .abajo').addClass('link6')
    })


    $('button.mezcaleros').on('click', function () {
        $('section.sliderCover').removeClass('in');
        $('section.sliderMasters').addClass('in');
        $('section.sliderCover').hide();

    })

  });
