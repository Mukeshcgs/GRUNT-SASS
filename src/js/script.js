//THis is script.js file
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
    $(".f-popup").click(function(e) {

        $("#selectors-wrapper").css('display', 'block');
        $("#selectors-wrapper").css('opacity', 1);
        $(this).find(".popup").fadeIn("slow");
        $('body').addClass('hide-scroll');
        //$('.popup').width($(this).width() + 30);
        $('#people-slider').bxSlider({
            mode: 'vertical',
            speed: 100,
            pager: false,
            controls: true,
            minSlides: 5,
            infiniteLoop: false,
            maxSlides: 3,
        });
        if (winW < 480) {
            $(window).bind('scroll');
            $(window).bind("touchmove");
        } else {
            $(window).unbind('scroll');
            $(window).unbind("touchmove");
        }

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
    //REGION SLIDER
    /*$('#region-slider').bxSlider({
    mode: 'vertical',
    speed: 500,
    slideMargin: 0,
    infiniteLoop: false,
    pager: false,
    controls: true,
    minSlides: 3,
    maxSlides: 4,
    moveSlides: 3,
    adaptiveHeight: false
});
*/




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
    $('.card').hover(function() {
        $(this).toggleClass('flipped');
    });


    //FILTER SLIDER

});
