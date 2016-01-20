'use strict';
//This is Custom script.js file.
$(document).ready(function() {
    //Get height for background image
    var winW = $(window).width();
    var winH = $(window).height();
    if (winW < 480) {
        $('.main-bg').css({
            'height': 'auto'
        });
        $('selectors-close').width(winW);
        $('selectors-close').height(winH);
    } else {
        $('.main-bg').height(winH);
    }
    //Align the search center of the page
    //$('.filter-container').height();

    $('.f-popup').click(function(e) {
        $('#selectors-wrapper').css('display', 'block');
        $('#selectors-wrapper').css('opacity', 1);
        $(this).find('.popup').fadeIn('slow');
        //$('body').addClass('hide-scroll');
        //$('.popup').width($(this).width() + 30); 
        e.preventDefault();
        //$(this).find('.bx-controls-direction a.bx-next').trigger('click');
    });

    $('.selectors-close').click(function() {
        $('.filter').find('.popup').fadeOut('slow');
        $('#selectors-wrapper').css('display', 'none');
        $('#selectors-wrapper').css('opacity', 0);
        //$('body').removeClass('hide-scroll');
    });
    // RANGE SLIDER
    $(function() {
        $('#slider-vertical').slider({
            range: true,
            orientation: 'vertical',
            min: 0,
            max: 100,
            values: [5, 50],
            slide: function(event, ui) {
                $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
            }
        });
        $('#amount').val('$' + $('#slider-range').slider('values', 0) +
            ' - $' + $('#slider-range').slider('values', 1));
    });
    //REGION
    $('.region-item').on('click', function() {
        $('.region-item').removeClass('selected');
        $(this).addClass('selected');
        var selectedRegion = $('.region-item.selected').text();
        //alert(selectedRegion); 
        $('#slected-region').text(selectedRegion);
    });

    $('.theme-item').on('click', function() {
        $('.theme-item').removeClass('selected');
        $(this).addClass('selected');
        var selectedTheme = $('.theme-item.selected').text();
        //alert(selectedRegion); 
        $('#slected-theme').text(selectedTheme);
    });

    $('.people-item').on('click', function() {
        $('.people-item').removeClass('selected');
        $(this).addClass('selected');
        var selectedTheme = $('.people-item.selected').text();
        //alert(selectedRegion); 
        $('#slected-people').text(selectedTheme);
    });

    //REGION SLIDER
    /*$('#region-slider').bxSlider({
        mode: 'vertical',
        speed: 500,
        infiniteLoop: false,
        pager: false,
        slideWidth: 300,
        controls: true,
        minSlides: 8,
        maxSlides: 8,
        moveSlides: 1,
    });*/
    //REGION SLIDER
    /*$('#people-slider').bxSlider({
    mode: 'vertical',
    speed: 500,
    infiniteLoop: false,
    pager: false,
    controls: true,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
});
*/

    // Datepicker
    $(function() {
        $('#datepicker').datepicker({
            inline: true,
            altField: '#date-input'
        });
        $('#date-input').change(function() {
            $('#datepicker').datepicker('setDate', $(this).val());
        });
    });

    //FLIP EFFECT
    $('.card').hover(function() {
        $(this).toggleClass('flipped');
    });


    //PARTNER SLIDER
    $('.partner-slider').bxSlider({
        slideWidth: 150,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideMargin: 5,
        auto: true,
        pager: false,
        speed: 1000,
        infiniteLoop: true,
        autoDirection: true,
        controls: false,
    });

    //PARTNER SECTION HEIGHT FIXe
    $('#partners').each(function() {
        var highestBox = 0;
        $('.details', this).each(function() {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }

        });
        $('.details', this).height(highestBox);
    });
    //ABOUT SECTION HEIGHT FIXe
    // $('#prod-serv, #prod-serv-2').each(function() {
    //     var highestBox = 0;
    //     $('.prod-serv-box', this).each(function() {
    //         if ($(this).height() > highestBox) {
    //             highestBox = $(this).height();
    //         }
    //     });
    //     $('.prod-serv-box', this).height(highestBox);
    // });
    //ADDRESS SECTION HEIGHT FIX
    $('.add-cont-sbc').each(function() {
        var highestBox = 0;
        $('.box', this).each(function() {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.box', this).height(highestBox);
    });

    //STYCKEY NAVIGATION


});
var navOffset = $('.sticky-nav').offset().top;
$('.sticky-nav').wrap('<div class="nav-placeholder"></div>');

$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= navOffset) {
        $('.sticky-nav').addClass('navbar-fixed-top');
    } else {
        $('.sticky-nav').removeClass('navbar-fixed-top');
    }
    $('.nav-placeholder').height($('.sticky-nav').outerHeight());
});
/*$(function() {
    $(window).scroll(function() {
        // set distance user needs to scroll before we fadeIn navbar 

        if ($('div').hasClass('main-bg')) {
            var scrollHeight = $(window).height();
        } else {
            var scrollHeight = $('.sticky-nav').height();
        }

        if ($(this).scrollTop() > scrollHeight) {
            //$('.sticky-nav').fadeIn();
            $('.sticky-nav').addClass('navbar-fixed-top');
        } else {
            $('.sticky-nav').removeClass('navbar-fixed-top');
            //$('.sticky-nav').fadeOut();
        }
    });
});
*/
