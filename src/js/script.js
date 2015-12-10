//THis is script.js file
$(document).ready(function() {
    //Get height for background image
    $('.main-bg').height($(window).height());
    //Align the search center of the page
    //$('.filter-container').height();
    $(".filter").click(function(e) {
        $(window).unbind('scroll');
        $("#selectors-wrapper").css('display', 'block');
        $("#selectors-wrapper").css('opacity', 1);
        $(this).find(".popup").fadeIn("slow");
        $('body').addClass('hide-scroll');
        $('.popup').width($(this).width() + 30);

        e.preventDefault();
    });
    $(".selectors-close").click(function() {
        $('.filter').find(".popup").fadeOut("slow");
        $("#selectors-wrapper").css('display', 'none');
        $("#selectors-wrapper").css('opacity', 0);
        $('body').removeClass('hide-scroll');
    });
    // RANGE SLIDER
    $(function() {
        $("#slider-vertical").slider({
            range: true,
            orientation: "vertical",
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });
    //REGION
    var selector = '.region-item';

    $(selector).on('click', function() {
        $(selector).removeClass('selected');
        $(this).addClass('selected');
    });


    // Datepicker
    $(function() {
        $("#datepicker").datepicker({
            inline: true,
            altField: '#date-input'
        });
        $('#date-input').change(function() {
            $('#datepicker').datepicker('setDate', $(this).val());
        });
    });
    $(function() {
        $(window).scroll(function() {
            // set distance user needs to scroll before we fadeIn navbar 
            var scrollHeight = $(window).height();
            if ($(this).scrollTop() > scrollHeight) {
                //$('.sticky-nav').fadeIn();
                $('.sticky-nav').addClass('navbar-fixed-top');
            } else {
                $('.sticky-nav').removeClass('navbar-fixed-top');
                //$('.sticky-nav').fadeOut();
            }
        });
    });
    //FLIP EFFECT
    /*$('.card').hover(function() {
    $(this).toggleClass('flipped');
});
*/

    //FILTER SLIDER
    $(function() {
        var currentPosition = 0;
        var slideWidth = 500;
        var slides = $('.slide');
        //var numberOfSlides = slides.length;
        slides.wrapAll('<div id="slidesHolder"></div>')
        slides.css({
            'float': 'left'
        });
        $('#slideshow').prepend('<span class="nav" id="leftNav">Move Left</span>')
            .append('<span class="nav" id="rightNav">Move Right</span>');
        $('.nav').bind('click', function() {
            if (($(this).attr('id') == 'rightNav')) {
                if (currentPosition == 0) {
                    currentPosition = currentPosition + 1
                } else if (currentPosition == 1) {
                    currentPosition = currentPosition + 1
                } else if (currentPosition == 2) {
                    currentPosition = 0
                }
            }
            if (($(this).attr('id') == 'leftNav')) {
                if (currentPosition == 0) {
                    currentPosition = currentPosition + 2
                } else if (currentPosition == 1) {
                    currentPosition = currentPosition - 1
                } else if (currentPosition == 2) {
                    currentPosition = currentPosition - 1
                }
            }
            moveSlide();
        });

        function moveSlide() {
            $('#slidesHolder').animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
        };
    });
});
