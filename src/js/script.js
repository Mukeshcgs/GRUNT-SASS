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
    // Datepicker
    $(function() {
        $("#datepicker").datepicker({
            inline: true,
            altField: '#date-input'
        });
        $('#date-input').change(function() {
            $('#datepicker').datepicker('setDate', $(this).val());
        });

        /*$('#z').datepicker({
            inline: true,
            altField: '#d'
        });

        $('#d').change(function() {
            $('#z').datepicker('setDate', $(this).val());
        });*/
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
});
